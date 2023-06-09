import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./styles.css"

const client = new QueryClient();

function App() {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  function clearState() {
    setFormData({
      id: "",
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    });
  }

  return (
    <QueryClientProvider client={client}>
      <h1 className="text-2xl font-bold">Diário Eletrônico</h1>

      <Form
        formData={formData}
        setFormData={setFormData}
        clearState={clearState}
      />

      <Table formData={formData} setFormData={setFormData} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;