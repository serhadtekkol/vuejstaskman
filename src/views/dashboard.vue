<template>
  <div class="bg-gray-50 flex-1 overflow-auto">
    <div class="h-full p-3 inline-flex space-x-2 overflow-hidden">
      <!--      main -->
      <div class="flex flex-col w-80 bg-transparent rounded-md">
        <h3
          class="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1"
        >
          Todo
        </h3>

        <p v-for="item in $store.state.posts">
          {{ item.taskDescription }}
        </p>

        <div class="flex-1 min-h-0">
          <ul class="pt-1 pb-3 px-3">
            <li class="mt-3">
              <a href="#" class="block p-5 rounded-md bg-white shadow">
                <div>
                  <div class="flex items-baseline justify-between">
                    <div class="bg-blue-200 rounded px-3 py-1">
                      <span class="text-sm font-medium text-blue-500 leading-tight"
                        >Design</span
                      >
                    </div>
                    <div class="text-sm text-gray-400">
                      <i class="far fa-paperclip"></i><span class="item-center"> 2</span>
                    </div>
                  </div>
                  <div class="text-sm mt-3">
                    <p class="text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                      consequuntur repellat sed
                    </p>
                  </div>
                  <div class="mt-3">
                    <span class="text-xs p-1 bg-blue-200 rounded-md text-blue-400 px-2"
                      >Serhad</span
                    >
                  </div>
                </div>
              </a>
            </li>

            <li class="mt-3">
              <a href="#" class="block p-5 rounded-md bg-white shadow">
                <div>
                  <div class="flex items-baseline justify-between">
                    <div class="bg-orange-500 rounded px-3 py-1">
                      <span class="text-sm font-medium text-orange-800 leading-tight"
                        >Design</span
                      >
                    </div>
                    <div class="text-sm text-gray-400">
                      <i class="far fa-paperclip"></i><span class="item-center"> 2</span>
                    </div>
                  </div>
                  <div class="text-sm mt-3">
                    <p class="text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                      consequuntur repellat sed
                    </p>
                  </div>
                  <div class="mt-3">
                    <span class="text-xs p-1 bg-blue-200 rounded-md text-blue-400 px-2"
                      >Serhad</span
                    >
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- her colon -->
      <div class="flex flex-col w-80 bg-transparent rounded-md">
        <h3
          class="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1"
        >
          In Progres
        </h3>
        <div class="flex-1 min-h-0 overflow-y-auto">
          <ul class="pt-1 pb-3 px-3">
            <li class="mt-1">
              <a href="#" class="block p-5 rounded-md bg-white shadow">
                <div>
                  <div class="flex items-baseline justify-between">
                    <div class="bg-blue-200 rounded px-3 py-1">
                      <span class="text-sm font-medium text-blue-500 leading-tight"
                        >Design</span
                      >
                    </div>
                    <div class="text-sm text-gray-400">
                      <i class="far fa-paperclip"></i><span class="item-center"> 2</span>
                    </div>
                  </div>
                  <div class="text-sm mt-3">
                    <p class="text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                      consequuntur repellat sed
                    </p>
                  </div>
                  <div class="mt-3">
                    <span class="text-xs p-1 bg-blue-200 rounded-md text-blue-400 px-2"
                      >Serhad</span
                    >
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- testing -->

      <div class="flex flex-col w-80 bg-transparent rounded-md">
        <h3
          class="text-md font-medium text-gray-700 leading-tight font-mono px-3 pt-3 pb-1"
        >
          testing
        </h3>
        <div class="flex-1 min-h-0">
          <ul class="pt-1 pb-3 px-3">
            <li class="mt-1">
              <a href="#" class="block p-5 rounded-md bg-white shadow">
                <div>
                  <div class="flex items-baseline justify-between">
                    <div class="bg-blue-200 rounded px-3 py-1">
                      <span class="text-sm font-medium text-blue-500 leading-tight"
                        >Design</span
                      >
                    </div>
                    <div class="text-sm text-gray-400">
                      <i class="far fa-paperclip"></i><span class="item-center"> 2</span>
                    </div>
                  </div>
                  <div class="text-sm mt-3">
                    <p class="text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                      consequuntur repellat sed
                    </p>
                  </div>
                  <div class="mt-3">
                    <span class="text-xs p-1 bg-blue-200 rounded-md text-blue-400 px-2"
                      >Serhad</span
                    >
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <newtask
    :class="[shownewitem ? '' : 'hidden', shownewitemclass]"
    class="animate__animated"
  ></newtask>
</template>

<script>
import newtask from "../components/newtask.vue";
export default {
  components: {
    newtask,
  },
  data() {
    return {
      shownewitem: false,
      shownewitemclass: "",
    };
  },

  created() {
    this.$store.dispatch("getCategories");

    this.emitter.on("shownewitem", () => {
      if (this.shownewitem) {
        this.shownewitemclass = " animate__fadeOut";

        setTimeout(() => {
          this.shownewitem = false;
        }, 1500);
      } else {
        this.shownewitemclass = " ";

        this.shownewitem = true;
      }
    });
  },
};
</script>
