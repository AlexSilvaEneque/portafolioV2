<script setup lang="ts">
    import { Ref } from "vue"

    const links = ref([
        { link: '#skills', name: 'Conocimientos' },
        { link: '#proyects', name: 'Proyectos' },
        { link: '#contact', name: 'Contáctame' }
    ])

    const open: Ref<Boolean> = ref(false)
    const width : Ref<number> = ref(0)

    const change = () => {
        open.value = !open.value
    }
    
    const checkScreen = () => {
        width.value = window.innerWidth
        if (width.value > 639) {
            open.value = false
            return
        }
    }

    onMounted(() => {
        window.addEventListener('resize', checkScreen)
    })
</script>

<template>
    <ClientOnly>
        <nav class="w-full mx-auto h-20 relative bg-gradient-to-r from-[#131B22] to-[#0C0C0D]">
            <div class="flex h-full items-center w-11/12 md:w-3/4 mx-auto justify-between font-bold">
                <div class="flex justify-start">
                    <a href="#">
                        <img src="~/assets/img/logo.png" class="w-full h-32" alt="Logo"
                            loading="lazy">
                    </a>
                </div>
                <div v-for="item in links" :key="item.name"
                    class="hidden sm:flex justify-start px-4 py-1 rounded-md">
                    <a class="text-white/90 hover:text-white/80"
                        :href="item.link">{{ item.name }}</a>
                </div>
    
                <button @click="change"
                    type="button"
                    class="z-50 sm:hidden inline-flex items-center justify-center rounded-md p-2 h-1/2 w-10 font-bold text-green-100 bg-gray-900">
                    <font-awesome-icon
                    :class=" open ? 'w-0 rotate-180' : 'w-1/2 duration-200' "
                        icon="fa-solid fa-bars-staggered" />
                    <font-awesome-icon
                        :class=" open ? 'w-1/2 duration-200 rotate-90 fixed' : 'w-0' "
                        icon="fa-solid fa-xmark" />
                </button>
            </div>
        </nav>
        <div :class="[open ? 'w-full border-r rounded-tr-xl z-0' : 'w-0']"
            class="min-h-screen top-0 z-50 bg-[#131B22]/20 border-r-[#131B22] duration-300 fixed backdrop-blur-md pt-20">
            <!-- <button v-if="open"
                type="button"
                class="border px-3 text-right w-full"
                @click="change">
                <font-awesome-icon
                        icon="fa-solid fa-xmark" />
            </button> -->
            <!-- <div class="mt-7"> -->
                <div v-for="item in links" :key="item.name"
                    class="space-y-1 px-2 pt-2 pb-3 text-center">
                    <a :href="item.link"
                        class="text-white px-3 py-1 rounded-md font-bold hover:bg-gray-800"
                        :class="[open ? 'block duration-300' : 'hidden']"
                        @click="change">
                        {{ item.name }}
                    </a>
                </div>
            <!-- </div> -->
        </div>
    </ClientOnly>
</template>