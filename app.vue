<script setup lang="ts">

</script>

<template>
  <main>
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
    height: calc(100vh - 80px);
}
</style>
