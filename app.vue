<script setup lang="ts">
  
</script>

<template>
  <main class="bg-[#0C0C0D]">
      <Navbar />
      <LazyAbout />
      <LazySkills />
      <LazyProyects />
      <Contact />
      <LazyFooter />
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
  background-color: #35E4D9;
}
.custom-height {
    min-height: calc(100vh - 80px);
}
</style>
