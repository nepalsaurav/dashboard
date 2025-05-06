import { ref } from "vue"
import { defineStore } from "pinia"
import { getMarketStatus } from "./MarketStatus"
import { getSectorPrice } from "./SectorPrice"

export const useApiStore = defineStore('apiStore', () => {
    const marketStatus = ref("")
    const sectorPriceData = ref(null)
    const sectorPriceDataFetchIntervalID = ref(null)

    async function fetchMarketStatus() {
        if (marketStatus.value === "") {
            marketStatus.value = await getMarketStatus()
        }
    }

    async function reFetchMarketStatus() {
        marketStatus.value = await getMarketStatus()
    }

    async function fetchInitialData() {
        await fetchMarketStatus()
    }



    async function getSectorData() {
        if (sectorPriceData.value === null) {
            const data = await getSectorPrice()
            sectorPriceData.value = data
            return data
        } else {
            return sectorPriceData.value
        }
    }

    async function fetchSectorDataInterval(time) {
        if (!sectorPriceDataFetchIntervalID.value) {
            sectorPriceDataFetchIntervalID.value = setInterval(async () => {
                sectorPriceData.value = await getSectorData()
            }, time)
        }
    }

    async function clearFetchSectorDataInterval() {
        if (sectorPriceDataFetchIntervalID.value) {
            clearInterval(sectorPriceDataFetchIntervalID, time)
        }
    }


    return {
        marketStatus, fetchMarketStatus, fetchInitialData, reFetchMarketStatus, sectorPriceData,getSectorData, fetchSectorDataInterval, clearFetchSectorDataInterval
    }
})


