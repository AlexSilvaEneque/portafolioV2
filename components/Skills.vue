<script setup lang="ts">
    const { data : fronts } = await useFetch('/api/front')
    const { data : back } = await useFetch('/api/back')
    const { data : dbs } = await useFetch('/api/dbs')
    const { data : tools } = await useFetch('/api/tools')
</script>

<template>
    <div id="skills" class="w-full min-h-screen bg-gradient-to-tr from-[#0C0C0D] to-[#131B22]">
        <div class="w-3/4 mx-auto py-9">

            <h2 class="text-white text-2xl font-semibold">Skills</h2>

            <div class="mt-7">
                <h3 class="mb-4 text-white">Frontend</h3>
                <div class="w-full flex flex-wrap gap-4">
                    <div v-for="item in fronts"
                        class="w-36 shadow-sm bg-[#131B22]/70 rounded-md py-2">
                        <img :src="item.image" :alt="item.name"
                            class="w-14 aspect-[3/2] object-contain mx-auto">
                        <p class="text-center text-white/80 mt-2 font-semibold text-sm">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-7">
                <h3 class="mb-4 text-white">Backend</h3>
                <div class="w-full flex flex-wrap gap-4">
                    <div v-for="item in back"
                        class="w-36 shadow-sm bg-[#131B22]/70 rounded-md py-2">
                        <img :src="item.image" :alt="item.name"
                            class="w-14 aspect-[3/2] object-contain mx-auto">
                        <p class="text-center text-white/80 mt-2 font-semibold text-sm">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-7">
                <h3 class="mb-4 text-white">Database</h3>
                <div class="w-full flex flex-wrap gap-4">
                    <div v-for="item in dbs"
                        class="w-36 shadow-sm bg-[#131B22]/70 rounded-md py-2">
                        <img :src="item.image" :alt="item.name"
                            class="w-14 aspect-[3/2] object-contain mx-auto">
                        <p class="text-center text-white/80 mt-2 font-semibold text-sm">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-7">
                <h3 class="mb-4 text-white">Others</h3>
                <div class="w-full flex flex-wrap gap-4">
                    <div v-for="item in tools"
                        class="w-36 shadow-sm bg-[#131B22]/70 rounded-md py-2">
                        <img :src="item.image" :alt="item.name"
                            class="w-14 aspect-[3/2] object-contain mx-auto">
                        <p class="text-center text-white/80 mt-2 font-semibold text-sm">
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>