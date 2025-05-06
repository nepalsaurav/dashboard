<script setup>
const props = defineProps({
    ticker: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <iframe :src="`https://nepsealpha.com/nepse-chart?symbol=${props.ticker}`" frameborder="0" style="width: 100%;height: 100%;"></iframe>
</template>