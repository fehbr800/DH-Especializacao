interface TaskCardProps {
    task: string;
    onDeleteTask: (task: string) => void;
  }
  
  export function TaskCardComponent({ task, onDeleteTask }: TaskCardProps) {
    return (
      <div className="bg-gray-300 md:bg-gray-800 p-6 rounded-lg shadow-lg">
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
  