<script setup>
import { ref, onMounted,onBeforeUnmount } from 'vue';
import LoadingSkeletons from '../../LoadingSkeletons.vue';
import { getTickerTape } from '../../../api/TickerTape.js'

import { useApiStore } from "../../../api/ApiStore.js"
import { storeToRefs } from 'pinia';


const tickers = ref(null)
const loading = ref(true)
const error = ref(null)
let intervalID = ref(null)

const apiStore = useApiStore()
const { marketStatus } = storeToRefs(apiStore)

async function fetchData() {
    const data = await getTickerTape()
    tickers.value = data
    console.log(tickers.value)
}


onMounted(async() => {
    await fetchData()
    loading.value = false

    if (marketStatus.value === "Market open") {
        intervalID.value = setInterval(async() => {
            try {
                await fetchData()
            } catch {

            }
        }, 5000)
    }

})


onBeforeUnmount(() => {
    if(intervalID.value) {
        clearInterval(intervalID.value)
    }
})

</script>

<template>
    <LoadingSkeletons v-if="loading"/>
    <div class="tv-embed-widget-wrapper" v-if="tickers != null">
      <div class="tv-embed-widget-wrapper__header js-embed-widget-head"></div>
      <div class="tv-embed-widget-wrapper__body js-embed-widget-body">
        <div id="widget-ticker-tape-container">
          <div class="tickerTape-N_kypjt9">
            <div class="tape-N_kypjt9">
              <div class="head-N_kypjt9">
                <a
                  v-for="item in tickers"
                  :key="item.ticker"
                  class="tv-ticker-item-tape quote-ticker-inited tv-ticker-item-tape--compact"
                  target="_blank"
                  rel="external noopener"
                >
                  <div class="tv-ticker-item-tape__border-wrapper pr-4">
                    <div class="tv-ticker-item-tape__inner-wrapper">
                      <div class="tv-ticker-item-tape__symbol">
                      
                        <div class="tv-ticker-item-tape__short-name-wrapper">
                          <span class="tv-ticker-item-tape__short-name">
                            {{ item.name }}<b class="ml-1">({{ item.ticker }})</b>
                          </span>
                          <span
                            class="js-symbol-session-status tv-market-status tv-market-status--for-ticker-tape tv-market-status--market tv-market-status--market--for-ticker-tape"
                            title="Market open"
                          >
                            <span class="tv-market-status__label tv-market-status__label--for-ticker-tape">Market open</span>
                            <span class="tv-market-status__dot tv-market-status__dot--for-ticker-tape"></span>
                          </span>
                        </div>
                      </div>
                      <div class="tv-ticker-item-tape__last-wrapper">
                        <span class="tv-ticker-item-tape__last js-symbol-last">{{ item.ltp }}</span>
                        <span
                          class="js-data-mode tv-data-mode tv-data-mode--for-ticker-tape tv-data-mode--realtime tv-data-mode--realtime--for-ticker-tape"
                          title="Real-time"
                        >R</span>
                      </div>
                      <div
                        class="tv-ticker-item-tape__change-wrapper js-symbol-change-direction"
                        :class="item.change < 0 ? 'tv-ticker-item-tape__change-wrapper--down' : 'tv-ticker-item-tape__change-wrapper--up'"
                      >
                        <span class="tv-ticker-item-tape__change-abs js-symbol-change">{{ item.change }}</span>&nbsp;
                        <span class="tv-ticker-item-tape__change-pt js-symbol-change-pt">({{ item.percent }})</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<style scoped>
/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/64828.35532bec9edbf525f4d8.css */
body {
    color: #0f0f0f;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif;
    font-feature-settings: "tnum" on, "lnum" on;
}

html[data-theme="dark"] body {
    color: #dbdbdb;
}

