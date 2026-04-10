import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getSessions = () => {
  return API.get("/sessions");
};

export const joinSession = (data) => {
  return API.post("/join-session", data);
};