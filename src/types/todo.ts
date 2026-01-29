export type Todo = {
  id: number;
  title: string;
  status: Status;
};

export type TodoPayload = Omit<Todo, "id">;

export enum Status {
  NotStarted = "NOT_STARTED",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}
