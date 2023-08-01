import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskCardComponent } from "./taskCard";


interface Itask{
  id: number;
  name: string;
}

export interface AddTaskProps {
  tasks: Itask[];
  onAddTask: (newTaskName: string) => void;
  onDeleteTask: (taskToDelete: string) => void;
 
}

export function AddTask({ tasks, onAddTask, onDeleteTask}: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    if (typeof newTask !== "string") return; // Verifica se newTask é uma string
    if (newTask.trim() === "") return;
  

    // Call the onAddTask function to add the new task to the shared tasks list
    onAddTask(newTask);

    // Clear the newTask state after adding the task
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  // function handleDeleteTask(taskId: number) {
  //   const newTaskList = tasks.filter((task) => task.id !== taskId);
  //   setNewTask(newTaskList);
  // }

  const notDisable =
    "bg-blueDark rounded-md font-bold px-4 py-2 gap-1 items-center flex";
  const disableButton = notDisable + " bg-blue";

  return (
    <div className="absolute top-[8rem] ">
      <form onSubmit={handleAddTask}>
        <div className="flex space-x-1 gap-2 text-gray100">
          <input
            placeholder="Adicione uma nova tarefa"
            className="p-4 bg-gray500 w-full rounded-lg focus:outline-none"
            type="text"
            value={newTask}
            onChange={handleNewTaskChange}
          />
          <button
            type="submit"
            className={newTask.trim() === "" ? disableButton : notDisable}
          >
            Criar <PlusCircle size={20} weight="bold" />
          </button>
        </div>
      </form>
      <div className="flex justify-center flex-wrap items-center w-[80vw] ">
        {tasks.map((task) => (
          <TaskCardComponent
            key={task.id}
            task={task.name}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
