<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LoadingSkeletons from "../../LoadingSkeletons.vue";
import numeral from 'numeral';
import { useApiStore } from "../../../api/ApiStore.js"
import { storeToRefs } from 'pinia';



const indexData = ref(null)
const loading = ref(true)
const error = ref(null)
const props = defineProps({
    indices: {
        type: String,
        default: "Hotels And Tourism"
    }
})
const apiStore = useApiStore()
const { sectorPriceData } = storeToRefs(apiStore)


watch(sectorPriceData, () => {
    indexData.value = sectorPriceData.value?.data
})

onMounted(async () => {
    const response = await apiStore.getSectorData()
    indexData.value = response.data
    loading.value = false
    console.log(response.data)
})


function calculateProgress(item) {
    const progress = ((item.advancers) / (item.advancers + item.decliners)) * 100
    return parseInt(progress)
}
</script>


<template>
    <LoadingSkeletons v-if="loading" />
    <div class="is-flex" v-if="indexData != null">

        <template v-for="item in indexData" :key="item.indices">
            <div class="box custom_box" v-if="item.indices === props.indices">


                <div class="is-flex is-justify-content-space-between">
                    <span class="is-align-content-flex-start">
                        <span>{{ item.indices }}</span>
                        <span class="has-text-danger" v-if="item.pointChange < 0">↘</span>
                        <span class="has-text-success" v-if="item.pointChange > 0">↗</span>
                    </span>

                    <span class="is-align-content-flex-end pl-3">
                        {{ numeral(item.ltp).format("0,0.00") }}
                    </span>
                </div>



                <div class="is-flex is-justify-content-space-between">

                    <span class="is-align-content-flex-start">
                        {{ numeral(item.turnover).format('0.00a').toUpperCase() }}
                    </span>
                    <span class="is-align-content-flex-end" :class="item.pointChange < 0 ? 'has-text-danger' : 'has-text-success'">
                        <span>{{ item.pointChange }}</span>
                        <span class="pl-1">({{ item.pctChange }}%)</span>
                    </span>
                </div>




                <div class="is-flex is-justify-content-space-between">
                    <small class="is-align-content-flex-start has-text-grey">Advances: {{ item.advancers }}</small>
                    <small class="is-align-content-flex-end has-text-grey">Declines: {{ item.decliners }}</small>
                </div>



                <div>
                    <progress class="progress is-success is-small" :value="calculateProgress(item)" max="100"
                    :class="item.decliners > 0 && 'is-decline'">
                </progress>
                </div>
            </div>
        </template>

    </div>

</template>



<style scoped>
.is-decline {
    --bulma-progress-bar-background-color: rgb(255 107 107/1) !important;
}


.progress {
    height: 5px !important;
}

.custom_box div {
    padding: 5px;
}



</style>
