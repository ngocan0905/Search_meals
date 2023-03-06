<template>
  <a
    :href="href"
    target="_blank"
    class="mt-6 mx-2 px-3 py-2 rounded border-2 text-white border-red-600 bg-red-400 hover:scale-95"
  >
    <slot></slot>
  </a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
