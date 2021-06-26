import axios from "axios";
const baseURL = "https://openlibrary.org";

export const getBooks = (query) => {
  return axios({
    method: "get",
    url: `${baseURL}/search.json?title=${query}`
  });
};
