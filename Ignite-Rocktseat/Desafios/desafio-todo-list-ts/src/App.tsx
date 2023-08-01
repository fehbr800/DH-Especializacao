import { TaskTodo } from "./components/addTodoList";
import { Navbar } from "./components/navbar";
import { TodoContainer } from "./components/todoContainer";
import uuid from 'react-uuid';

export default function App() {
  const taskTodo: TaskTodo[] = [
    {
      id: uuid(),
      title: "Ir na praça",
      isComplete: true,
    },
    {
      id: uuid(),
      title: "Ir na Raissa",
      isComplete: false,
    },
  ];

  console.log(taskTodo);

  return (
    <div>
      <Navbar />
      <main className="mt-4 p-4 flex justify-center ">
        {taskTodo.map((todo) => (
          <TodoContainer key={todo.id} todoTasks={[todo]} />
        ))}
      </main>
    </div>
  );
}
