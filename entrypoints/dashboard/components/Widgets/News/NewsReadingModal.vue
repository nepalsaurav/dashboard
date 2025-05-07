<script setup>
import { useNewsReadStore } from "./NewsStore.js"
import { storeToRefs } from "pinia";
const newsStore = useNewsReadStore()
const { modalActive, newsContent, newsDetail } = storeToRefs(newsStore)
</script>

<template>
    <Transition v-if="modalActive">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card" style="width: 40rem !important;">
                <header class="modal-card-head" style="padding: 10px !important;">
                    <p class="modal-card-title"><small>{{ newsDetail.newsTitle.toUpperCase() }}</small></p>
                    <button class="delete" aria-label="close" @click="modalActive = false"></button>
                </header>
                <section class="modal-card-body">

                    <h1 class="is-size-3">{{ newsContent?.title }}</h1>
                    <hr>
                    <p class="has-text-grey">TL;DR: {{ newsContent?.excerpt }}</p>
                    <hr>
                    <div class="content" v-html="newsContent?.content"></div>

                </section>
            </div>
        </div>
    </Transition>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@100..900&display=swap');

.modal-card-body {
    font-family: "Noto Sans Devanagari", sans-serif;
}
</style>