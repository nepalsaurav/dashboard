<script setup lang="ts">
import AddIcons from './icons/AddIcons.vue';
import ClearIcons from './icons/ClearIcons.vue';
import DayIcons from './icons/DayIcons.vue';
import FullScreenIcons from './icons/FullScreenIcons.vue';
import NightIcons from './icons/NightIcons.vue';
import ResetIcons from './icons/ResetIcons.vue';

</script>

<template>
    <div id="Header" data-testid="Header">
        <div class="Col"><span id="AppLogo">in.vester.app</span><span class="versionInfo">version 1.4.2
                April 23rd, 2023</span></div>
        <div class="Col"></div>
        <div class="Col">
            <div id="ThemeSwitcherWithAnimation">
                <div id="ThemeSwitcherWithAnimationInner" class="night">
                    <div class="themeIcon day">
                        <DayIcons />
                    </div>
                    <div class="themeIcon night">
                        <NightIcons />
                    </div>
                </div>
            </div>
            
            <button class="add-button" data-testid="addWidgetButton">
                <AddIcons/>
                Add Widget
            </button>

            <button data-testid="resetDashboard">
                <ResetIcons/>
                Reset Dashboard
            </button>
                
                <button class="danger" data-testid="clearDashboard">
                    <ClearIcons/>
                    Clear Dashboard
                </button>
                
                
                
                <button data-testid="fullScreenButton">
                    <FullScreenIcons/>
                </button>
                
            <button>
                <div class="Clock" data-testid="Clock">April 30, 2025 at 5:12:34 PM</div>
            </button>
        </div>
    </div>
</template>