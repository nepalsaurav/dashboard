<script setup>
import AddIcons from "./icons/AddIcons.vue";
import ClearIcons from "./icons/ClearIcons.vue";
import DayIcons from "./icons/DayIcons.vue";
import FullScreenIcons from "./icons/FullScreenIcons.vue";
import NightIcons from "./icons/NightIcons.vue";
import ResetIcons from "./icons/ResetIcons.vue";


import { useDark, useToggle } from '@vueuse/core'

import { useFullscreen } from '@vueuse/core'

const { toggle } = useFullscreen()

const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)

function themeSwitch() {
    toggleDark()
}

function switchFullScreen() {
    toggle()
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
                        <NightIcons v-else/>
                    </button>
                </div>
                <div class="navbar-item">
                    <button class="button is-small">
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
                    <small>April 30, 2025 at 5:12:34 PM</small>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar {
    min-height: 1px !important;
}
</style>
