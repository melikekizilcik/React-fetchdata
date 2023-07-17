import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID N38qNMDyhQWpfIjzM68Mm7D66Gvc_9FtjhUDUm2TZdE",
    },
    params: {
      query: term, //inputtan aldığım değer
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;
