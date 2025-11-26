import type { SortOrder } from "../../types/task";

/* P2-14 */
interface SortFilterProps {
  //   sortOrder: string;
  /* P2-19 */
  sortOrder: SortOrder;

  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SortFilterM5P2 = ({ sortOrder, onChange }: SortFilterProps) => {
  return (
    <div className="">
      {/*  P2-15 - added props names  */}
      <select value={sortOrder} onChange={onChange}>
        <option value="asc">Completed last</option>
        <option value="desc">Completed first</option>
      </select>
    </div>
  );
};

export default SortFilterM5P2;
