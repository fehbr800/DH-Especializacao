
const apiUrl = 'https://api-todo-six.vercel.app';

export async function getTodos() {
  const response = await fetch(`${apiUrl}/todo`);
  const data = await response.json();
  return data;
}

export async function createTodo(todo) {
  const response = await fetch(`${apiUrl}/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

export async function deleteTodo(id) {
  const response = await fetch(`${apiUrl}/todo/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export async function updateTodo(id, todo) {
  const response = await fetch(`${apiUrl}/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}
