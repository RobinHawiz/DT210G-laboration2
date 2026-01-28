import type { Status, Todo } from "@/types/todo";
import TodoCard from "@/components/TodoCard";

type Props = {
  todoList: Array<Todo>;
  updatingTodoIds: Set<number>;
  todoErrorById: Map<number, string>;
  todoUpdateHandler: (id: number, status: Status) => void;
};

function TodoList({
  todoList,
  updatingTodoIds,
  todoErrorById,
  todoUpdateHandler,
}: Props) {
  return (
    <ul className="w-full flex flex-col gap-4">
      {todoList.map((todo: Todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          isUpdating={updatingTodoIds.has(todo.id)}
          errorMessage={todoErrorById.get(todo.id) ?? ""}
          onUpdate={todoUpdateHandler}
        />
      ))}
    </ul>
  );
}

export default TodoList;
