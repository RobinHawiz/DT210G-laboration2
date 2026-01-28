import { memo } from "react";
import { labels, nextStatus } from "@/constants/todo";
import { Status, type Todo } from "@/types/todo";
import SmallSpinner from "@/components/SmallSpinner";

type Props = {
  todo: Todo;
  isUpdating: boolean;
  errorMessage: string;
  onUpdate: (id: number, status: Status) => void;
};

function TodoCard({ todo, isUpdating, errorMessage, onUpdate }: Props) {
  return (
    <li className="bg-secondary p-5 rounded-lg flex flex-col shadow-card gap-2">
      <div className="flex items-center justify-between w-full">
        <h3 className="max-w-60 w-full">{todo.title}</h3>
        <button
          disabled={isUpdating}
          onClick={() => onUpdate(todo.id, nextStatus[todo.status])}
          className="cursor-pointer bg-btn hover:bg-btn-hover transition-colors duration-200 ease-in-out p-2 rounded-lg"
        >
          {isUpdating ? <SmallSpinner /> : labels[todo.status]}
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </li>
  );
}

export default memo(TodoCard);
