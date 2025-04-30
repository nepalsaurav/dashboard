<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import Layout from './components/Layout.vue';
import "./styling/App.css"
const { width } = useWindowSize()
const href = window.location.href
</script>

<template>
  <div v-if="width < 400">
    <a :href="href" target="_blank">go to fullwidth</a>
  </div>

  <div v-else>
    <Layout />
  </div>
</template>


