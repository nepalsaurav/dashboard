<script setup>
import { useWindowSize } from "@vueuse/core";
import { RouterView } from "vue-router";
// import "./styling/App.css";
import "bulma/css/bulma.min.css";
import "./styling/Widgets.css";
import "./styling/Main.css";
const { width } = useWindowSize();
const href = window.location.href;


</script>

<template>
    <div v-if="width < 400">
        <a :href="href" target="_blank">go to fullwidth</a>
    </div>

    <RouterView v-else/>
</template>
