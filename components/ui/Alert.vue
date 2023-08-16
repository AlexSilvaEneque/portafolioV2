<script setup lang="ts">
    defineProps({
        tipo: String
    })
</script>

<template>
    <div class="border-l-4 text-white/80 px-3 py-1 text-sm md:text-[16px]"
        :class="[tipo === 'error' ? 'border-l-red-700 text-red-500 dark:border-l-red-500 dark:text-red-300' : 'border-l-green-700 text-green-500 dark:border-l-green-500 dark:text-green-300']"
    >
        <slot></slot>
    </div>
</template>

<style scoped>
    .mostrar {
        opacity: 1;
    }
    .ocultar {
        opacity: 0;
    }
</style>