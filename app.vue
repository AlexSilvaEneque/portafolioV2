<script setup lang="ts">

</script>

<template>
  <main class="bg-[#0C0C0D]">
    <NuxtPage />
  </main>
</template>

<style>
*{
  scroll-behavior: smooth;
}
body::-webkit-scrollbar {
  width: .2rem;
}
body::-webkit-scrollbar-thumb {
  background: #4E5249;
}
.custom-height {
    min-height: calc(100vh - 80px);
}
</style>
