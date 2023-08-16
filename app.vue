<script setup lang="ts">
  
</script>

<template>
  <main class="h-screen">
      <Navbar />
      <LazyAbout />
      <LazySkills />
      <LazyProyects />
      <LazyContact />
      <LazyFooter />
      <div class="flex">
        <UiButtonTopAndMode />
      </div>
  </main>
</template>

<style>
*{
  scroll-behavior: smooth;
}
html {
  user-select: none;
}
body::-webkit-scrollbar {
  width: .5rem;
  background-image: linear-gradient(#131B22, #0C0C0D);
}
body::-webkit-scrollbar-thumb {
  background-color: #1FE0B5;
}
.custom-height {
    min-height: calc(100vh - 80px);
}
</style>
