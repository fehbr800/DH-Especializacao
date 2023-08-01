import { useState } from "react";
import { Navbar } from "./components/navbar";
import { AddTask, Itask } from "./components/addTask";

const initialTasks: Itask[] = [
  { id: 1, name: "Ir na academia" },
  { id: 2, name: "Comprar mantimentos" },
];

export default function App() {
  const [tasks, setTasks] = useState<Itask[]>(initialTasks);

  function handleAddTask(newTaskName: string) {
    const newTask: Itask = { id: Date.now(), name: newTaskName };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskToDelete: string) {
    const newTaskList = tasks.filter((task) => task.name !== taskToDelete);
    setTasks(newTaskList);
    console.log(handleAddTask)
  }

  return (
    <div>
      <Navbar />
      <main className="flex items-center p-4 flex-col">
        <AddTask tasks={tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}
