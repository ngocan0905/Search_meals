<template>
  <div>
    <div class="grid md:grid-cols-3 grid-cols-1 py-4 gap-4">
      <LeftDetail :meal="meal" class="m-4 mt-12"> </LeftDetail>
      <RightDetail :meal="meal" class="col-span-2" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import axiosClient from "../api/axiosClient";
import LeftDetail from "../components/LeftDetail.vue";
import RightDetail from "../components/RightDetail.vue";

export default {
  components: { RightDetail, LeftDetail },
  setup() {
    const route = useRoute();
    const meal = ref({});

    onMounted(() => {
      axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0] || {};
      });
      console.log(meal);
    });
    return {
      meal,
    };
  },
};
</script>

<style></style>
