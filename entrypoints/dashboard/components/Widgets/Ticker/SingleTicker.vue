<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { getTickerIcons } from "../../../api/TickerIcons.js"
import { getTickerPrice } from "../../../api/TickerPrice.js"
import { useApiStore } from "../../../api/ApiStore.js"
import LoadingSkeletons from '../../LoadingSkeletons.vue';
import { storeToRefs } from 'pinia';
import numeral from 'numeral';


let loading = ref(true)
let error = ref(null)
let imageIcons = ref("")
let props = defineProps({
  ticker: {
    type: String,
    default: ""
  }
})
let tickerName = ref(props.ticker)
let priceData = ref(null)
let intervalID = ref(null)

const apiStore = useApiStore()
const { marketStatus } = storeToRefs(apiStore)



async function fetchData() {
  const data = await getTickerIcons(props.ticker)
  imageIcons.value = data.imageUrl
  tickerName.value = data.tickerName
  try {
    const data = await getTickerPrice(props.ticker)
    priceData.value = data

  } catch { }
  console.log(apiStore)

}


onMounted(async () => {
  await fetchData()
  loading.value = false

  if (marketStatus.value === "Market open") {
    intervalID.value = setInterval(()=> {
       fetchData()
    }, 5000)
  }
})

onBeforeUnmount(() => {
    if (intervalID.value) {
      clearInterval(intervalID.value)
    }
})

</script>



<template>
  <!-- Loading State -->
  <LoadingSkeletons v-if="loading" />

  <!-- Widget Display -->
  <div class="tv-embed-widget-wrapper" v-if="!loading && !error">
    <div class="tv-embed-widget-wrapper__header js-embed-widget-head"></div>

    <div class="tv-embed-widget-wrapper__body js-embed-widget-body">



      <div class="tv-single-ticker-widget p-4">

        <!-- Header Section -->
        <div class="tv-ticker-item-last__header">
          <div class="js-header-icon">
            <img class="logo-PsAlMQQF xsmall-PsAlMQQF tv-ticker-item-last__icon letter-PsAlMQQF"
              :src="`https://${imageIcons}`" :alt="props.ticker" />
          </div>
          <div class="tv-ticker-item-last__name-wrapper">
            <div class="tv-ticker-item-last__short-name">
              <span class="js-symbol-short-name">{{ props.ticker }}</span>

              <!-- market status -->
              <span class="tv-ticker-item-last__session-status">
                <span
                  class="js-symbol-session-status tv-market-status tv-market-status--for-ticker-last apply-common-tooltip"
                  :class="marketStatus === 'Market open' ? 'tv-market-status--market' : 'tv-market-status--close'"
                  :title="marketStatus">
                  <span class="tv-market-status__label">{{ marketStatus }}</span>
                  <span class="tv-market-status__dot"></span>
                </span>
              </span>
              <!-- market status -->

            </div>
            <div class="tv-ticker-item-last__title js-symbol-description-name" :title="tickerName">
              {{ tickerName }}
            </div>
          </div>
        </div>

        <!-- Body Section -->
        <div class="tv-ticker-item-last__body">
          <span class="tv-ticker-item-last__last js-symbol-last apply-overflow-tooltip">
            {{ priceData?.ltp }}
          </span>




          <span class="tv-ticker-item-last__change-wrapper"
            :class="priceData?.percentChange < 0 ? 'tv-ticker-item-last__change-wrapper--down' : 'tv-ticker-item-last__change-wrapper--up'">
            <span class="tv-ticker-item-last__change-percent">
              {{ priceData?.percentChange }}%
            </span>
            &nbsp;
            <span class="tv-ticker-item-last__change">
              ({{ priceData?.pointChange }})
            </span>
          </span>
        </div>



        <div class="is-flex">
          <span class="has-text-weight-normal">
              Volume: {{  numeral(priceData?.volume).format('0.00a').toUpperCase() }}
          </span>
          <span class="pl-2 has-text-weight-normal">
             Traded Qtd: {{  numeral(priceData?.tradedQtd).format('0,0') }}
          </span>
          <span class="pl-2 has-text-weight-normal">
              Market Cap: {{ numeral(priceData?.marketCap).format('0.00a').toUpperCase() }}
          </span>
        </div>

      </div>

      <!-- TradingView Branding -->
      <span class="label-dzbd7lyV end-dzbd7lyV top-dzbd7lyV snap-dzbd7lyV js-copyright-label">
        <a class="label__link-dzbd7lyV"
          href="https://www.tradingview.com?utm_campaign=single-quote-logo&amp;utm_medium=widget_new&amp;utm_source=www.tradingview.com"
          target="_blank" rel="noopener noreferrer"
          aria-label="Visit TradingView — financial charting platform and trading community">
          <!-- Logo SVG -->
          <span class="logoWrap-dzbd7lyV">
            <!-- Add inline SVGs or replace with component if reusable -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 10" width="17" height="10" fill="none">
              <path fill="#131722" d="..." />
            </svg>
          </span>
          <span class="svgTextWrap-e9c6dycV">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 13" width="71" height="13" fill="none">
              <path fill="#131722" d="..." />
            </svg>
          </span>
        </a>
      </span>
    </div>
  </div>
