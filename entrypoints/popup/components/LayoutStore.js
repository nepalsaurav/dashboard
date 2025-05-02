import { ref } from "vue"
import { defineStore } from "pinia"
import localForage from "localforage"

export const useLayoutStore = defineStore('layoutStore', () => {
    const widgetLayouts = ref(null)
    function addWidgetLayouts(name, layoutsInput) {
        if (widgetLayouts.value === null) {
            widgetLayouts.value = {}
        }

        if (widgetLayouts.value?.[name] === undefined) {
            widgetLayouts.value[name] = [layoutsInput]
        } else {
            if (widgetLayouts.value[name] !== null) {
                widgetLayouts.value[name].push(layoutsInput)
            } else {
                widgetLayouts.value[name] = [layoutsInput]
            }
            
        }
        localForage.setItem(name, JSON.stringify(widgetLayouts.value[name]))
    }

    async function initWidgetLayouts(name) {
       
        if (widgetLayouts.value === null) {
            widgetLayouts.value = {}
        }
        if (widgetLayouts.value?.[name] === undefined) {
            const layoutsInput = JSON.parse(await localForage.getItem(name))
            widgetLayouts.value[name] = layoutsInput
        } 
    }

    async function layoutUpdate(name, newLayout) {
        localForage.setItem(name, JSON.stringify(newLayout))
    }
    
    function deleteWidget(name, item) {
        const index = widgetLayouts.value?.[name].findIndex(widget => widget.i === item.i);
        if (index !== -1) {
            widgetLayouts.value?.[name].splice(index, 1);
        }
        if (widgetLayouts.value[name] === undefined) {
            localForage.setItem(name, JSON.stringify([]))
        } else {
            localForage.setItem(name, JSON.stringify(widgetLayouts.value[name]))
        }
    }

    return { widgetLayouts, addWidgetLayouts, initWidgetLayouts, layoutUpdate, deleteWidget }
})