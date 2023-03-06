<template>
  <div class="flex flex-col items-center p-8 justify-center">
    <input
      type="text"
      class="rounded-lg border-2 border-gray-300 w-1/2 focus:border-green-400"
      placeholder="search..."
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals"></Meals>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchMeals);
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchMeals", []);
  }
  keyword.value = null;
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>