</template>







<style scoped>
/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/64828.35532bec9edbf525f4d8.css */
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
.logo-PsAlMQQF {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
}

.xsmall-PsAlMQQF {
  font-size: 11px;
  height: 24px;
  line-height: 16px;
  width: 24px;
}

.letter-PsAlMQQF {
  color: #fff;
  font-style: normal;
  font-weight: 700;
}

html[data-theme="dark"] .letter-PsAlMQQF {
  color: #636363;
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

.tv-data-mode--delayed {
  color: #ff9800;
}

.tv-data-mode--for-ticker-last {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  margin-left: 2px;
  position: absolute;
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


.tv-market-status--close {
  color: #cc2f3c;
}


.tv-market-status--close .tv-market-status__dot {
  color: #cc2f3c;
}

.tv-market-status--for-ticker-last {
  display: inline-flex;
  margin-left: 4px;
}

.tv-market-status__dot--for-ticker-last {
  height: 6px;
  width: 6px;
}

.tv-market-status--market .tv-market-status__dot--for-ticker-last,
.tv-market-status__label--for-ticker-last {
  display: none;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/56831.58ef0767a97afe090629.css */
.tv-ticker-item-last {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.tv-ticker-item-last__header {
  align-items: center;
  display: flex;
  justify-content: flex-start;
}

.tv-ticker-item-last__icon {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  margin-right: 8px;
}

.tv-ticker-item-last__short-name {
  align-items: center;
  color: #0f0f0f;
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  height: 16px;
  line-height: 16px;
}

html[data-theme="dark"] .tv-ticker-item-last__short-name {
  color: #dbdbdb;
}

.tv-ticker-item-last__title {
  color: grey;
  font-size: 12px;
  height: 14px;
  letter-spacing: .5px;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

html[data-theme="dark"] .tv-ticker-item-last__title {
  color: grey;
}

.tv-ticker-item-last__body {
  align-items: baseline;
  color: #0f0f0f;
  display: flex;
  flex-wrap: wrap;
  height: 32px;
  line-height: 1;
  margin-top: 8px;
  overflow: hidden;
}

html[data-theme="dark"] .tv-ticker-item-last__body {
  color: #dbdbdb;
}

.tv-ticker-item-last__last {
  color: #0f0f0f;
  font-size: 28px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

html[data-theme="dark"] .tv-ticker-item-last__last {
  color: #dbdbdb;
}

.tv-ticker-item-last__update-mode {
  align-self: flex-start;
  display: inline-block;
  position: relative;
}

.tv-ticker-item-last__session-status {
  display: inline-flex;
}

.tv-ticker-item-last__change-wrapper {
  font-size: 18px;
  line-height: 18px;
  margin-left: 17px;
  margin-top: 4px;
  white-space: nowrap;
}

.tv-ticker-item-last__change-wrapper--up {
  color: #06806b;
}

html[data-theme="dark"] .tv-ticker-item-last__change-wrapper--up {
  color: #22ab94;
}



.tv-ticker-item-last__change {
  display: inline-block;
}

.tv-ticker-item-last__name-wrapper {
  width: 100%;
}

.tv-single-ticker-widget {
  height: 100%;
}

@media (any-hover:hover) {
  .tv-single-ticker-widget:hover {
    background: #f9f9f9;
  }

  html[data-theme="dark"] .tv-single-ticker-widget:hover {
    background: #1f1f1f;
  }
}

.tv-single-ticker-widget__container {
  padding: 10px 18px;
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


/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/64828.35532bec9edbf525f4d8.css */
:focus {
  outline: none;
}


.tv-ticker-item-last__change-wrapper--down {
  color: #cc2f3c;
}

html.theme-dark .tv-ticker-item-last__change-wrapper--down {
  color: #f7525f;
}


.tv-ticker-item-last__change {
  display: inline-block;
}
</style>