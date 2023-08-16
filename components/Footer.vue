<script setup lang="ts">

    const year = ref()

    onMounted(() => {
        year.value = new Date().getFullYear()
    })
</script>

<template>
    <footer class="w-full bg-gradient-to-b from-white/5 to-white dark:from-[#0C0C0D] dark:to-[#131B22]">
        <div class="w-3/4 h-32 mx-auto flex items-center justify-center">
            <div class="text-gray-800 dark:text-white/80 text-xs md:text-lg">
                &#169;  <span class="font-semibold text-gray-900 dark:text-white/90">AMSE DEV</span> - All rights reserved - {{ year }}
            </div>
        </div>
    </footer>
</template>
