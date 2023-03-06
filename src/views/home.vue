<template>
  <div class="flex justify-center mt-10 text-5xl">Random Meals</div>
  <Meals :meals="meals"></Meals>
</template>

<script>
import { ref, onMounted } from "vue";
import axiosClient from "../api/axiosClient.js";
import Meals from "../components/Meals.vue";
export default {
  setup() {
    const meals = ref([]);

    onMounted(async () => {
      for (let i = 0; i < 30; i++) {
        axiosClient.get("random.php").then(({ data }) => {
          meals.value.push(data.meals[0]);
        });
      }
    });
    return {
      meals,
      onMounted,
    };
  },
  components: {
    Meals,
  },
};
</script>

<style></style>
