import { ref } from "vue"
import { defineStore } from "pinia"

export const useNewsReadStore = defineStore('newsReadStore', () => {
    const modalActive = ref(false)
    const newsContent = ref(null)
    const newsDetail = ref(null)
    return {
        modalActive,
        newsContent,
        newsDetail
    }
})