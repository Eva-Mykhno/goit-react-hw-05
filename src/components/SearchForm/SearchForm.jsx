import { useState } from "react";

const SearchForm = ({ onSubmit, searchValue }) => {
  const [inputValue, setInputValue] = useState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search movie..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.elements.search)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
