<template>
  <div class="min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 mx-auto animate__animated animate__fadeIn">
      <div
        class="relative px-4 py-4 bg-white shadow-lg rounded-lg bg-clip-padding bg-opacity-60 border border-gray-200"
        style="backdrop-filter: blur(20px)"
      >
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 px-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div>
                <h3 class="font-medium">{{ buttonText }}</h3>
              </div>

              <input
                v-model="user.email"
                type="email"
                class="bg-white/30 w-full rounded-md px-2 py-1.5 text-sm outline-none focus:outline-fuchsia-600 focus:outline-1 text-gray-700 placeholder:text-gray-600 mt-2"
                placeholder="Mail Adress"
              />
              <input
                v-if="buttonstatus == 'signup'"
                v-model="user.username"
                type="email"
                class="bg-white/30 w-full rounded-md px-2 py-1.5 text-sm outline-none focus:outline-fuchsia-600 focus:outline-1 text-gray-700 placeholder:text-gray-600 mt-2"
                placeholder="Mail Adress"
              />

              <input
                v-model="user.password"
                type="password"
                class="bg-white/30 w-full rounded-md px-2 py-1.5 text-sm outline-none focus:outline-fuchsia-600 focus:outline-1 text-gray-700 placeholder:text-gray-600 mt-2"
                placeholder="Password"
              />

              <button
                :class="buttonClass"
                @click="signinup"
                class="w-full px-4 py-1.5 mt-3 text-sm rounded-md text-green-900 hover:bg-green-600 hover:text-white"
              >
                {{ buttonText }}
              </button>
              <br />
              <button
                @click="createUser"
                class="text-xs px-4 py-1.5 rounded-md text-center w-full hover:underline text-gray-700 hover:text-gray-900"
              >
                Or Sign Up
              </button>

              <hr />
              <div class="mt-2 text-gray-500 text-xs w-full text-center">2022 Serhad</div>
              <div
                :class="$store.state.errorcode.length > 3 && !null ? '' : 'hidden'"
                class="w-full bg-red-400 text-red-300 rounded-md ring-2 ring-red-700 text-center py-2 px-2"
              >
                <i class="far fa-exclamation-triangle"></i>
                {{ $store.state.errorcode }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "vue-toastification";

export default {
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      user: {
        email: "serhadbahadir@gmail.com",
        password: "123456",
        username: "serhad",
      },

      buttonText: "Sign In",
      transformClass: "rotate",
      buttonstatus: "signin",
      buttonClass: "bg-green-500/70",
    };
  },

  methods: {
    signinup() {
      const auth = getAuth();
      if (this.buttonstatus === "signin") {
        this.$store.dispatch("login", { ...this.user }).then((response) => {
          console.log(response);

          this.$router.push("/");
        });
      } else {
        this.$store.dispatch("register", { ...this.user }).then((response) => {
          console.log(response);

          this.$router.push("/");
        });

        // createUserWithEmailAndPassword(auth, this.email, this.password)
        //   .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     console.log(user);
        //     console.log(user.uid);

        //     // ...
        //   })
        //   .catch((error) => {
        //     let errorCode = error.code;
        //     //   console.log(errorCode);
        //     let errorMessage = error.message;
        //     console.log(errorMessage);
        //   });
      }
    },

    createUser() {
      if (this.buttonstatus === "signin") {
        this.buttonstatus = "signup";
        this.buttonText = "Sign Up";
        this.buttonClass = "bg-blue-500/70";
      } else {
        this.buttonstatus = "signin";
        this.buttonText = "Sign In";
        this.buttonClass = "bg-green-500/70";
      }
    },
  },
};
</script>
