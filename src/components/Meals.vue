<template>
  <div>
    <div class="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 p-8">
      <Card :meals="meals"></Card>
    </div>
    <div
      v-if="!meals.length"
      class="flex justify-center text-3xl text-red-500 mt-10"
    >
      There are no item
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
