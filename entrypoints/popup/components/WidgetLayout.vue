<script setup>
import Headers from "./Headers.vue";
import SideBar from "./SideBar.vue";
import { reactive, watch, onMounted } from "vue";
import { GridLayout, GridItem } from "vue-grid-layout-v3";
import { useFullscreen } from '@vueuse/core'

import { useRoute } from 'vue-router'
import localForage from "localforage";

import CandleStickChart from "./Widgets/TechnicalAnalysis/CandleStickChart.vue";
import SingleTicker from "./Widgets/Ticker/SingleTicker.vue";
import YoutubeVideo from "./Widgets/Video/YoutubeVideo.vue";

const { isFullscreen } = useFullscreen()
const route = useRoute()
const gridLayout = ref(null)


watch(
    () => route.params.name,
    (newId, _) => {
        console.log(newId)
    }
)

onMounted(async () => {

    const layoout = await localForage.getItem(`widget_${route.params.name}`)
    gridLayout.value = JSON.parse(layoout)
})

// const state = ref({
//     layout: [
//         { x: 0, y: 0, w: 2, h: 4, i: "0", static: false },
//         { x: 2, y: 0, w: 2, h: 4, i: "1", static: false },

//     ],
//     draggable: true,
//     resizable: true,
//     index: 0,
// });





// localForage.setItem(`widget_${route.params.name}`, JSON.stringify(state.value))
function itemTitle(item) {
    let result = item.i;
    if (item.static) {
        result += " - Static";
    }
    return result;
}



function layoutUpdatedEvent(newlayout) {
    let layout = gridLayout.value
    layout.layout = newlayout
    localForage.setItem(`widget_${route.params.name}`, JSON.stringify(layout))
}


</script>

<template>
    <Headers />

    <div class="is-flex">
        <div v-if="!isFullscreen">
            <SideBar />
        </div>

        <div style="height: 100vh;width: 100%;" :style="!isFullscreen && 'margin-left: 70px;'">
            <GridLayout v-model:layout="gridLayout.layout" :col-num="12" :row-height="30"
                :is-draggable="gridLayout.draggable" :is-resizable="gridLayout.resizable" :vertical-compact="true"
                :use-css-transforms="true" @layout-updated="layoutUpdatedEvent" v-if="gridLayout">


                <GridItem v-for="(item, index) in gridLayout.layout" :key="index" :static="item.static" :x="item.x"
                    :y="item.y" :w="item.w" :h="item.h" :i="item.i">




                    <div class="widget ChartBoxWidget">

                        <div class="header">
                            <div class="widgetTitle">Prices</div>
                            <div class="widgetButtons">
                                <div style="cursor: pointer; padding-left: 5px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="content">

                            <YoutubeVideo />
                        </div>
                    </div>
                </GridItem>
            </GridLayout>
        </div>
    </div>
</template>


<style scoped>
.vue-grid-layout {

    max-width: 100%;
    position: relative;

}

.vue-grid-item {
    position: relative;

}

.vue-grid-item .card {
    border-radius: 0px !important;
    top: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    position: absolute;
    width: 100% !important;

}

.vue-grid-item:not(.vue-grid-placeholder) {
    background-color: var(--bulma-scheme-main);
    /* border: 1px solid #eee; */
}

.vue-grid-item .resizing {
    opacity: 0.9;
}

.vue-grid-item .static {
    background: #cce;
}



.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}

.vue-grid-item .minMax {
    font-size: 12px;
}

.vue-grid-item .add {
    cursor: pointer;
}

.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
