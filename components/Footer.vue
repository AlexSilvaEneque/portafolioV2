<script setup lang="ts">

    const year = ref()

    onMounted(() => {
        year.value = new Date().getFullYear()
    })
</script>

<template>
    <footer class="w-full bg-gradient-to-b from-[#0C0C0D] to-[#131B22]">
        <div class="w-3/4 h-32 mx-auto flex items-center justify-center">
            <div class="text-white/80 text-lg">
                &#169;  <span class="font-semibold text-white/90">AMSE DEV</span> - All rights reserved - {{ year }}
            </div>
        </div>
    </footer>
</template>
