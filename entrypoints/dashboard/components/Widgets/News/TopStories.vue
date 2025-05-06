<script setup>
import { onMounted, ref } from 'vue';
import LoadingSkeletons from '../../LoadingSkeletons.vue';
import localForage from 'localforage';
import { sendMessage } from "webext-bridge/content-script";


const news = ref(null)
const loading = ref(true)
const error = ref(null)

async function processNews(lists) {
    let newList = [];
    if (lists) {
        lists.forEach((n) => {
            const newsImage = n.image != undefined ? n.image : n.newsImage;
            n?.items?.forEach((e) => {
                const d = e;
                d.newsTitle = n.newsTitle;
                d.newsImage = newsImage;
                newList.push(d);
            });
        })
    }

    newList = newList.sort((a, b) => {
        const dateA = new Date(a.pubDate);
        const dateB = new Date(b.pubDate);
        return dateB - dateA;
    });

    news.value = newList
    console.log(newList)

}



onMounted(async () => {
    try {
        sendMessage("refetch_news_list").then((lists) => {
            processNews(lists)
        })
        const newsList = await localForage.getItem("news_list");
        processNews(newsList)
        loading.value = false
    } catch { }
})



</script>


<template>

    <LoadingSkeletons v-if="loading" />
    <div class="tv-embed-widget-wrapper" v-if="news !== null">


        <div class="tv-embed-widget-wrapper__body js-embed-widget-body">
            <div class="tv-timeline-widget js-timeline-widget-ssr-root" data-props-id="uTHjDU">
                <div class="container-Q_KPo8tL">
                    <div class="header-Q_KPo8tL">
                        <h1 class="title-Q_KPo8tL">Top Stories</h1>
                    </div>
                    <div class="innerContainer-Q_KPo8tL">
                        <div>
                            <div class="grid-0GkkYHKF">

                                <template v-for="item in news.slice(0, 50)">
                                    <a :href="item.link" target="_blank" class="card-YNF0OWRe mt-3">
                                        <article class="card-exterior-Us1ZHpvJ article-YNF0OWRe">
                                            <div class="container-YNF0OWRe">
                                                <div class="header-YNF0OWRe">
                                                    <img class="logo-PsAlMQQF xxxsmall-PsAlMQQF letter-PsAlMQQF"
                                                        crossorigin="" :src="item.newsImage" alt="" />

                                                    <relative-time locale="en" :event-time="item.pubDate"
                                                        class="apply-common-tooltip" :title="item.pubDate">
                                                    </relative-time>

                                                </div>
                                                <div class="apply-overflow-tooltip apply-overflow-tooltip--direction_both title-YNF0OWRe"
                                                    data-overflow-tooltip-text="AMZN: Amazon Stock Falls as Traders Overlook Solid Revenue and Brace for Tariff Impact">
                                                    {{ item.newsTitle.toUpperCase() }}: <span v-html="item.title"></span>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </template>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@100..900&display=swap');

.innerContainer-Q_KPo8tL {
    font-family: "Noto Sans Devanagari", sans-serif !important;
 
}

