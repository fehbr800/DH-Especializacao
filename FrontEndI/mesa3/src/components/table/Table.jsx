import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAlunos from "../../requests/aluno";
import getCursos from "../../requests/cursos";
import { useState } from "react";
import { removerAluno } from "../../requests/aluno";
import { toast } from "react-toastify";

export default function Table(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const { formData, setFormData } = props;

  const alunosQuery = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const cursosQuery = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const alunos = alunosQuery.data || [];
  const cursos = cursosQuery.data || [];

  const alunosMutation = useMutation(removerAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Apagado com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao apagar aluno");
    },
  });

  if (alunosQuery.isFetching) {
    return <h3>Buscando alunos...</h3>;
  }

  function apagarAluno(id) {
    alunosMutation.mutate(id);
  }

  function preencherCampos(aluno) {
    setFormData({ ...aluno, id: aluno._id });
    closeModal();
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Minha tabela</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold text-left">Ordem</th>
            <th className="py-2 px-4 font-semibold text-left">Nome</th>
            <th className="py-2 px-4 font-semibold text-left">Matricula</th>
            <th className="py-2 px-4 font-semibold text-left">Curso</th>
            <th className="py-2 px-4 font-semibold text-left">Bimestre</th>
            <th className="py-2 px-4 font-semibold text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={aluno._id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{aluno.nome}</td>
              <td className="py-2 px-4">{aluno.matricula}</td>
              <td className="py-2 px-4">{aluno.curso}</td>
              <td className="py-2 px-4">{aluno.bimestre}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-green-400 text-sm p-2 transition-transform ease-in-out delay-100 mx-3 text-white font-semibold"
                  onClick={() => {
                    preencherCampos(aluno);
                    openModal();
                  }}
                >
                  Editar
                </button>
                <button
                  className="bg-red-400 text-sm p-2 transition ease-out delay-100 text-white font-semibold"
                  onClick={() => apagarAluno(aluno._id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Editar Aluno</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="nome" className="block font-semibold mb-1">
                  Nome:
                </label>
                <input
                  id="nome"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={(event) =>
                    setFormData({ ...formData, nome: event.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="matricula" className="block font-semibold mb-1">
                  Matrícula:
                </label>
                <input
                  id="matricula"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Matrícula"
                  value={formData.matricula}
                  onChange={(event) =>
                    setFormData({ ...formData, matricula: event.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="curso" className="block font-semibold mb-1">
                  Curso:
                </label>
                <select
                  id="curso"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={formData.curso}
                  onChange={(event) =>
                    setFormData({ ...formData, curso: event.target.value })
                  }
                >
                  <option hidden>Selecione um curso</option>
                  {alunos.map((aluno, idx) => (
                    <option key={idx}>{aluno.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="bimestre" className="block font-semibold mb-1">
                  Bimestre:
                </label>
                <input
                  id="bimestre"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Bimestre"
                  value={formData.bimestre}
                  onChange={(event) =>
                    setFormData({ ...formData, bimestre: event.target.value })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
                  onClick={preencherCampos}
                >
                  Salvar
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
