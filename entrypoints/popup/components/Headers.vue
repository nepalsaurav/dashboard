<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { useFullscreen } from '@vueuse/core'
import { onMounted } from 'vue';


// component import
import AddIcons from "./icons/AddIcons.vue";
import ClearIcons from "./icons/ClearIcons.vue";
import DayIcons from "./icons/DayIcons.vue";
import FullScreenIcons from "./icons/FullScreenIcons.vue";
import NightIcons from "./icons/NightIcons.vue";
import ResetIcons from "./icons/ResetIcons.vue";
import AddWidget from "./AddWidget.vue";
import { storage } from '#imports';
import { useApiStore } from "@/entrypoints/popup/api/ApiStore.js"


const { toggle } = useFullscreen()
const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)
const modalState = ref(false)
const currentTime = ref(new Date())
const timeOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
};
const apiStore = useApiStore()

onMounted(() => {
    setInterval(() => {
        currentTime.value = new Date()
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes()

        if (hours === 11 && minutes === 0) {
            apiStore.reFetchMarketStatus()
        }
    }, 1000)
})

function themeSwitch() {
    toggleDark()

    const theme = isDark.value ? "dark" : "light"
    storage.setItem("local:theme", theme)
}

function switchFullScreen() {
    toggle()
}


function addWidget() {
    modalState.value = true
}

function closeModalWidget() {
    modalState.value = false;
}
</script>

<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="Header">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <span>nepse dashboard</span>
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <button class="button is-small" @click="themeSwitch">
                        <DayIcons v-if="!isDark" />
                        <NightIcons v-else />
                    </button>
                </div>
                <div class="navbar-item">
                    <button class="button is-small" @click="addWidget">
                        <AddIcons /> Add Widget
                    </button>
                </div>
                <div class="navbar-item">
                    <button class="button is-small">
                        <ResetIcons />
                        Reset Dashboard
                    </button>
                </div>

                <div class="navbar-item">
                    <button class="button is-small ">
                        <ClearIcons />
                        Clear Dashboard
                    </button>
                </div>

                <div class="navbar-item">
                    <button class="button is-small" @click="switchFullScreen">
                        <FullScreenIcons />
                    </button>
                </div>

                <div class="navbar-item">
                    <small>{{ currentTime.toLocaleString("en-US", timeOptions) }}</small>
                </div>
            </div>
        </div>
    </nav>


    <AddWidget :modalState="modalState" :closeModal="closeModalWidget" />
</template>

<style>
.navbar {
    min-height: 1px !important;
}
</style>
