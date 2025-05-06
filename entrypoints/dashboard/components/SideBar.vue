<script setup>
import AddIconsDashboard from "./icons/AddIconsDashboard.vue";
import HomeIcons from "./icons/HomeIcons.vue";
import { ref, onMounted } from "vue";
import localForage from "localforage";
import DynamicIcons from "./DynamicIcons.vue";
import { RouterLink } from "vue-router";
import { Trash2 } from "lucide-vue-next";
import { useLayoutStore } from "./LayoutStore.js"


const customSideBar = ref(null)
const modal = ref(false)
const error = ref({})
// const icon = icons[iconName]
const { clearDashboard } = useLayoutStore()


async function addCustomSidebar() {
    modal.value = true
}


onMounted(async () => {
    error.value = {}
    const data = await localForage.getItem("sidebar")
    if (data) {
        customSideBar.value = JSON.parse(data)
        console.log(customSideBar.value)
    }
})


async function handleAddSidebar(event) {
    const form = new FormData(event.target)
    const name = form.get("name")
    const icons = form.get("icons")
    if (!customSideBar.value) {
        await localForage.setItem("sidebar", JSON.stringify([
            {
                name: name,
                icons: icons,
            }
        ]))
    } else {
        const sidebarHasName = customSideBar.value.some((e) => (e.name.toLowerCase() === name.toLowerCase() || name.toLowerCase() === "home"))
        if (sidebarHasName) {
            error.value.name = "required distinct name"
        }
        else {
            customSideBar.value.push({ name: name, icons: icons })
            await localForage.setItem("sidebar", JSON.stringify(customSideBar.value))
            modal.value = false
        }
    }

}

async function removeSidebar(name) {

    if (confirm("are you sure want to delete sidebar")) {
        if (customSideBar.value) {
            const index = customSideBar.value.findIndex(e => e.name === name)
            if (index !== -1) {
                customSideBar.value.splice(index, 1)
                await localForage.setItem("sidebar", JSON.stringify(customSideBar.value))
                await clearDashboard(name)
            }
        }
    }
}

</script>

<template>


    <aside class="menu" style="height: 100vh; position: fixed;">
        <ul class="menu-list">
            <li class="pb-2">


                <RouterLink to="/widget/home" class="dashboard_name_button">
                    <span class="icons">
                        <HomeIcons />
                    </span>
                    Home
                </RouterLink>


            </li>

            <template v-if="customSideBar">
                <li class="pb-2" v-for="item in customSideBar">
                    <div class="dashboard_button is-flex">
                        <RouterLink :to="`/widget/${item.name}`">
                            <span class="icons" v-if="item.icons === ''">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-grid2x2-icon lucide-grid-2x2">
                                    <path d="M12 3v18" />
                                    <path d="M3 12h18" />
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                </svg>
                            </span>


                            <DynamicIcons :svg="item.icons" v-if="item.icons !== ''" />

                            {{ item.name }}
                        </RouterLink>
                        <button class="dashboard_delete_button" @click="removeSidebar(item.name)">
                            <Trash2 :size="15" color="#fff" />
                        </button>
                    </div>
                </li>
            </template>
            <li>
                <a class="button is-small" @click="addCustomSidebar">
                    <AddIconsDashboard /> Add
                </a>
            </li>
        </ul>
    </aside>






    <!-- add custom side bar -->
    <Transition v-if="modal">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title is-size-5">Add Custom Sidebar</p>
                    <button class="delete" aria-label="close" @click="modal = false"></button>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="handleAddSidebar">
                        <div class="field">
                            <label class="label"><small>Name</small><span class="has-text-danger">*</span></label>
                            <div class="control">
                                <input class="input is-small" type="text" placeholder="Text input" name="name" required>
                            </div>
                            <p class="help is-danger" v-if="error?.name">{{ error?.name }}</p>
                        </div>

                        <div class="field">
                            <label class="label" id="icons">Icons</label>
                            <small class="has-text-grey mb-1">Please visit https://lucide.dev/icons/, choose any icon,
                                click on it, copy the SVG, and paste it in the textarea below.</small>
                            <textarea name="icons" id="icons" class="textarea mt-1 is-small"></textarea>
                        </div>

                        <div class="field">
                            <button type="submit" class="button is-small is-dark">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </Transition>


    <!-- add custom side bar -->
</template>


<style scoped>
a {
    font-size: 12px !important;
    background: inherit;
    border-bottom: 1px solid var(--border-color) !important;
    box-shadow: none !important;
    border-radius: 0% !important;
}
</style>
