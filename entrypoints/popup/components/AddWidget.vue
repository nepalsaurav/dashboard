<script setup>
import AddIcons from './icons/AddIcons.vue';
import BoxIcons from './icons/BoxIcons.vue';
import RightLineIcons from './icons/RightLineIcons.vue';
import { widgetOptions } from "./widgets.js"
import { useLayoutStore } from "./LayoutStore.js"
import { useRoute } from 'vue-router'
const route = useRoute()


const props = defineProps({
    modalState: {
        type: Boolean,
        required: false,
        default: false
    },
    closeModal: {
        type: Function,
    }
})
const selected = ref({})
const { addWidgetLayouts } = useLayoutStore()

function setWidget(selected, widgetType) {
    const options = { ...widgetOptions.find(e => e.type === widgetType) }
    if (options.isSelect) {
        if (selected === "") {
            alert(options.alertPlaceholder)
            return
        }
    }
    if (selected !== "") {
        options.selected = selected
        options.widgetTitle = `${options.widgetTitle} → ${selected}`
        
    }
    const id = crypto.randomUUID()
    options.i = id
    addWidgetLayouts(route.params.name, options)
    props.closeModal()
}





</script>


<template>
    <Transition>
        <div class="modal is-active" v-if="modalState">
            <div class="modal-background"></div>
            <div class="modal-card" style="width: 800px !important; height: 100% !important;">
                <header class="modal-card-head" style="padding: 10px;">
                    <p class="modal-card-title is-size-5">Add Widget</p>
                    <button class="delete" aria-label="close" @click="props.closeModal"></button>
                </header>
                <section class="modal-card-body" style="padding: 10px;">
                    <div class="box" v-for="item in widgetOptions">
                        <div class="is-flex">
                            <BoxIcons />
                            <RightLineIcons />
                            <p class="pt-2">{{ item.label }}</p>
                            <div class="control ml-auto" v-if="item.isSelect">
                                <input class="input" v-model="selected[item.type]" list="select_list" type="text"
                                    :placeholder="item.selectPlaceHolder" />
                                <datalist id="select_list">
                                    <option :value="option.value" v-for="option in item.selectOptions">
                                        {{ option.label }}
                                    </option>
                                </datalist>
                            </div>
                            <button class="button is-primary is-small ml-auto" @click="setWidget(selected[item.type], item.type)">
                                <AddIcons /> Add
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </Transition>
</template>
