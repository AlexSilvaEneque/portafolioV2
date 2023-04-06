<script setup lang="ts">
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
</script>

<template>
    <div class="fixed bottom-4 right-4">
        <button class="h-14 w-14 text-white/70 rounded-full text-2xl shadow-inner shadow-white/20 bg-[#131B22]
            hover:bg-[#131B22]/80 hover:-translate-y-1 duration-150 ease-out"
            @click="scrollTop">
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
        </button>
    </div>
</template>

<style scoped>
/* .custom-rounded {
    border-radius: 60% 28% / 0% 60%;
} */
</style>