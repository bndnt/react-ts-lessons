import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task, UpdateTaskData } from "../../types/task";
import css from "./TaskList.module.css";
import { deleteTask, updateTask } from "../../services/taskService";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  // для инвалижации кеша
  const queryClient = useQueryClient();
  const { mutate: deleteTaskM, isPending } = useMutation({
    mutationFn: (id: Task["id"]) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const { mutate: updateTaskM } = useMutation({
    mutationFn: ([id, data]: [Task["id"], UpdateTaskData]) =>
      updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={() =>
              updateTaskM([
                task.id,
                {
                  text: task.text,
                  completed: !task.completed,
                },
              ])
            }
          />
          <span className={css.text}>{task.text}</span>
          <button
            disabled={isPending}
            type="button"
            className={css.button}
            onClick={() => deleteTaskM(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
