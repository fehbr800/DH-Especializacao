import { ClipboardText, CheckFat, Circle } from '@phosphor-icons/react';
import { TaskTodo } from './addTodoList';

interface TodoContainerProps {
  todoTasks: TaskTodo[];
}

export function TodoContainer({ todoTasks }: TodoContainerProps) {
  const hasTasks = todoTasks.length > 0;

  return (
    <div className="text-gray-100">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <span className="text-blue font-bold mb-2 md:mb-0">Tarefas criadas</span>
        <span className="text-purple font-bold">Tarefas concluídas</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 max-w-screen-lg mx-auto">
        {hasTasks ? (
          todoTasks.map((todo) => (
            <div key={todo.id} className="bg-gray-600 md:bg-gray-500 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center opacity-40">
                <ClipboardText size={80} />
                <p className="text-2xl font-bold mb-2">Título: {todo.title}</p>
                {todo.isComplete ? (
                  <div className="flex items-center">
                    <CheckFat size={24} className="text-green mr-2" />
                    <p className="text-xl font-light">Concluída</p>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Circle size={24} className="text-red mr-2" />
                    <p className="text-xl font-light">Não concluída</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-600 md:bg-gray-500 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center opacity-40">
              <ClipboardText size={80} />
              <p className="text-2xl font-bold mb-2">Você ainda não tem tarefas cadastradas</p>
              <p className="text-xl font-light">Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
