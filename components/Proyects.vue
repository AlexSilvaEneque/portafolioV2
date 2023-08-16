<script setup lang="ts">
    import { proyects } from '~/server/utils/abilities'
</script>

<template>
    <div id="proyects" class="z-0 w-full bg-gradient-to-bl from-white/20 to-white dark:from-[#0C0C0D] dark:to-[#131B22]">
        <div class="w-11/12 md:max-w-4xl mx-auto py-9">
            <h2 class="text-gray-800 dark:text-white text-2xl text-center md:text-left font-semibold mt-5">Proyectos</h2>

            <div class="w-full my-10 flex flex-wrap gap-8 justify-center px-5">
                <div v-for="proyect in proyects"
                    class="w-[300px] shadow-sm shadow-white/40 rounded-lg flex items-center flex-col border dark:border-0 overflow-hidden">
                    <img class="w-full aspect-[3/3] object-cover rounded-t"
                        :src="proyect.photo" :alt="proyect.name">
                    <div class="text-gray-800 dark:text-white text-center mb-3">
                        <p class="font-semibold text-sm md:text-lg my-3">{{ proyect.name }}</p>
                        <p class="text-xs md:text-sm px-3">{{ proyect.desc }}</p>
                        <div class="flex justify-center px-6 gap-3 mt-3">
                            <span v-for="item in proyect.techs"
                                class="px-2 py-1 text-sm rounded-xl bg-gray-100 dark:bg-[#4B5563]/80">
                                {{ item.name }}
                            </span>
                        </div>
                        <div class="w-full flex justify-end px-5 mt-3 gap-3">
                            <a :href="proyect.github" target="_blank" class="rounded-md text-gray-800 dark:text-white text-center text-xl
                                hover:cursor-pointer dark:hover:text-white/90">
                                <font-awesome-icon icon="fa-brands fa-github-alt" />
                            </a>
                            <a :href="proyect.dev" target="_blank" class="rounded-md text-gray-800 dark:text-white text-center text-xl
                                hover:cursor-pointer dark:hover:text-white/90">
                                <font-awesome-icon icon="fa-solid fa-link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>