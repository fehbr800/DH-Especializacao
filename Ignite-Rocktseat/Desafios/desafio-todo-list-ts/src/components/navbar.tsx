import Rocket from "../assets/rocket.svg";
import Todo from "../assets/todo.svg";
import { AddTask } from "./addTask";

export function Navbar() {
  return (
    <aside className="bg-gray700 w-full h-[150px] flex justify-center items-center text-white ">
      <header className="flex justify-center py-4 gap-2">
        <img src={Rocket} alt="" />
        <img src={Todo} alt="" />
      </header>
      <main>
       
      </main>
    </aside>
  );
}
