<template>
  <v-app class="bg-gray-100 h-full">
    <NavBar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view></router-view>
      </div>
    </main>
  </v-app>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<style></style>
