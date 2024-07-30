const SearchForm = ({ onSubmit, searchValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    onSubmit(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search movie..."
        value={searchValue}
        onChange={(e) => onSubmit(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
