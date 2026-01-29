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
    todoAddHandler,
  } = useTodos();

  return (
    <main className="max-w-130 w-full flex-col px-2 py-10 mx-auto">
      <TodoForm todoAddHandler={todoAddHandler} />
      <div className="w-full flex-center min-h-20">
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
      </div>
    </main>
  );
}

export default App;
