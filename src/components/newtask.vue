<template>
  <div class="z-50 fixed left-0 bottom-0 backdrop-blur-sm bg-gray-800/30 w-full h-full">
    <div class="w-3/4 mx-auto flex justify-center items-center h-screen">
      <div
        class="rounded-lg bg-white p-4 pt-3 shadow-sm shadow-slate-600 xl:w-2/5 w-5/6 animate__animated animate__fadeInDown"
      >
        <div class="flex justify-between">
          <span class="text-gray-600">New Item</span
          ><span @click="shownewitem" class="text-gray-600"
            ><i class="far fa-times"></i
          ></span>
        </div>
        <!-- içerik kısmı -->

        <div class="pt-3">
          <input
            v-model="task.title"
            class="border-slate-300 mt-2 px-2 py-1 rounded-md border w-full outline-none caret-fuchsia-700 text-sm text-gray-700"
            type="text"
            placeholder="Task Name"
          />
        </div>

        <div class="pt-3">
          <textarea
            v-model="task.description"
            class="border-slate-300 capitalize border rounded-md w-full outline-none pl-2 pr-2 py-1 text-sm text-gray-700 caret-fuchsia-700"
            placeholder="Description"
          ></textarea>
        </div>

        <div>
          <h4 class="text-sm text-gray-700">Select Category</h4>
          <div>
            <button
              @click="
                [
                  (task.category = item.text.stringValue),
                  (task.categoryBClass = item.bgColor.stringValue),
                  (task.categoryTClass = item.TextColor.stringValue),
                ]
              "
              v-for="item in category"
              :class="[item.TextColor.stringValue, item.bgColor.stringValue]"
              class="text-sm rounded-lg py-1 px-1.5 mr-3 mt-3"
            >
              {{ item.text.stringValue }}
            </button>
          </div>
        </div>
        <div class="float-right">
          <button
            @click="saveItem"
            class="bg-blue-700 text-white px-3 hover:bg-blue-500 py-1.5 rounded-lg mt-3"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
import FireStoreParser from "firestore-parser";
export default {
  data() {
    return {
      isshown: "",
      category: [],
      task: {
        category: null,
        categoryTClass: null,
        categoryBClass: null,
        title: null,
        description: null,
        date: null,
      },
    };
  },

  methods: {
    shownewitem() {
      this.emitter.emit("shownewitem");
    },

    saveItem() {
      this.$store.dispatch("createNewTask", { ...this.task }).then((response) => {
        console.log(response);
      });
    },
  },

  created() {
    console.log("asdas");
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/taskman-7c60d/databases/(default)/documents/badgelist"
      )
      .then((response) => {
        // console.log(response.data.documents);
        let data = response.data.documents;
        for (let key in data) {
          // console.log(key);
          // console.log(data[key].fields);
          this.category.push({ ...data[key].fields, id: key });
          // console.log(this.category);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
