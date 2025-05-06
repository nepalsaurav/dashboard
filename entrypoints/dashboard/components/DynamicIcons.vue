<!-- DynamicIcon.vue -->
<script setup>
const props = defineProps({
  svg: String
})

</script>

<template>
  <span class="icons" v-html="props.svg">

  </span>
</template>

