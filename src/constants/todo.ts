import { Status } from "@/types/todo";

export const nextStatus: Record<Status, Status> = {
  [Status.NotStarted]: Status.InProgress,
  [Status.InProgress]: Status.Completed,
  [Status.Completed]: Status.NotStarted,
};

export const labels: Record<Status, string> = {
  [Status.NotStarted]: "Not started",
  [Status.InProgress]: "In progress",
  [Status.Completed]: "Completed",
};
