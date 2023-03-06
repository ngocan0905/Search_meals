<template>
  <header class="bg-gray-200 shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-4xl font-bold h-full ml-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-900"
    >
      BeeMeals
    </router-link>
    <div
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-gray-200 absolute right-0 top-8 shadow-md transition-transform"
    >
      <router-link
        v-for="listNav of listNavs"
        :key="listNav"
        :to="{ name: listNav.name }"
        class="hover:bg-slate-300 px-4 inline-flex text-2xl items-center"
        @click="showMenu = !showMenu"
        >{{ listNav.text }}</router-link
      >
    </div>
    <div @click="showMenu = !showMenu" class="flex md:hidden">
      <button
        type="button"
        class="text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-700"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const listNavs = [
  { text: "Meals by name", name: "byName" },
  { text: "Meals by letter", name: "byLetter" },
  { text: "Meals by ingredients", name: "ingredients" },
];
const showMenu = ref(false);
</script>

<style></style>
