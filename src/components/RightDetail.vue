<template>
  <div class="ml-5 text-xl">
    <h1 class="text-5xl flex justify-center">{{ meal.strMeal }}</h1>
    <p><strong>Area </strong> : {{ meal.strArea }}</p>

    <p><strong>Category</strong> : {{ meal.strCategory }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 py-2">
      <div class="">
        <h2><strong>Ingredient</strong> :</h2>

        <ul v-for="(element, index) of new Array(20)" :key="index">
          <li v-if="meal[`strIngredient${index + 1}`]">
            <div class="ml-5">{{ meal[`strIngredient${index + 1}`] }}</div>
            
          </li>
        </ul>
      </div>
      <div class="">
        <h2><strong>Measures </strong> :</h2>

        <ul v-for="(element, index) of new Array(20)" :key="index">
          <li v-if="meal[`strMeasure${index + 1}`]">
            <div class="ml-5">{{ meal[`strMeasure${index + 1}`] }}</div>
          </li>
        </ul>
      </div>
    </div>

    <p>
      <strong>Instruction</strong> : <br />
      <div class="ml-5 indent-5">{{ meal.strInstructions }}.</div>
      
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  meal: String,
});
</script>

<style></style>
