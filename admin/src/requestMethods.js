// Страрый код
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";

// function getUserRequest() {
//   const persistRoot = JSON.parse(localStorage.getItem("persist:root")) || {};
//   const user = persistRoot.user || {};
//   const currentUser = user.currentUser || {};
//   const TOKEN = currentUser.accessToken;

//   return axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${TOKEN}` },
//   });
// }

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = getUserRequest(); // Вызываем функцию, чтобы получить запрос с токеном