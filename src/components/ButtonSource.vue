<template>
  <a
    :href="href"
    target="_blank"
    class="mt-6 mx-2 px-3 py-2 rounded border-2 text-white border-violet-600 bg-violet-400 hover:scale-95"
  >
    <slot></slot>
  </a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
