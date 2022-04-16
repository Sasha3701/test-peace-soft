import axios from "axios";

const BASE_URL = " https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

class Api {
  getPhotos = async () => {
    const { data } = await instance.get("/photos");
    return data;
  };
  getPhoto = async (id) => {
    const { data } = await instance.get(`/photos/${id}`);
    return data;
  };
}

const api = new Api();

export default api;