h1 {
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

h1 {
    font-size: 2em;
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

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/26383.3052225a0e744f01a57d.css */
.card-exterior-Us1ZHpvJ {
    border-radius: 16px;
    box-sizing: border-box;
    padding: 8px;
}

@media (any-hover:hover) {
    .card-exterior-Us1ZHpvJ:hover {
        background-color: #f9f9f9;
    }

    html[data-theme="dark"] .card-exterior-Us1ZHpvJ:hover {
        background-color: #1f1f1f;
    }
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/44259.45f129a1181841b7ba34.css */
.card-YNF0OWRe {
    border-radius: 16px;
    display: inline-flex;
    transition: background-color .35s ease;
    -webkit-user-select: none;
    user-select: none;
}

.card-YNF0OWRe,
html[data-theme="dark"] .card-YNF0OWRe {
    background-color: initial;
}

.card-YNF0OWRe {
    outline: none;
    overflow: visible;
    position: relative;
}

.card-YNF0OWRe:focus {
    outline: none;
}

.card-YNF0OWRe:after {
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

.card-YNF0OWRe:focus:after {
    display: block;
}

.card-YNF0OWRe:focus:not(:focus-visible):after {
    display: none;
}

.card-YNF0OWRe:after,
html[data-theme="dark"] .card-YNF0OWRe:after {
    border-color: #2962ff;
}

.card-YNF0OWRe:after {
    border-radius: 16px;
}

@media (any-hover:hover) {

    .card-YNF0OWRe:hover+.card-YNF0OWRe:not(:first-child):before,
    .card-YNF0OWRe:hover:before {
        height: 0;
    }
}

@media (min-width:768px) {
    .card-YNF0OWRe {
        padding: 0;
    }
}

.header-YNF0OWRe {
    align-items: center;
    color: #707070;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif;
    font-feature-settings: "tnum" on, "lnum" on;
    font-style: normal;
    gap: 8px;
    grid-area: header;
    margin-bottom: 8px;
    min-height: 18px;
    --ui-lib-typography-font-size: 14px;
    font-size: var(--ui-lib-typography-font-size);
    font-weight: 400;
    --ui-lib-typography-line-height: 18px;
    line-height: var(--ui-lib-typography-line-height);
}

html[data-theme="dark"] .header-YNF0OWRe {
    color: #8c8c8c;
}

.title-YNF0OWRe {
    display: -webkit-box;
    grid-area: title;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif;
    font-feature-settings: "tnum" on, "lnum" on;
    font-style: normal;
    line-height: 24px;
    max-height: 72px;
    --ui-lib-typography-font-size: 16px;
    font-size: var(--ui-lib-typography-font-size);
    font-weight: 500;
    --ui-lib-typography-line-height: 24px;
    line-height: var(--ui-lib-typography-line-height);
}

.article-YNF0OWRe {
    border-radius: 16px;
    color: #0f0f0f;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

html[data-theme="dark"] .article-YNF0OWRe {
    color: #dbdbdb;
}

@media (any-hover:hover) {
    .article-YNF0OWRe:hover {
        cursor: pointer;
    }
}

.grid-0GkkYHKF {
    --grid-col-gap: 24px;
    column-gap: var(--grid-col-gap);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--grid-item-min-width), 1fr));
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 0 8px;
    margin-inline-end: 3px;
    row-gap: var(--grid-row-gap);
    --grid-column-count: 1;
    --grid-display-column-1: none;
    --grid-display-column-2: none;
    --grid-display-column-3: none;
    --grid-display-column-4: none;
    --grid-display-column-5: none;
}

.tv-display-mode-regular .grid-0GkkYHKF {
    --grid-row-gap: 8px;
}

@media (min-width:768px) {
    .tv-display-mode-regular .grid-0GkkYHKF {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        --grid-column-count: 2;
        --grid-display-column-1: revert;
        --grid-display-column-2: none;
        --grid-display-column-3: none;
        --grid-display-column-4: none;
        --grid-display-column-5: none;
        --grid-row-gap: 8px;
        --grid-col-gap: 32px;
    }
}

@media (min-width:1024px) {
    .tv-display-mode-regular .grid-0GkkYHKF {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        --grid-column-count: 3;
        --grid-display-column-1: revert;
        --grid-display-column-2: revert;
        --grid-display-column-3: none;
        --grid-display-column-4: none;
        --grid-display-column-5: none;
    }
}

@media (min-width:1280px) {
    .tv-display-mode-regular .grid-0GkkYHKF {
        --grid-col-gap: 64px;
    }
}

@media (min-width:1920px) {
    .tv-display-mode-regular .grid-0GkkYHKF {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        --grid-column-count: 4;
        --grid-display-column-1: revert;
        --grid-display-column-2: revert;
        --grid-display-column-3: revert;
        --grid-display-column-4: none;
        --grid-display-column-5: none;
    }
}

@media (min-width:2560px) {
    .tv-display-mode-regular .grid-0GkkYHKF {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        --grid-column-count: 5;
        --grid-display-column-1: revert;
        --grid-display-column-2: revert;
        --grid-display-column-3: revert;
        --grid-display-column-4: revert;
        --grid-display-column-5: none;
    }
}

.tv-timeline-widget {
    height: 100%;
}

.tv-embed-widget-wrapper__body {
    background-color: #fff;
    border-bottom: 8px solid #fff;
    border-radius: 4px;
}

html[data-theme="dark"] .tv-embed-widget-wrapper__body {
    background-color: #000;
    border-bottom: 8px solid #000;
}

.container-Q_KPo8tL {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    --timeline-widget-item-compact-border-color: #ebebeb;
    --timeline-widget-item-compact-bg-color: #fff;
}

html[data-theme="dark"] .container-Q_KPo8tL {
    --timeline-widget-item-compact-bg-color: #0f0f0f;
    --timeline-widget-item-compact-border-color: #0f0f0f;
}

.innerContainer-Q_KPo8tL {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: 100%;
}

.innerContainer-Q_KPo8tL::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

.innerContainer-Q_KPo8tL::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: var(--tv-color-scrollbar-thumb-background, #9c9c9c);
    border: 1px solid #0000;
    border-radius: 3px;
}

html[data-theme="dark"] .innerContainer-Q_KPo8tL::-webkit-scrollbar-thumb {
    background-color: var(--tv-color-scrollbar-thumb-background, #3d3d3d);
}

.innerContainer-Q_KPo8tL::-webkit-scrollbar-track {
    background-color: initial;
    border-radius: 3px;
}

.innerContainer-Q_KPo8tL::-webkit-scrollbar-corner {
    display: none;
}

.header-Q_KPo8tL {
    align-items: flex-start;
    display: flex;
    padding: 12px 16px 8px;
}

.title-Q_KPo8tL {
    color: #0f0f0f;
    font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif;
    font-feature-settings: "tnum" on, "lnum" on;
    --ui-lib-typography-line-height: 32px;
    line-height: var(--ui-lib-typography-line-height);
    --ui-lib-typography-font-size: 24px;
    font-size: var(--ui-lib-typography-font-size);
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
}

html[data-theme="dark"] .title-Q_KPo8tL {
    color: #dbdbdb;
}

.tv-display-mode-regular .title-Q_KPo8tL {
    font-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif;
    font-feature-settings: "tnum" on, "lnum" on;
    --ui-lib-typography-line-height: 36px;
    line-height: var(--ui-lib-typography-line-height);
    --ui-lib-typography-font-size: 28px;
    font-size: var(--ui-lib-typography-font-size);
    font-style: normal;
    font-weight: 600;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/38452.0d2092b2956e0e4eae2d.css */
.tv-spinner {
    animation: tv-spinner__container-rotate-aLqboHuu .9s linear infinite;
    border-bottom: 0 solid #f2f2f2;
    border-left: 0 solid var(--tv-spinner-color, #2962ff);
    border-radius: 50%;
    border-right: 0 solid #f2f2f2;
    border-top: 0 solid var(--tv-spinner-color, #2962ff);
    display: none;
    margin: 0 auto;
    position: absolute;
}

html[data-theme="dark"] .tv-spinner {
    border-bottom-color: #2e2e2e;
    border-right-color: #2e2e2e;
}

.tv-spinner--shown {
    display: block;
}

.tv-spinner--size_small {
    border-width: 2px;
    height: 20px;
    left: calc(50% - 12px);
    top: calc(50% - 12px);
    width: 20px;
}

/*! CSS Used from: https://www.tradingview-widget.com/static/bundles/embed/26282.6103f8d27a53aa2b6816.css */
.spinner-PLEjRfDc {
    height: 40px;
    position: relative;
}

.loader-LlTtXvfG {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 8px;
    padding-top: 8px;
    width: 100%;
}

.loader-LlTtXvfG>* {
    flex: 1;
    width: 100%;
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

/*! CSS Used keyframes */
@keyframes tv-spinner__container-rotate-aLqboHuu {
    to {
        transform: rotate(1turn);
    }
}
</style>