import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit, searchValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    onSubmit(value);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="search"
        name="search"
        placeholder="Search movie..."
        defaultValue={searchValue}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
