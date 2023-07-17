import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); //formun yenilenmesini engeller
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value); //inputtan gelen değeri okuma
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsunuz?</label>
        <input value={value} onChange={handleChange} />
        <div>{value}</div>
      </form>
    </div>
  );
}

export default SearchHeader;
