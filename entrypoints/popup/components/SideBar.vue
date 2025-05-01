<script setup lang="ts">
import AddIconsDashboard from "./icons/AddIconsDashboard.vue";
import HomeIcons from "./icons/HomeIcons.vue";
</script>

<template>

    
    <aside
        class="menu"
        style="height: 100vh; position: fixed;"
    >
        <ul class="menu-list">
            <li class="pb-2">
                 <a>
                    <HomeIcons />
                    Home
                 </a>
            </li>
            <li>
                <a class="button is-small"><AddIconsDashboard /> Add</a>
            </li>
        </ul>
    </aside>
</template>


<style scoped>
  a {
    font-size: 12px !important;
    background: inherit !important;
    border-bottom: 1px solid var(--border-color) !important;
    box-shadow: none !important;
    border-radius: 0% !important;
  }
</style>


