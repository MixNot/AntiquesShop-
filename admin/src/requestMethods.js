// Страрый код
// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });

//Новый код
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// Проверяем, существуют ли данные в LocalStorage
let TOKEN = null;
const persistRoot = localStorage.getItem("persist:root");

if (persistRoot) {
    const user = JSON.parse(persistRoot).user;
    if (user) {
        const currentUser = JSON.parse(user).currentUser;
        if (currentUser) {
            TOKEN = currentUser.accessToken;
        }
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: TOKEN ? `Bearer ${TOKEN}` : "" },
});