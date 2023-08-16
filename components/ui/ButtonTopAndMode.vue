<script setup lang="ts">
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
</script>

<template>
    <div class="fixed bottom-3 right-3">
        <div class="text-center">
            <UiButtonMode class="mx-auto" />
            <div
                class="rebote mt-2 md:mt-3 w-10 h-10 md:w-14 md:h-14 rounded-full hover:cursor-pointer shadow shadow-[#01DC84] bg-[#01DC84] text-white/80 dark:bg-[#131B22]/100 text-[#01DC84] bottom-3 right-3 flex items-center justify-center"
                @click="scrollTop"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6 font-semibold">
                    <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
    
</template>

<style>
    .rebote {
        animation: bounce 1.5s infinite backwards;
    }
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-8px);
        }
    }
</style>