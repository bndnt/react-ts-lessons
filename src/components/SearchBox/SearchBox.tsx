import css from "./SearchBox.module.css";
// P2-8
interface SearchBoxProps {
  search: string;
  // P2-10
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({ search, onChange }: SearchBoxProps) => {
  return (
    <div>
      {/*  P2-9 */}
      <input
        defaultValue={search}
        onChange={onChange}
        type="text"
        className={css.formInput}
        id="name"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
