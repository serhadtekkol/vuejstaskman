import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import './styles/fontawesome/all.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import axios from "axios"
import 'animate.css'
import mitt from 'mitt'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Vuex from 'vuex';
import store from './store/store.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvLvC3LvUP9N6wwJ2x0QvR9ow-u3Iydg8",
    authDomain: "taskman-7c60d.firebaseapp.com",
    projectId: "taskman-7c60d",
    storageBucket: "taskman-7c60d.appspot.com",
    messagingSenderId: "72509153361",
    appId: "1:72509153361:web:8ccc8681989b84f766d870",
    measurementId: "G-4EKQ2RWCMM",
    databaseURL: "https://taskman-7c60d-default-rtdb.europe-west1.firebasedatabase.app"
};
const emitter = mitt()

axios.defaults.baseURL = firebaseConfig.databaseURL;



// Initialize Firebase
// const firebase= initializeApp(firebaseConfig);

// const database = getDatabase(firebase);

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);



// Get a reference to the database service

const app = createApp(App)

app.use(Toast);
app.use(router);
app.use(Vuex);
app.use(store);
app.config.globalProperties.emitter = emitter
app.mount('#app')