import { useCallback, useEffect, useState } from "react";
import type { Status, Todo } from "@/types/todo";
import Delay from "@/utils/delay";
import { getTodos, updateTodo } from "@/api/todo";

export default function useTodos() {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [updatingTodoIds, setUpdatingTodoIds] = useState(new Set<number>());
  const [todoErrorById, setTodoErrorById] = useState(new Map<number, string>());

  const todoUpdateHandler = useCallback(
    async (id: number, nextStatus: Status) => {
      // Clear error for this todo
      setTodoErrorById((prev) => {
        const next = new Map(prev);
        next.delete(id);
        return next;
      });

      // Mark todo as updating
      setUpdatingTodoIds((prev) => {
        const next = new Set(prev);
        next.add(id);
        return next;
      });
      await Delay(700);
      try {
        await updateTodo(id, nextStatus);
        setTodoList((prev) =>
          prev.map((el) => {
            if (el.id === id) {
              return {
                ...el,
                status: nextStatus,
              };
            }
            return el;
          }),
        );
      } catch (err) {
        console.error(
          `Error updating todo: ${err instanceof Error ? err.message : err}`,
        );
        // Attach error to this todo
        setTodoErrorById((prev) => {
          const next = new Map(prev);
          next.set(id, "Error updating todo. Please try again later.");
          return next;
        });
      } finally {
        // Unmark updating
        setUpdatingTodoIds((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    },
    [],
  );

  useEffect(() => {
    const todoFetchHandler = async () => {
      setIsLoading(true);
      await Delay(700);

      try {
        setTodoList((await getTodos()) ?? []);
      } catch (err) {
        console.error(
          `Error fetching todos: ${err instanceof Error ? err.message : err}`,
        );
        setErrorMessage("Error getting todos. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    todoFetchHandler();
  }, []);

  return {
    todoList,
    isLoading,
    errorMessage,
    updatingTodoIds,
    todoErrorById,
    todoUpdateHandler,
  };
}
