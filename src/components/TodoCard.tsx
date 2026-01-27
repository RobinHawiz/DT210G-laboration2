import { labels, nextStatus } from "@/constants/todo";
import { Status, type Todo } from "@/types/todo";
import SmallSpinner from "@/components/SmallSpinner";

type Props = {
  todo: Todo;
  updatingTodoIds: Set<number>;
  todoErrorById: Map<number, string>;
  todoUpdateHandler: (id: number, status: Status) => void;
};

function TodoCard({
  todo,
  updatingTodoIds,
  todoErrorById,
  todoUpdateHandler,
}: Props) {
  return (
    <li className="bg-secondary p-5 rounded-lg flex flex-col shadow-card gap-2">
      <div className="flex items-center justify-between w-full">
        <h3 className="max-w-60 w-full">{todo.title}</h3>
        <button
          disabled={updatingTodoIds.has(todo.id)}
          onClick={() => todoUpdateHandler(todo.id, nextStatus[todo.status])}
          className="cursor-pointer bg-btn hover:bg-btn-hover transition-colors duration-200 ease-in-out p-2 rounded-lg"
        >
          {updatingTodoIds.has(todo.id) ? (
            <SmallSpinner />
          ) : (
            labels[todo.status]
          )}
        </button>
      </div>
      {todoErrorById.has(todo.id) && (
        <p className="text-red-500">{todoErrorById.get(todo.id)}</p>
      )}
    </li>
  );
}

export default TodoCard;
