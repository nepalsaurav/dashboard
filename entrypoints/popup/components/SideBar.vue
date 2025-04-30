<script setup lang="ts">
import AddIconsDashboard from './icons/AddIconsDashboard.vue';
import HomeIcons from './icons/HomeIcons.vue';

</script>

<template>
    <div id="Sidebar">
        <div class="dashboard-btn active">
            <HomeIcons/>
        </div>
        <div class="dashboard-btn add-button">
            <AddIconsDashboard/>
        </div>
    </div>
</template>