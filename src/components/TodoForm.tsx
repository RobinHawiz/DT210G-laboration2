import { labels } from "@/constants/todo";
import { Status } from "@/types/todo";
import React, { useState } from "react";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoStatus, setTodoStatus] = useState(labels[Status.NotStarted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      />
      <div className="flex gap-2">
        <select
          className="bg-secondary px-5 h-12 rounded-lg border-r-12 border-transparent"
          name="status"
          id="status"
          value={todoStatus}
          onChange={(e) => setTodoStatus(e.target.value)}
        >
          {Object.entries(labels).map(([key, value]) => (
            <option className="bg-secondary" key={key} value={key}>
              {value}
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
    </form>
  );
}

export default TodoForm;
