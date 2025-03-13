import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/users",
  headers: {
    "Content-type": "application/json", // application/x-www-form-urlencoded
    },
});

export default http;