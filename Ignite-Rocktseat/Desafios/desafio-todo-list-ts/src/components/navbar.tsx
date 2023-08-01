import Rocket from "../assets/rocket.svg";
import Todo from "../assets/todo.svg";
import { AddTodo } from "./addTodoList";

export function Navbar() {
  return (
    <aside className="bg-gray700 w-full text-white ">
      <header className="flex justify-center items-center py-4 h-[150px] gap-2">
        <img src={Rocket} alt="" />
        <img src={Todo} alt="" />
      </header>
      <main className="top-[1.5rem] relative ">
        <AddTodo />
      </main>
    </aside>
  );
}
