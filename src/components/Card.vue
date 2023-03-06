<template>
  <div
    v-for="meal of meals"
    :key="meal.idMeal"
    class="mt-2 bg-white border border-gray-600 rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-300 hover:bg-gray-200 hover:scale-105 overflow-hidden"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-lg h-auto w-full object-cover"
      />
      <div class="sm:p-1 p-3 bg-transparent">
        <h2 class="font-semibold">{{ meal.strMeal }}</h2>
      </div></router-link
    >
  </div>
</template>
<script setup>
import ButtonYoutube from "./ButtonSource.vue";
const props = defineProps({
  meals: String,
});
</script>
