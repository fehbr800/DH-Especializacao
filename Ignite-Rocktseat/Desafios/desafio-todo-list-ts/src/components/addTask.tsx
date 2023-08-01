import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskCardComponent } from "./taskCard";

export interface Itask {
  id: number;
  name: string;
}

interface taskProps {
  task: Itask;
}

export function AddTask({ task }: taskProps) {
  const [taskChange, setTask] = useState([task.name]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    setTask([...taskChange, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const newTaskList = taskChange.filter((task) => task !== taskToDelete);
    setTask(newTaskList);
  }

  const notDisable =
    "bg-blueDark rounded-md font-bold px-4 py-2 gap-1 items-center flex";
  const disableButton = notDisable + " bg-blue";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <form onSubmit={handleAddTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          className="py-2 px-2 bg-gray-500 w-full"
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
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {taskChange.map((taskCard, index) => (
          <TaskCardComponent
            key={index}
            task={taskCard}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
