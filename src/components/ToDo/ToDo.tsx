import css from "./ToDo.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import { useDebouncedCallback } from "use-debounce";
const ToDo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", search],
    queryFn: () => getTasks(search),
  });
  // const handleSearchChange = (event: ReactChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   setSearch(event.target.value);
  // };
  // npm i use-debounce --save for Debounced callbacks
  const debounceSearch = useDebouncedCallback(
    (event: ReactChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    300
  );
  return (
    <div className={css.container}>
      {/* <input type="text" value={search} onChange={handleSearchChange} /> */}
      <input type="text" defaultValue={search} onChange={debounceSearch} />
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default ToDo;
