import { type Dispatch, type SetStateAction } from "react";
import { type Todo } from "@/App";

type Props = {
  todo: Todo;
  todoList: Array<Todo>;
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
};

function TodoCard({ todo, todoList, setTodoList }: Props) {
  return (
    <li className="bg-secondary p-5 rounded-lg flex items-center justify-between w-full shadow-card">
      <h3 className="max-w-60 w-full">{todo.title}</h3>
      <button className="cursor-pointer bg-btn hover:bg-btn-hover transition-colors duration-200 ease-in-out p-2 rounded-lg">
        {todo.status}
      </button>
    </li>
  );
}

export default TodoCard;
