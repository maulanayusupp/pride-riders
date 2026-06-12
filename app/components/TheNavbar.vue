<script setup lang="ts">
const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Values', to: '#values' },
  { label: 'Journey', to: '#journey' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Safety', to: '#safety' },
  { label: 'Contact', to: '#join' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'border-b border-white/5 bg-night/85 backdrop-blur-md' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
      <a href="#home" class="flex items-baseline gap-3" aria-label="PRIDE — kembali ke atas">
        <span class="font-display text-gold-gradient text-3xl tracking-[0.25em]">PRIDE</span>
        <span class="text-silver hidden text-[10px] tracking-[0.3em] uppercase sm:inline">
          One Block, One Brotherhood
        </span>
      </a>

      <ul class="hidden items-center gap-8 lg:flex">
        <li v-for="link in links" :key="link.to">
          <a
            :href="link.to"
            class="hover:text-gold text-xs font-medium tracking-[0.2em] text-white/80 uppercase transition-colors duration-300"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#join"
            class="border-gold/60 text-gold hover:bg-gold hover:text-night border px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Join
          </a>
        </li>
      </ul>

      <button
        class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        :aria-expanded="menuOpen"
        aria-label="Buka menu navigasi"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="h-px w-6 bg-white transition-transform duration-300"
          :class="menuOpen && 'translate-y-[3.5px] rotate-45'"
        />
        <span
          class="h-px w-6 bg-white transition-transform duration-300"
          :class="menuOpen && '-translate-y-[3.5px] -rotate-45'"
        />
      </button>
    </nav>

    <Transition name="menu">
      <div v-if="menuOpen" class="bg-night/95 border-t border-white/5 backdrop-blur-md lg:hidden">
        <ul class="flex flex-col gap-1 px-6 py-6">
          <li v-for="link in links" :key="link.to">
            <a
              :href="link.to"
              class="hover:text-gold block py-3 text-sm tracking-[0.25em] text-white/80 uppercase transition-colors"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
