import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TodoContainer } from './todoContainer';

export interface TaskTodo {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface AddTodoProps {
  todoTask: TaskTodo;
}

export function AddTodo({ todoTask }: AddTodoProps) {
  const [todoList, setTodoList] = useState<string[]>(["Ir na academia"]);
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodoSubmit(event: FormEvent) {
    event.preventDefault();
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewTodoInvalid = newTodo.length === 0;

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleNewTodoSubmit} className="w-full max-w-lg">
        <div className="flex flex-col md:flex-row items-center md:space-x-2 text-gray-100">
          <input
            value={newTodo}
            onChange={handleNewTodoChange}
            onInvalid={handleNewTodoInvalid}
            required
            placeholder="Adicione uma nova tarefa"
            className="w-full md:w-[40vw] p-4 rounded-lg bg-gray-500 focus:outline-none shadow-lg"
            type="text"
          />
          <button
            type='submit'
            disabled={isNewTodoInvalid}
            className="mt-2 md:mt-auto font-bold bg-blueDark rounded-md p-4 flex items-center justify-center gap-1"
          >
            Criar
            <PlusCircle weight="bold" size={20} />
          </button>
        </div>
        <div>
          {todoList.map((todo) => (
            <TodoContainer
             todoTasks={[]}
              key={todo}
            />
          ))}
        </div>
      </form>
      <div></div>
    </div>
  );
}
