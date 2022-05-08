<template>
  <div class="flex flex-col px-6 border-b border-gray-200">
    <div class="flex justify-between item-center py-3">
      <div class="flex items-center">
        <button @click="showSidebar" class="mr-4 text-gray-600 md:hidden">
          <i class="far fa-bars"></i>
        </button>

        <div class="relative w-64">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3"
            ><i class="far fa-search text-gray-500"></i
          ></span>
          <input
            class="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400"
            placeholder="Search"
          />
        </div>
      </div>
      <div class="flex items-center">
        <button class="text-gray-500"><i class="far fa-bell"></i></button>

        <button @click="logout" class="ml-6 capitalize">
          {{ $store.state.username }}
        </button>
      </div>
    </div>
    <div class="flex item-center justify-between py-2">
      <div class="flex">
        <h2 class="text-lg font-medium text-gray-700">Assigness</h2>
        <div class="flex item-center">
          <span class="border-2 border-white rounded-full"
            ><img
              class="w-6 h-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
          /></span>
          <span class="border-2 border-white rounded-full -ml-2"
            ><img
              class="w-6 h-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
          /></span>
          <span class="border-2 border-white rounded-full -ml-2"
            ><img
              class="w-6 h-6 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
          /></span>
        </div>
      </div>
      <div class="flex items-center">
        <button
          class="text-sm font-medium bg-gray-900 text-white rounded-md pr-4 py-1.5 pl-2 hover:bg-gray-700"
        >
          btn1
        </button>

        <button
          class="rounded-md pr-4 py-1.5 pl-2 flex item-center ml-5 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-fuchsia-500 hover:to-pink-400"
          @click="newItem"
        >
          <i class="far fa-plus w-5 h-5 pt-1"></i> New Item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  methods: {
    showSidebar() {
      console.log("header basıldı");
      this.emitter.emit("my-event");
    },
    newItem() {
      this.emitter.emit("shownewitem");
    },
    logout() {
      this.$store.dispatch("logout");
      router.push("\login");
    },
  },
};
</script>
