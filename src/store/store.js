import Vuex from "vuex"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "vue-toastification";
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";
const toast = useToast()



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
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const store = new Vuex.Store({
    state: {

        databaseURL: "https://taskman-7c60d-default-rtdb.europe-west1.firebasedatabase.app",
        singUpUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
        singInUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
        dbUrl: "https://firestore.googleapis.com/v1/projects/taskman-7c60d/databases/(default)/documents/",

        islogin: false,
        token: "",
        errorcode: 1,
        username: null,
        categories: [],
        posts: [],


    },
    actions: {


        createNewTask({ commit, dispatch, state }, payload) {
            axios.post(state.dbUrl + "tasks", {
                fields: {
                    taskCategory: { stringValue: payload.category },
                    taskTitle: { stringValue: payload.title },
                    taskDescription: { stringValue: payload.description },
                    taskDate: { timestampValue: new Date() },
                    taskBadgeColor: { stringValue: payload.categoryBClass },
                    taskBadgeTextColor: { stringValue: payload.categoryTClass },



                }

            }).then((res) => {
                console.log(res)

            })



        },







        login({ commit, dispatch, state }, authdata) {




            return axios
                .post(state.singInUrl + firebaseConfig.apiKey, {

                    email: authdata.email,
                    password: authdata.password,
                    returnSecureToken: true,

                })
                .then((response) => {


                    getusercredidential(state, authdata.email)


                    commit("setToken", response.data.idToken)
                        // console.log(response)


                })
                .catch((e) => {

                    console.log(e)
                    console.log(e.response.data.error.message)
                    state.errorcode = getErrorMessage(e.response.data.error.message)
                });




        },

        logout({ commit, state }) {

            localStorage.clear()
            commit("clearToken")
            state.token = ""


        },


        async getCategories({ commit, dispatch, state }) {

            const q = query(collection(db, "badgelist"), where("active", "==", true));


            state.categories = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {

                console.log(doc.data().text);
                state.categories.push(doc.data())


                store.dispatch("getposts", doc.data().text);



            });



            console.log(state.categories)



        },



        async getposts({ commit, dispatch, state }, payload) {



            const qs = query(collection(db, "tasks"), where("taskCategory", "==", payload));


            state.posts.push[payload]
            const querySnapshots = await getDocs(qs);
            querySnapshots.forEach((docs) => {

                // console.log(docs.data().taskDescription);

                state.posts.push(docs.data())




            });
            console.log(state.posts)
        },


        register({ commit, dispatch, state }, authdata) {



            return axios
                .post(state.singUpUrl + state.apiKey, {

                    email: authdata.email,
                    password: authdata.password,
                    returnSecureToken: true,

                })
                .then((response) => {
                    commit("setToken", response.data.idToken)
                        // console.log(response)
                    console.log(response.data)

                    axios.post(state.dbUrl + "users", {
                        fields: {
                            usermail: { stringValue: authdata.email },
                            username: { stringValue: authdata.username },
                            useractive: { booleanValue: true },
                            datetime: { timestampValue: new Date() },


                        }

                    }).then((res) => {
                        console.log(res)
                        state.username = authdata.username


                    })


                })
                .catch((e) => {

                    console.log(e)
                    console.log(e.response.data.error.message)
                    state.errorcode = getErrorMessage(e.response.data.error.message)
                });



        },






    },
    mutations: {
        setToken(state, token) {

            state.token = token
            localStorage.setItem("tokenid", token)

        },

        clearToken(state) {

            state.token = ""

        }
    },
    getters: {

        isAuthenticated(state) {

            if (localStorage.getItem("tokenid") != null)
                state.token = localStorage.getItem("tokenid")
            state.username = localStorage.getItem("username")
            return state.token !== ""


        }

    }
});


async function getusercredidential(state, usermail) {
    const q = query(collection(db, "users"), where("usermail", "==", usermail));

    let r = [];
    console.log(usermail)
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {


        r = doc.data();
        state.username = r.username;
        localStorage.setItem("username", r.username)
        console.log(state.username)
    });

    return r;
}



function getErrorMessage(str) {
    const returns = "An Error Accurated";
    switch (str) {
        case "EMAIL_NOT_FOUND":
            return "Account not found";
            break;
        case "INVALID_PASSWORD":
            return "Password or Mail Adress is wrong";
            break;

        case "USER_DISABLED":
            return "This Account Banned or Disabled";
            break;
        case "auth/user-disabled":
            return "This mail adress blocked or not verified by administrator";
            break;
        case "auth/wrong-password":
            return "Password or mail adress is wrong";
            break;
        case "auth/too-many-requests":
            return "Password or mail adress error. Maybe too many attempted";
            break;

        default:
            return "bi hata oldu";
            break;
    }
}


export default store;