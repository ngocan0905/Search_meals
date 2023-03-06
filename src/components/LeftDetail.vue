<template>
  <div>
    <div class="flex overflow-hidden rounded-lg">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full h-auto object-cover hover:scale-105"
      />
    </div>
    <div class="mt-4 flex justify-center">
      <ButtonYoutube :href="meal.strYoutube">Youtube</ButtonYoutube>
      <ButtonSource :href="meal.strSource">Original Source</ButtonSource>
    </div>
  </div>
</template>

<script setup>
import ButtonYoutube from "./ButtonYoutube.vue";
import ButtonSource from "./ButtonSource.vue";
const props = defineProps({
  meal: String,
});
</script>
