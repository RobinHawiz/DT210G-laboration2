import TodoList from "@/components/TodoList";
import Spinner from "@/components/Spinner";
import useTodos from "@/hooks/useTodos";
import TodoForm from "@/components/TodoForm";

function App() {
  const {
    todoList,
    isLoading,
    errorMessage,
    updatingTodoIds,
    deletingTodoIds,
    todoErrorById,
    todoUpdateHandler,
    todoDeleteHandler,
  } = useTodos();

  return (
    <main className="max-w-130 w-full flex-center flex-col min-h-svh px-2 mx-auto">
      <TodoForm />
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <TodoList
          todoList={todoList}
          updatingTodoIds={updatingTodoIds}
          deletingTodoIds={deletingTodoIds}
          todoUpdateHandler={todoUpdateHandler}
          todoDeleteHandler={todoDeleteHandler}
          todoErrorById={todoErrorById}
        />
      )}
    </main>
  );
}

export default App;
