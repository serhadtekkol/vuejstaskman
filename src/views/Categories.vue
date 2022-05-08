<template>
  <div class="h-screen bg-gray-50">
    <div class="mx-auto mt-5 w-5/6 bg-white rounded-md py-3 text-sm shadow px-3">
      <div class="align-middle pt-1 pb-1">
        <span class="w-36 pt-1 pr-1 text-gray-600">Category Name</span>

        <input
          v-model="categoryName"
          @keyup="previewBadge()"
          class="border-slate-300 mt-2 px-2 py-1 rounded-md border w-full outline-none caret-fuchsia-700"
          type="text"
          placeholder="Category Name"
        />
      </div>

      <div class="align-middle pt-1 pb-1 mt-2">
        <span class="w-36 pt-1 pr-1 text-gray-700">Badge Color</span>

        <div class="mt-2">
          <button
            @click="
              (previewItem.bgColor = 'bg-red-300'),
                (previewItem.TextColor = 'text-red-700')
            "
            class="text-red-700 bg-red-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>

          <button
            @click="
              (previewItem.bgColor = 'bg-green-300'),
                (previewItem.TextColor = 'text-green-700')
            "
            class="ml-2 text-green-700 bg-green-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>

          <button
            @click="
              (previewItem.bgColor = 'bg-blue-300'),
                (previewItem.TextColor = 'text-blue-700')
            "
            class="ml-2 text-blue-700 bg-blue-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>

          <button
            @click="
              (previewItem.bgColor = 'bg-gray-300'),
                (previewItem.TextColor = 'text-gray-700')
            "
            class="ml-2 text-gray-700 bg-gray-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-pink-300'),
                (previewItem.TextColor = 'text-pink-700')
            "
            class="ml-2 text-pink-700 bg-pink-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-fuchsia-300'),
                (previewItem.TextColor = 'text-fuchsia-700')
            "
            class="ml-2 text-fuchsia-700 bg-fuchsia-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-yellow-300'),
                (previewItem.TextColor = 'text-yellow-700')
            "
            class="ml-2 text-yellow-700 bg-yellow-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-orange-300'),
                (previewItem.TextColor = 'text-orange-700')
            "
            class="ml-2 text-orange-700 bg-orange-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-lime-300'),
                (previewItem.TextColor = 'text-lime-700')
            "
            class="ml-2 text-lime-700 bg-lime-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-cyan-300'),
                (previewItem.TextColor = 'text-cyan-700')
            "
            class="ml-2 text-cyan-700 bg-cyan-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-sky-300'),
                (previewItem.TextColor = 'text-sky-700')
            "
            class="ml-2 text-sky-700 bg-sky-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-purple-300'),
                (previewItem.TextColor = 'text-purple-700')
            "
            class="ml-2 text-purple-700 bg-purple-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
          <button
            @click="
              (previewItem.bgColor = 'bg-rose-300'),
                (previewItem.TextColor = 'text-rose-700')
            "
            class="ml-2 text-rose-700 bg-rose-300 rounded-full h-8 w-8 text-xs font-medium"
          ></button>
        </div>
      </div>
    </div>

    <div
      :class="categoryName.length > 0 ? '' : 'hidden'"
      class="mx-auto mt-5 w-5/6 bg-white rounded-md py-3 text-sm shadow px-3 pb-8"
    >
      <span class="mb-2">Preview</span>

      <div>
        <button
          :class="[previewItem.bgColor, previewItem.TextColor]"
          class="ml-2 rounded-md px-2 py-2 text-xs font-medium"
        >
          {{ previewItem.text }}
        </button>
      </div>
      <br />
      <div class="mb-2">
        <button
          @click="saveCategory"
          class="float-right bg-fuchsia-600 px-2 py-1 rounded-md text-white"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { async } from "@firebase/util";
import axios from "axios";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import FireStoreParser from "firestore-parser";
export default {
  data() {
    return {
      categoryName: "",
      previewItem: {
        text: null,
        bgColor: "bg-gray-300",
        TextColor: "text-gray-700",
      },
    };
  },

  methods: {
    previewBadge() {
      this.previewItem.text = this.categoryName;
    },
    saveCategory() {
      console.log("asdasd");

      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/taskman-7c60d/databases/(default)/documents/badgelist",
          {
            fields: {
              text: { stringValue: this.previewItem.text },
              bgColor: { stringValue: this.previewItem.bgColor },
              TextColor: { stringValue: this.previewItem.TextColor },
              active: { booleanValue: true },
            },
          }
        )
        .then((res) => {
          console.log("Post created");
        });

      // console.log(this.previewItem);

      // axios
      //   .post("/categories.json", this.previewItem)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    },
  },
};
</script>
