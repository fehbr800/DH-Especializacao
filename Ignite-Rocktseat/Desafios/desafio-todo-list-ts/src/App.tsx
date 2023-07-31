import { useState } from "react";
import { Navbar } from "./components/navbar";
import { AddTask, Itask } from "./components/addTask";

const initialTasks: Itask[] = [
  { id: 1, name: "Ir na academia" },
  { id: 2, name: "Comprar mantimentos" },
  
];

export default function App() {
  const [tasks, setTasks] = useState<Itask[]>(initialTasks);

  return (
    <div>
      <Navbar />
      <main>
        {tasks.map((task) => (
          <AddTask key={task.id} task={task} />
        ))}
      </main>
    </div>
  );
}
