<script setup lang="ts">
  const flag = ref<boolean>(false)

  onMounted(() => {
    setTimeout(() => {
      flag.value = true
    }, 600)
  })
</script>

<template>
  <main class="h-screen w-full relative">
    <div class="w-full lg:max-w-4xl lg:mx-auto">
      <Navbar2 />
      <template v-if="flag">
        <About2 />
        <LazySkills2 />
        <LazyWorkExperience />
        <LazyProjects2 />
        <LazyContact2 />
      </template>
      <UNotifications />
    </div>
      
  </main>
</template>

<style>
</style>
