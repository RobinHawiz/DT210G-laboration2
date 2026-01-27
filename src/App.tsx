import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import Spinner from "@/components/Spinner";
import Delay from "@/utils/Delay";

const API_BASE_URL = "https://dt210g-laboration2-backend.azurewebsites.net/api";

export type Todo = {
  id: number;
  title: string;
  status: Status;
};

export enum Status {
  NotStarted = "NOT_STARTED",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}

function App() {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchTodos() {
    setIsLoading(true);
    await Delay(700);
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = (await response.json()) as Array<Todo>;
      const results = data ?? [];
      setTodoList(results);
    } catch (err) {
      console.error(
        `Error fetching todos: ${err instanceof Error ? err.message : err}`,
      );
      setErrorMessage("Error fetching todos. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="max-w-100 w-full flex-center min-h-svh px-2 mx-auto">
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      )}
    </main>
  );
}

export default App;
