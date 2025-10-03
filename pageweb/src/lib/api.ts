import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5197",
  withCredentials: true
})
