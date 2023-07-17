import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSearch = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="app">
      <SearchHeader search={handleSearch} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
