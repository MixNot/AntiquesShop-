// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB-h_T2ZL-a7xt5zMvZmSh8GBXtawzL0c",
  authDomain: "shop-889c6.firebaseapp.com",
  projectId: "shop-889c6",
  storageBucket: "shop-889c6.appspot.com",
  messagingSenderId: "105110075028",
  appId: "1:105110075028:web:7cee5adf1ed39f597e6681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase storage
const storage = getStorage(app);

export { app, storage };