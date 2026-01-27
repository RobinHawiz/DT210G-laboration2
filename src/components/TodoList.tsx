import type { Dispatch, SetStateAction } from "react";
import type { Todo } from "@/App";
import TodoCard from "@/components/TodoCard";

type Props = {
  todoList: Array<Todo>;
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
};

function TodoList({ todoList, setTodoList }: Props) {
  return (
    <ul className="w-full">
      {todoList.map((todo: Todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </ul>
  );
}

export default TodoList;
