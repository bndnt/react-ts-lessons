export interface Task {
  id: string;
  text: string;
  completed: boolean;
}
export interface CreateTaskData {
  text: string;
}
// P2-3.2
export interface UpdateTaskData {
  text: string;
  completed: boolean;
}
/* P2-17 */
export type SortOrder = "asc" | "desc";
