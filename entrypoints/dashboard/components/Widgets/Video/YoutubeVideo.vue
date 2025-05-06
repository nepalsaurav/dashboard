<script setup>
const props = defineProps({
    url: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <iframe style="width: 100%; height: 100%;" :src="props.url" allowfullscreen></iframe>
</template>