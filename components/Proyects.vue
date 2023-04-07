<script setup lang="ts">
    const { data : proyects } = await useFetch('/api/proyects')
</script>

<template>
    <div id="proyects" class="w-full min-h-screen bg-gradient-to-bl from-[#0C0C0D] to-[#131B22]">
        <div class="w-3/4 mx-auto py-9">
            <h2 class="text-white text-2xl text-center md:text-left font-semibold">Proyectos</h2>
            <div class="w-full mt-5 flex flex-wrap gap-6 justify-center">
                <div v-for="proyect in proyects"
                    class="w-[300px] shadow-sm shadow-white/40 rounded-lg flex items-center flex-col relative">
                    <img class="aspect-[3/3] object-cover rounded-t"
                        :src="proyect.photo" :alt="proyect.name">
                    <div class="text-white text-center mb-3">
                        <p class="font-semibold text-lg my-3">{{ proyect.name }}</p>
                        <p class="text-sm">{{ proyect.desc }}</p>
                        <div class="w-full flex justify-around mt-3">
                            <a :href="proyect.github" target="_blank" class="w-24 py-2 rounded-md text-white/80 bg-[#131B22]/70 text-center text-sm
                                hover:cursor-pointer hover:bg-[#131B22]/90">
                                Github
                            </a>
                            <a :href="proyect.dev" target="_blank" class="w-24 py-2 rounded-md text-white/80 bg-[#131B22]/70 text-center text-sm
                                hover:cursor-pointer hover:bg-[#131B22]/90">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>