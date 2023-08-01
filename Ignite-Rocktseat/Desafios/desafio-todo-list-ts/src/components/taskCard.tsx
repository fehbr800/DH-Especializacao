interface TaskCardProps {
  task: string;
  onDeleteTask: (taskToDelete: string) => void;
}

export function TaskCardComponent({ task, onDeleteTask }: TaskCardProps) {
  return (
    <div className=" flex justify-between items-center md:bg-gray500 text-gray100 p-6 m-3 w-[80rem] rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{task}</h2>
      <button
        className="bg-red-500 text-white font-semibold px-4 py-2 mt-2 rounded"
        onClick={() => onDeleteTask(task)}
      >
        Excluir
      </button>
    </div>
  );
}
