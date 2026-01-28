import { memo } from "react";
import { labels, nextStatus } from "@/constants/todo";
import { Status, type Todo } from "@/types/todo";
import DeleteSpinner from "@/components/DeleteSpinner";
import UpdateSpinner from "@/components/UpdateSpinner";

type Props = {
  todo: Todo;
  isUpdating: boolean;
  isDeleting: boolean;
  errorMessage: string;
  onUpdate: (id: number, status: Status) => void;
  onDelete: (id: number) => void;
};

function TodoCard({
  todo,
  isUpdating,
  isDeleting,
  errorMessage,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <li className="bg-secondary p-5 rounded-lg flex flex-col shadow-card gap-2">
      <div className="flex items-center justify-between w-full">
        <h3 className="max-w-60 w-full">{todo.title}</h3>
        <button
          disabled={isUpdating || isDeleting}
          onClick={() => onUpdate(todo.id, nextStatus[todo.status])}
          className="cursor-pointer bg-btn hover:bg-btn-hover transition-colors duration-200 ease-in-out p-2 rounded-lg"
        >
          {isUpdating ? <UpdateSpinner /> : labels[todo.status]}
        </button>
        <button
          disabled={isUpdating || isDeleting}
          onClick={() => onDelete(todo.id)}
          className="cursor-pointer bg-red-700 hover:bg-red-600 transition-colors duration-200 ease-in-out p-2 rounded-lg"
        >
          {isDeleting ? <DeleteSpinner /> : "Delete"}
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </li>
  );
}

export default memo(TodoCard);
