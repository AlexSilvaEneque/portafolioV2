<script setup lang="ts">
    defineProps({
        tipo: String
    })
</script>

<template>
    <div class="border-l-4 w-max text-white/80 px-3 py-1"
        :class="[tipo === 'error' ? 'border-l-red-500 text-red-300' : 'border-l-green-500 text-green-300']"
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