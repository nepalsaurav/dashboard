<script setup>
import { onMounted, ref } from 'vue';
import LoadingSkeletons from '../../LoadingSkeletons.vue';
import localForage from 'localforage';
import { sendMessage } from "webext-bridge/content-script";
import { useNewsReadStore } from "./NewsStore.js"
import { storeToRefs } from 'pinia';
import { Readability } from "@mozilla/readability";


const news = ref(null)
const loading = ref(true)
const error = ref(null)
const newsStore = useNewsReadStore()
const { modalActive, newsContent, newsDetail } = storeToRefs(newsStore)

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


const timeOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
};

async function readNews(item) {
    try {
        const resp = await fetch(item.link)
        const text = await resp.text()
        const document = new DOMParser().parseFromString(
            text,
            "text/html",
        )
        const readableContent = new Readability(document).parse();
        newsContent.value = readableContent
        newsDetail.value = item
        modalActive.value = true
    } catch {}
}


</script>


<template>


    <LoadingSkeletons v-if="loading" />

    <div v-if="news !== null">

        <div class="is-flex is-flex-direction-column" style="height: 700px !important; overflow-y: scroll;">


            <a @click.prevent="readNews(item)" target="_blank" v-for="item in news.slice(0, 50)" style="margin: 10px;">
                <div class="card">

                    <div class="card-content" style="padding: 10px !important;">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img class="is-rounded" :src="item.newsImage" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <small>{{ item.newsTitle.toUpperCase() }}</small>
                            </div>
                        </div>

                        <div class="content">
                            <div v-html="item.title"></div>
                            <time :datetime="item.pubDate">{{ new Date(item.pubDate).toLocaleString("en-US",
                                timeOptions) }}</time>
                        </div>
                    </div>
                </div>
            </a>


        </div>
    </div>

</template>
