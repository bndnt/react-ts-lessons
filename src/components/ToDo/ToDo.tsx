import css from "./ToDo.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "../SearchBox/SearchBox";
import SortFilterM5P2 from "../SortFilterM5P2/SortFilterM5P2";
/* P2-18 */
import type { SortOrder } from "../../types/task";

import useModalControl from "../hooks/useModalControl";
const ToDo = () => {
  const { isModalOpen, openModal, closeModal } = useModalControl();
  // если 2 модалки
  // const {
  //   isModalOpen: isCreateTaskModalOpen,
  //   openModal: openCreateTaskModalOpen,
  //   closeModal: closeCreateTaskModalOpen,
  // } = useModalControl();

  // P2-1
  const [search, setSearch] = useState("");

  /* P2-12 asc - desc*/
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  // P2-3.3
  const { data, isLoading } = useQuery({
    queryKey: ["tasks", search, sortOrder],
    queryFn: () => getTasks(search, sortOrder),
  });
  // P2-2
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   setSearch(event.target.value);
  // };
  // P2-4
  // npm i use-debounce --save for Debounced callbacks
  // P2-5
  const debounceSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    300
  );
  /* P2-13, P2-16 */
  const handleSortOrderSearch = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value as SortOrder);
  };
  return (
    <div className={css.container}>
      {/* <input type="text" value={search} onChange={handleSearchChange} /> */}
      {/* P2-6 */}
      {/* <input type="text" defaultValue={search} onChange={debounceSearch} /> */}
      <header className={css.header}>
        {/* P2-7 */}
        <SearchBox search={search} onChange={debounceSearch} />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
        {/* P2-11 */}
        <SortFilterM5P2
          sortOrder={sortOrder}
          onChange={handleSortOrderSearch}
        />
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
