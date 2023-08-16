<script setup lang="ts">
    import { front, back, db, tools } from '~/server/utils/abilities'

    const xfront = ref(front)
    const xback = ref(back)
    const xdb = ref(db)
    const xtools = ref(tools)

    setInterval(() => {
        xtools.value = [...tools].sort(() => Math.random() - 0.5)
        xfront.value = [...front].sort(() => Math.random() - 0.5)
        xback.value = [...back].sort(() => Math.random() - 0.5)
        xdb.value = [...db].sort(() => Math.random() - 0.5)
    }, 10000)
</script>

<template>
    <div id="skills" class="w-full min-h-screen  bg-gradient-to-bl from-white to-white/90 dark:from-[#0C0C0D] dark:to-[#131B22]">
        <div class="w-11/12 md:max-w-4xl mx-auto py-9">
            <h2 class="text-gray-800 dark:text-white text-2xl font-semibold text-center md:text-left mt-5">Conocimientos</h2>

            <LazyUiCard title="Frontend" :skill="xfront" />

            <LazyUiCard title="Backend" :skill="xback" />            

            <LazyUiCard title="Database" :skill="xdb" />

            <LazyUiCard title="Others" :skill="xtools" class="mb-10" />

        </div>
    </div>
</template>