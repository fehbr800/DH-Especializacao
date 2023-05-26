import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getCursos from "../../requests/cursos";
import { editarAluno, saveAluno } from "../../requests/aluno";

export default function Form(props) {
  const queryClient = useQueryClient();

  const { formData, setFormData, clearState } = props;

  const { data, isFetching } = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const saveAlunoMutation = useMutation(saveAluno, {
    onSuccess: () => {
      alert("salvo com sucesso");
      queryClient.invalidateQueries(["@alunos"]);
    },
    onError: () => alert("Erro ao salvar dados"),
  });

  const editAlunoMutation = useMutation(editarAluno, {
    onSuccess: () => {
      alert("editado com sucesso");
      queryClient.invalidateQueries(["@alunos"]);
    },
    onError: () => alert("Erro ao salvar dados"),
  });

  function edit() {
    editAlunoMutation.mutate({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  function save() {
    saveAlunoMutation.mutate({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  if (saveAlunoMutation.error || editAlunoMutation.error) {
    return <h3>Erro ao salvar aluno...</h3>;
  }

  if (isFetching) {
    return <h2>carregando...</h2>;
  }

  return (
    <div className="min-w-full flex justify-center">
      <input
        className="mx-2 border border-gray-300 rounded-md py-2 px-4"
        placeholder="Nome"
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
      />
      <input
        className="mx-2 border border-gray-300 rounded-md py-2 px-4"
        placeholder="Matricula"
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
      />

      <select
        className="mx-2 border border-gray-300 rounded-md py-2 px-4"
        value={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
      >
        <option hidden>Selecione um curso</option>
        {data.cursos.map((curso, idx) => (
  <option key={idx}>{curso.name}</option>
))}

      </select>
      <input
        className="mx-2 border border-gray-300 rounded-md py-2 px-4"
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
      />
      <button
        className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={formData.id ? edit : save}
      >
        Salvar
      </button>
    </div>
  );
}