body {
    box-sizing: border-box;
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

a:active {
    outline: 0;
}

@media (any-hover:hover) {
    a:hover {
        outline: 0;
    }
}

:focus {
    outline: none;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/83439.8716e2cfa1fe6f4ee07b.css */
.wrapper-TJ9ObuLF {
    color: #f2f2f2;
}

html[data-theme="dark"] .wrapper-TJ9ObuLF {
    color: #2e2e2e;
}

.logo-PsAlMQQF {
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
}

.xxxsmall-PsAlMQQF {
    font-size: 11px;
    height: 18px;
    line-height: 16px;
    width: 18px;
}

.letter-PsAlMQQF {
    color: #fff;
    font-style: normal;
    font-weight: 700;
}

html[data-theme="dark"] .letter-PsAlMQQF {
    color: #636363;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/38752.e464d157e791b8dd3734.css */
.pair-ocURKVwI {
    display: inline-block;
    position: relative;
}

.pair-ocURKVwI.xxxsmall-ocURKVwI {
    height: 18px;
    width: 18px;
}

.logo-ocURKVwI {
    border-radius: 50%;
}

.logo-ocURKVwI:first-child,
.logo-ocURKVwI:last-child {
    position: absolute;
    right: 0;
    top: 0;
}

.logo-ocURKVwI.xxxsmall-ocURKVwI {
    height: 12px;
    width: 12px;
}

.logo-ocURKVwI.xxxsmall-ocURKVwI:last-child {
    transform: translate(-6px, 6px);
}

.logo-ocURKVwI.xxxsmall-ocURKVwI:first-child {
    clip-path: path("M12 0H0v4a8 8 0 0 1 8 8h4V0Z");
}

.skeleton-ocURKVwI {
    background-color: currentColor;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/80259.7ffdb5fd1aae95c1b34f.css */
.label-dzbd7lyV {
    border-radius: 12px;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    height: 24px;
    max-width: 28px;
    overflow: hidden;
    padding: 0 6px;
    position: absolute;
    transition: max-width .6s cubic-bezier(.4, .01, .22, 1) 0s, background .3s cubic-bezier(.4, .01, .22, 1) 0s;
    z-index: 3;
}

.label-dzbd7lyV .logoWrap-dzbd7lyV {
    padding-right: 5px;
}

@media (any-hover:hover) {
    .label-dzbd7lyV:hover {
        max-width: 105px;
    }
}

.label-dzbd7lyV:not(a) {
    cursor: default;
}

.label-dzbd7lyV:focus {
    outline: auto;
    outline-color: #2962ff;
    outline-offset: -2px;
    outline-width: 2px;
}

.label-dzbd7lyV.end-dzbd7lyV {
    box-shadow: 0 2px 4px 0 #0003;
    right: 8px;
}

html[data-theme="dark"] .label-dzbd7lyV.end-dzbd7lyV {
    box-shadow: 0 2px 4px 0 #0006;
}

.label-dzbd7lyV.snap-dzbd7lyV.end-dzbd7lyV {
    border-radius: 12px 0 0 12px;
    right: 0;
}

.label-dzbd7lyV.top-dzbd7lyV {
    top: 8px;
}

@media (max-height:50px) {
    .label-dzbd7lyV.top-dzbd7lyV {
        top: auto;
        top: 50%;
        transform: translateY(-50%);
    }
}

.label__link-dzbd7lyV {
    border-radius: inherit;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
}

@media (any-hover:hover) {
    .label-dzbd7lyV:hover .label__link-dzbd7lyV {
        pointer-events: auto;
    }
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/3579.d4ce023e54009adf69b3.css */
.tv-data-mode {
    vertical-align: top;
}

.tv-data-mode--realtime {
    color: #42bda8;
}

.tv-data-mode--for-ticker-tape {
    font-size: 10px;
    transform: translateX(2px);
}

.tv-data-mode--realtime--for-ticker-tape {
    display: none;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/55822.9a6921d85f208ac207e1.css */
.tv-embed-widget-wrapper {
    background: #0000;
    height: 100%;
    max-width: 100%;
    min-width: 100%;
    width: 0;
}

.tv-embed-widget-wrapper__header {
    font-size: 13px;
    line-height: 34px;
    text-align: center;
}

.tv-embed-widget-wrapper__body {
    background: var(--tv-widget-background-color, #fff);
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
}

html[data-theme="dark"] .tv-embed-widget-wrapper__body {
    background: var(--tv-widget-background-color, #1f1f1f);
    border-color: #4a4a4a;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/44883.585fac974704d1d85ab0.css */
.tv-market-status__dot {
    border-radius: 50%;
    display: inline-block;
    height: 4px;
    vertical-align: middle;
    width: 4px;
}

.tv-market-status--market {
    color: #42bda8;
}

.tv-market-status--market .tv-market-status__dot {
    background-color: #42bda8;
}

.tv-market-status--for-ticker-tape {
    align-items: center;
    display: flex;
    transform: translateX(4px);
}

.tv-market-status__dot--for-ticker-tape {
    height: 4px;
    width: 4px;
}

.tv-market-status--market .tv-market-status__dot--for-ticker-tape,
.tv-market-status__label--for-ticker-tape {
    display: none;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/94562.8341c735a59d13cb56c7.css */
a.tv-ticker-item-tape {
    overflow: hidden;
}

.tv-ticker-item-tape {
    box-sizing: border-box;
    color: #0f0f0f;
    display: inline-flex;
    flex: 0 0 auto;
    font-size: 16px;
    height: 44px;
    overflow: hidden;
    padding: 10px 0;
}

html[data-theme="dark"] .tv-ticker-item-tape {
    color: #dbdbdb;
}

@media (any-hover:hover) {
    .tv-ticker-item-tape:hover {
        background: #f2f2f2;
    }

    html[data-theme="dark"] .tv-ticker-item-tape:hover {
        background: #2e2e2e;
    }
}

.tv-ticker-item-tape {
    outline: none;
    overflow: visible;
    position: relative;
}

.tv-ticker-item-tape:focus {
    outline: none;
}

.tv-ticker-item-tape:after {
    border-style: solid;
    border-width: 2px;
    box-sizing: border-box;
    content: "";
    display: none;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}

.tv-ticker-item-tape:focus:after {
    display: block;
}

.tv-ticker-item-tape:focus:not(:focus-visible):after {
    display: none;
}

.tv-ticker-item-tape:after,
html[data-theme="dark"] .tv-ticker-item-tape:after {
    border-color: #2962ff;
}

.tv-ticker-item-tape:after {
    border-radius: 2px;
}

.tv-ticker-item-tape__border-wrapper {
    align-items: center;
    border-right: 1px solid #ebebeb;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: flex-start;
    padding-left: 16px;
    width: 100%;
}

html[data-theme="dark"] .tv-ticker-item-tape__border-wrapper {
    border-right: 1px solid #4a4a4a;
}

.tv-ticker-item-tape__inner-wrapper {
    align-items: center;
    display: flex;
    height: 100%;
}

.tv-ticker-item-tape__change-wrapper,
.tv-ticker-item-tape__last-wrapper,
.tv-ticker-item-tape__short-name-wrapper {
    display: flex;
}

.tv-ticker-item-tape__short-name-wrapper {
    margin-right: 12px;
}

.tv-ticker-item-tape__icon-wrapper,
.tv-ticker-item-tape__symbol {
    align-items: center;
    display: flex;
}

.tv-ticker-item-tape__icon {
    margin-right: 8px;
}

.tv-ticker-item-tape__short-name {
    font-weight: 700;
    white-space: nowrap;
}

.tv-ticker-item-tape__last {
    border-radius: 3px;
    margin: -1px -2px;
    padding: 1px 2px;
    transition-duration: .35s;
    transition-property: background;
}

.tv-ticker-item-tape__change-wrapper {
    margin-left: 12px;
}

.tv-ticker-item-tape__change-wrapper--up,
html[data-theme="dark"] .tv-ticker-item-tape__change-wrapper--up {
    color: #089981;
}

.tv-ticker-item-tape__change-wrapper--down,
html[data-theme="dark"] .tv-ticker-item-tape__change-wrapper--down {
    color: #f23645;
}

.tv-ticker-item-tape__change-abs,
.tv-ticker-item-tape__change-pt {
    direction: ltr;
}

.tv-ticker-item-tape--compact {
    font-size: 14px;
    height: 72px;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__inner-wrapper {
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__short-name-wrapper {
    margin-right: 0;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__symbol {
    margin-bottom: 4px;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__short-name {
    font-size: 12px;
    font-weight: 400;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__last {
    font-weight: 700;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__icon {
    margin-right: 6px;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__change-wrapper {
    margin-left: 0;
}

.tv-ticker-item-tape--compact .tv-ticker-item-tape__change-wrapper--down,
.tv-ticker-item-tape--compact .tv-ticker-item-tape__change-wrapper--up {
    margin-left: -7px;
}

.tickerTape-N_kypjt9 {
    overflow: hidden;
}

@media (prefers-reduced-motion:reduce) {
    .tickerTape-N_kypjt9 {
        overflow-x: scroll;
    }

    .tickerTape-N_kypjt9::-webkit-scrollbar {
        display: none;
        height: 0;
        width: 0;
    }

    .tickerTape-N_kypjt9::-webkit-scrollbar-thumb,
    .tickerTape-N_kypjt9::-webkit-scrollbar-track {
        display: none;
    }

    .tickerTape-N_kypjt9::-webkit-scrollbar-corner {
        display: none;
    }
}

.tape-N_kypjt9 {
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: linear;
    display: flex;
    flex: 0 0 auto;
}

@media (any-hover:hover) {
    .tape-N_kypjt9:hover {
        animation-play-state: paused;
    }
}

@media (prefers-reduced-motion:reduce) {
    .tape-N_kypjt9 {
        animation-play-state: paused;
    }
}

.head-N_kypjt9,
.tail-N_kypjt9 {
    display: flex;
    flex: 0 0 auto;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/47597.2a706db14b6877be8e14.css */
.label-e9c6dycV {
    background: #fff;
}

html[data-theme="dark"] .label-e9c6dycV {
    background: #3d3d3d;
}

.label-e9c6dycV .logoWrap-e9c6dycV svg {
    height: 10px;
    margin: 7px 0;
    width: 17px;
}

.label-e9c6dycV .logoWrap-e9c6dycV svg path {
    fill: #0f0f0f;
}

html[data-theme="dark"] .label-e9c6dycV .logoWrap-e9c6dycV svg path {
    fill: #fff;
}

.label-e9c6dycV .svgTextWrap-e9c6dycV svg {
    margin: 6px 0;
}

.label-e9c6dycV .svgTextWrap-e9c6dycV svg path {
    fill: #0f0f0f;
}

html[data-theme="dark"] .label-e9c6dycV .svgTextWrap-e9c6dycV svg path {
    fill: #fff;
}

/*! CSS Used from: Embedded */
.tape-N_kypjt9 {
    animation-duration: 25s;
    animation-name: ticker-tape-scroll--FS6T;
}

/*! CSS Used keyframes */
@keyframes ticker-tape-scroll--FS6T {
    0% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(-664.578px);
    }
}
</style>