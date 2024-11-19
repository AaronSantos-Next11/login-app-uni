import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjk_xzokxHQVjgW_vnhqca2D9sEa6wOw",
  authDomain: "login-app-prueba-1.firebaseapp.com",
  projectId: "login-app-prueba-1",
  storageBucket: "login-app-prueba-1.firebasestorage.app",
  messagingSenderId: "809691277226",
  appId: "1:809691277226:web:098f4df339f4d74b1a2dd3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')