<template>
  <h1 class="pt-6 flex justify-center text-5xl font-semibold">
    {{ route.params.ingredient }}
  </h1>
  <Meals :meals="meals"></Meals>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.searchByIngredient);
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style></style>
