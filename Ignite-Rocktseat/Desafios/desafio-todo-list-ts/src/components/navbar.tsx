import Rocket from "../assets/rocket.svg";
import Todo from "../assets/todo.svg";

export function Navbar() {
  return (
    <aside className="bg-gray700 w-full text-white ">
      <header className="flex justify-center items-center py-4 gap-2">
        <img src={Rocket} alt="" />
        <img src={Todo} alt="" />
      </header>
    </aside>
  );
}
