import { labels } from "@/constants/todo";
import { Status } from "@/types/todo";
import React, { useState } from "react";

const STATUS_VALUES = Object.values<Status>(Status) as readonly Status[];

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoStatus, setTodoStatus] = useState<Status>(Status.NotStarted);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (todoTitle.length < 3 || todoTitle.length > 100) {
      setError("Description must be 3–100 characters.");
      return;
    }

    if (!STATUS_VALUES.includes(todoStatus)) {
      setError("Please choose a valid status.");
      return;
    }
  };

  return (
    <form
      className="w-full mb-5 flex gap-2 flex-wrap items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-secondary w-full rounded-lg px-5 h-12 grow basis-50"
        type="text"
        placeholder="Todo description..."
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        minLength={3}
        maxLength={100}
        required
      />
      <div className="flex gap-2">
        <select
          className="bg-secondary px-5 h-12 rounded-lg border-r-12 border-transparent"
          name="status"
          id="status"
          value={todoStatus}
          onChange={(e) => setTodoStatus(e.target.value as Status)}
        >
          {STATUS_VALUES.map((status) => (
            <option className="bg-secondary" key={status} value={status}>
              {labels[status]}
            </option>
          ))}
        </select>
        <button
          className="cursor-pointer bg-btn hover:bg-btn-hover transition-colors duration-200 ease-in-out px-3 h-12 rounded-lg flex-center"
          type="submit"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default TodoForm;
