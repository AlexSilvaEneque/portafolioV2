<script setup lang="ts">
    import { front, back, db, tools } from '~/server/utils/abilities'
</script>

<template>
    <div id="skills" class="w-full min-h-screen bg-gradient-to-tr from-[#0C0C0D] to-[#131B22]">
        <div class="w-11/12 md:max-w-4xl mx-auto py-9">
            <h2 class="text-white text-2xl font-semibold text-center md:text-left mt-5">Conocimientos</h2>

            <LazyUiCard title="Frontend" :skill="front" />

            <LazyUiCard title="Backend" :skill="back" />            

            <LazyUiCard title="Database" :skill="db" />

            <LazyUiCard title="Others" :skill="tools" class="mb-10" />

        </div>
    </div>
</template>