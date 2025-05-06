<script setup>
const props = defineProps({
    iframe: {
        type: String,
    }
})
</script>

<template>
    
    <div v-html="props.iframe">

    </div>
</template>



