<script setup lang="ts">
    const year = new Date()
    const fullYear = year.getFullYear()
</script>

<template>
    <div class="w-full text-center mt-2 sm:mt-4 md:mt-6 lg:mt-10">
        <p class="text-xs sm:text-base font-light">
            Realizado por <span class="text-sm sm:text-lg font-normal">AMSEDev</span> - {{ fullYear }} 💚
        </p>
    </div>
</template>