import { onMounted, ref } from "vue"
import { defineStore } from "pinia"
import { getMarketStatus } from "./MarketStatus"

export const useApiStore = defineStore('apiStore', () => {
    const marketStatus = ref("")
    
    async function fetchMarketStatus() {
        if (marketStatus.value === "") {
            marketStatus.value = await getMarketStatus()
        }
    }

    async function reFetchMarketStatus(params) {
        marketStatus.value = await getMarketStatus()
    }
    
    async function fetchInitialData() {
        await fetchMarketStatus()
    }

    return {
        marketStatus, fetchMarketStatus, fetchInitialData, reFetchMarketStatus
    }
})