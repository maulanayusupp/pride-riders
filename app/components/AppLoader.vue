<script setup lang="ts">
defineProps<{ visible: boolean }>()
</script>

<template>
  <Transition name="loader">
    <div
      v-if="visible"
      class="bg-night fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
      aria-hidden="true"
    >
      <span class="font-display text-gold-gradient text-6xl tracking-[0.35em] md:text-7xl">
        PRIDE
      </span>
      <div class="h-px w-48 overflow-hidden bg-white/10">
        <div class="loader-line bg-gold h-full w-full" />
      </div>
      <span class="text-silver text-xs tracking-[0.4em] uppercase">
        One Block, One Brotherhood
      </span>
    </div>
  </Transition>
</template>

<style scoped>
.loader-leave-active {
  transition: opacity 0.7s ease;
}

.loader-leave-to {
  opacity: 0;
}
</style>
