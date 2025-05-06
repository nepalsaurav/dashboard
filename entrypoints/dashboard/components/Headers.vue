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
import AddWidget from "./AddWidget.vue";
import { storage } from '#imports';
import { useApiStore } from "../api/ApiStore.js"
import { useRoute } from 'vue-router'
import { useLayoutStore } from "./LayoutStore.js"




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
const route = useRoute()
const { clearDashboard } = useLayoutStore()


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

async function themeSwitch() {
    toggleDark()

    const theme = isDark.value ? "dark" : "light"
    await storage.setItem("local:theme", theme)
    
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

async function handleClearDashboard() {
    if (confirm("are you sure want to clear dashboar")) {
        await clearDashboard(route.params.name)
    }
   
}
</script>

<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="Header">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <img src="/icon/16.png" alt="logo">
                    <span>Dashboard</span>
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
               

                <div class="navbar-item" @click="handleClearDashboard">
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
