import type { Status, Todo } from "@/types/todo";
import request from "@/api/request";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getTodos() {
  return await request<Array<Todo>>(`${API_BASE_URL}/todos`);
}

export async function updateTodo(id: number, status: Status) {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: status }),
  };
  await request(`${API_BASE_URL}/todos/${id}`, options);
}

export async function deleteTodo(id: number) {
  const options = {
    method: "DELETE",
  };
  await request(`${API_BASE_URL}/todos/${id}`, options);
}
