<script setup lang="ts">

  const loading = ref<boolean>(false)

  onMounted(() => {
    setTimeout(() => {
      loading.value = true
    }, 800);
  })
  
</script>

<template>
  <main class="bg-[#0C0C0D]">
    <template v-if="loading">
      <Navbar />
      <LazySocial />
      <LazyAbout />
      <LazySkills />
      <LazyProyects />
      <Contact />
      <LazyFooter />
    </template>
    <div v-else
      class="h-screen w-full flex justify-center items-center">
      <LazyUiLoading />
    </div>
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
