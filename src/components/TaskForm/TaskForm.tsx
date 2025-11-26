import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { createTask } from "../../services/taskService";
import type { CreateTaskData } from "../../types/task";
interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    // isPending - показывает в период мутации на какой стадии процесс изменений
    mutationFn: (data: CreateTaskData) => createTask(data),
  });

  const handleSubmit = (data: FormData) => {
    mutate(
      {
        text: data.get("text") as string,
      },
      {
        onSuccess: () => {
          // инвалижация кеша
          queryClient.invalidateQueries({ queryKey: ["tasks"] });
          onSuccess();
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };
  console.log(isPending);

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button} disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
