import TodoList from "@/components/TodoList";
import Spinner from "@/components/Spinner";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todoList,
    isLoading,
    errorMessage,
    updatingTodoIds,
    todoErrorById,
    todoUpdateHandler,
  } = useTodos();

  return (
    <main className="max-w-100 w-full flex-center min-h-svh px-2 mx-auto">
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <TodoList
          todoList={todoList}
          updatingTodoIds={updatingTodoIds}
          todoUpdateHandler={todoUpdateHandler}
          todoErrorById={todoErrorById}
        />
      )}
    </main>
  );
}

export default App;
