<template>
  <div class="flex flex-col items-center p-8 justify-center">
    <div class="flex justify-center mt-2 gap-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="hover:text-red-500"
        >{{ letter }}</router-link
      >
    </div>
    <Meals :meals="meals"></Meals>
  </div>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import store from "../store";
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.searchByLetter);
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
watch(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style></style>
