<script setup>
import Headers from "./Headers.vue";
import SideBar from "./SideBar.vue";
import { watch, onMounted, effect } from "vue";
import { GridLayout, GridItem } from "vue-grid-layout-v3";
import { useFullscreen } from '@vueuse/core'
import { useRoute } from 'vue-router'
// import localForage from "localforage";
import { useLayoutStore } from "./LayoutStore.js"
import { storeToRefs } from 'pinia'



// components

import CandleStickChart from "./Widgets/TechnicalAnalysis/CandleStickChart.vue";
import SingleTicker from "./Widgets/Ticker/SingleTicker.vue";
import YoutubeVideo from "./Widgets/Video/YoutubeVideo.vue";
import TMSWidgets from "./Widgets/TMSWidgets.vue";
import TickerTape from "./Widgets/Ticker/TickerTape.vue";
import TopStories from "./Widgets/News/TopStories.vue";
import FinancialDetails from "./Widgets/Ticker/FinancialDetails.vue";
import IPOCorner from "./Widgets/News/IPOCorner.vue";

const { isFullscreen } = useFullscreen()
const route = useRoute()
const widgetLayoutsStore = useLayoutStore()
const { widgetLayouts } = storeToRefs(widgetLayoutsStore)


watch(
    () => route.params.name,
    (newId, _) => {
        console.log(newId)
        widgetLayoutsStore.initWidgetLayouts(route.params.name)
    }
)

onMounted(() => {
    widgetLayoutsStore.initWidgetLayouts(route.params.name)
})


function layoutUpdatedEvent(newLayout) {
    widgetLayoutsStore.layoutUpdate(route.params.name, newLayout)
}

function deleteWidget(item) {
    widgetLayoutsStore.deleteWidget(route.params.name, item)
}



</script>

<template>
    <Headers />

    <div class="is-flex">
        <div v-if="!isFullscreen">
            <SideBar />
        </div>

        <div style="height: 5000px !important;width: 100%;" :style="!isFullscreen && 'margin-left: 70px;'">
            <GridLayout v-model:layout="widgetLayouts[route.params.name]" :col-num="12" :row-height="30" :is-draggable="true"
                :is-resizable="true" :vertical-compact="true" :use-css-transforms="true"
                @layout-updated="layoutUpdatedEvent" v-if="widgetLayouts && widgetLayouts[route.params.name]">

               
                <GridItem v-for="(item, index) in widgetLayouts[route.params.name]" :key="index"
                    :static="item.static" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
                    

                    <div class="widget ChartBoxWidget">
                        <div class="header">
                            <div class="widgetTitle">{{ item.widgetTitle }}</div>
                            <div class="widgetButtons">
                                <button style="cursor: pointer; padding-left: 5px;" @click="deleteWidget(item)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="content">

                            <SingleTicker v-if="item.type === 'single_ticker_widget'" />
                            <YoutubeVideo v-if="item.type === 'youtube_video_embed'" :url="item.selected" />
                            <CandleStickChart v-if="item.type === 'candle_stick_chart'" :symbol="item.selected" />
                            <TickerTape v-if="item.type === 'ticker_tape'" />
                            <TopStories v-if="item.type === 'top_stories'" />
                            <FinancialDetails v-if="item.type === 'financial_details'" />
                            <IPOCorner v-if="item.type === 'ipo_corner'" />
                            <!-- <YoutubeVideo /> -->
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
