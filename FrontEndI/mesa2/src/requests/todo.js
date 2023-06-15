import api from "../services/api";

export async function getTodos() {
  return (await api.get("/todo")).data;
}


export async function addTodo(todo) {
  return (await api.post("/todo", todo)).data;
}


export async function editTodo(data) {
  return (await api.put(`/todo/${data.id}`, data.payload)).data;
}


export async function deleteTodo(id) {
  return (await api.delete(`/todo/${id}`)).data;
}