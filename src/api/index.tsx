import axios from "axios";
import { ConverterCard } from "assets/types/Cards";

const axiosApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {},
});

const api = {
  allCards: async () =>
    await axiosApi.get<{ [id: string]: ConverterCard }>("/allCards"),
};

export default api;
