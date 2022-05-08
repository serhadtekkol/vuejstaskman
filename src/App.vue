<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header>


    <div class="wrapper"> -->
  <!-- <HelloWorld msg="You did it!" /> -->

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div>
    <div v-if="isloginpage"></div>
    <div class="h-screen flex">
      <!-- nav menu top -->
      <appSidebar v-if="!isloginpagebool"></appSidebar>

      <div class="flex flex-col flex-1 min-w-0">
        <!-- sadfsadfsadf -->

        <appHeader v-if="!isloginpagebool"></appHeader>

        <RouterView />
      </div>
    </div>
  </div>
</template>

<style></style>
<script>
import sidebar from "./components/sidebar.vue";
import header from "./components/header.vue";

import login from "./views/login.vue";

export default {
  data() {
    return {
      isShown: false,
      isloginpagebool: null,
    };
  },

  components: {
    appSidebar: sidebar,
    appHeader: header,
    appLogin: login,
  },

  computed: {
    isloginpage() {
      let isloginpage = false;
      if (this.$route.name === "loginpage") {
        console.log("+" + this.$route.name);
        this.isloginpagebool = true;
      } else {
        if (typeof this.$route.name === "undefined") {
          console.log("-" + this.$route.name);
        } else {
          this.isloginpagebool = false;
        }
      }

      return isloginpage;
    },
  },
};
</script>
