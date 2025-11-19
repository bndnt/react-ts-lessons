interface SearchFormProps {
  onSearch: (topic: string) => void;
}
const SearchForm = ({ onSearch }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    if (topic === "") {
      alert("Please eneter at least 1 symbol ");
      return;
    }
    onSearch(topic);
  };
  return (
    <form action={handleSubmit} className="flex__container">
      <input type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
