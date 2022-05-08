<template>
  <div
    :class="isShown ? 'fixed translate-x-0 z-30 w-64' : ''"
    class="md:relative md:-translate-x-0 absolute -translate-x-full inset-y-0 left-0 lg:w-64 md:w-64 bg-white px-8 py-4 border-r overflow-auto z-30 transition duration-200 ease-in-out"
  >
    <div class="flex justify-between item-center">
      <div><i class="far fa-user fa-2x"></i></div>
      <div class="cursor-pointer lg:hidden" @click="isShown = false">
        <i class="far fa-times"></i>
      </div>
    </div>

    <nav class="mt-8">
      <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide">TaskMan</h3>
      <div class="mt-2 -mx-3">
        <a
          href="#"
          class="flex justify-between items-center px-3 py-2 hover:bg-slate-100 hover:rounded-lg"
        >
          <span class="text-sm font-medium text-gray-700">Backlogs</span>
          <span class="text-xs font-semibold text-gray-700">04</span>
        </a>
        <a
          href="#"
          class="flex justify-between items-center px-3 rounded-lg py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"
        >
          <span class="text-sm font-medium text-white">Active Sprits</span>
          <span class="text-xs font-semibold text-white">01</span>
        </a>
        <a href="#" class="flex justify-between items-center px-3 py-2">
          <span class="text-sm font-medium text-gray-700">Reports</span>
          <span class="text-xs font-semibold text-gray-700">13</span>
        </a>
      </div>
      <h3 class="mt-3 text-sm font-semibold text-gray-600 uppercase tracking-wide">
        TAGS
      </h3>
      <div class="mt-2 -mx-3">
        <a
          href="#"
          class="flex justify-between items-center px-3 py-2 border-l border-transparent hover:border-l hover:border-fuchsia-500"
        >
          <span class="text-sm font-medium text-gray-400">Category1</span>
        </a>
        <a href="#" class="flex justify-between items-center px-3">
          <span class="text-sm font-medium text-gray-400">Category2</span>
        </a>
        <a href="#" class="flex justify-between items-center px-3 py-2">
          <span class="text-sm font-medium text-gray-400">Category3</span>
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },

  created() {
    this.emitter.on("my-event", () => {
      if (this.isShown) {
        this.isShown = false;
      } else {
        this.isShown = true;
      }
      localStorage.setItem("adım", "sifrem1234");
      console.log(this.isShown);
    });
  },
};
</script>
