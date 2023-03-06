<template>
  <!-- <pre>{{ meals }}</pre> -->
  <div>
    <h1 class="text-5xl">Ingredient</h1>
    <div class="flex justify-center">
      <input
        placeholder="Search ingredient"
        type="text"
        v-model="keyword"
        class="border-2 focus:border-green-400 w-1/2 min-w-fit rounded-lg"
      />
    </div>

    <div class="mt-6 grid grid-cols-2">
      <router-link
        v-for="ingredient of computedIngredient"
        :key="ingredient.idIngredient"
        class="border-2 border-gray-300 m-4 rounded-lg bg-slate-300 p-2"
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
      >
        <h3 class="text-2xl text-red-500">
          {{ ingredient.idIngredient }}.{{ ingredient.strIngredient }}
        </h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../api/axiosClient";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredient = computed(() => {
  if (!computedIngredient) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style></style>
