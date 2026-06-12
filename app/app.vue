<script setup lang="ts">
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1400)
})
</script>

<template>
  <div class="bg-night min-h-screen text-white">
    <AppLoader :visible="loading" />
    <TheNavbar />
    <NuxtPage />
  </div>
</template>
