<script setup lang="ts">
const bgEl = ref<HTMLElement | null>(null)
let raf = 0

function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    if (bgEl.value) {
      bgEl.value.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <section id="home" class="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
    <!-- Cinematic mountain road backdrop (parallax layer) -->
    <div ref="bgEl" class="absolute inset-0 will-change-transform">
      <div class="hero-pan absolute inset-0">
        <svg
          class="h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0d0d0f" />
              <stop offset="55%" stop-color="#15120c" />
              <stop offset="100%" stop-color="#241b0e" />
            </linearGradient>
            <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#d4af37" stop-opacity="0" />
              <stop offset="100%" stop-color="#d4af37" stop-opacity="0.35" />
            </linearGradient>
            <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1c1c1e" />
              <stop offset="100%" stop-color="#0c0c0d" />
            </linearGradient>
          </defs>

          <rect width="1440" height="900" fill="url(#sky)" />
          <ellipse cx="720" cy="560" rx="620" ry="220" fill="url(#glow)" />

          <!-- Far mountains -->
          <path
            d="M0 560 L180 380 L340 520 L520 330 L700 540 L880 360 L1060 520 L1240 400 L1440 540 L1440 900 L0 900 Z"
            fill="#101010"
          />
          <!-- Near mountains -->
          <path
            d="M0 640 L240 470 L430 620 L640 450 L840 630 L1050 480 L1260 620 L1440 500 L1440 900 L0 900 Z"
            fill="#0a0a0a"
          />

          <!-- Winding road -->
          <path
            d="M620 900 C700 780 560 720 700 650 C820 590 660 540 740 500"
            fill="none"
            stroke="url(#road)"
            stroke-width="120"
            stroke-linecap="round"
          />
          <path
            d="M620 900 C700 780 560 720 700 650 C820 590 660 540 740 500"
            fill="none"
            stroke="#d4af37"
            stroke-opacity="0.5"
            stroke-width="3"
            stroke-dasharray="22 26"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>

    <!-- Dark gradient overlay -->
    <div class="from-night/70 via-night/55 to-night absolute inset-0 bg-gradient-to-b" />

    <!-- Content -->
    <div class="relative z-10 px-6 text-center">
      <p
        class="hero-enter text-gold mb-6 text-xs font-semibold tracking-[0.5em] uppercase md:text-sm"
        style="--hero-delay: 200ms"
      >
        More Than A Ride
      </p>
      <h1
        class="hero-enter font-display text-[clamp(5rem,18vw,13rem)] leading-none tracking-[0.12em] text-white"
        style="--hero-delay: 400ms"
      >
        PR<span class="text-gold-gradient">I</span>DE
      </h1>
      <p
        class="hero-enter text-silver mx-auto mt-4 max-w-xl text-sm tracking-[0.18em] uppercase md:text-base"
        style="--hero-delay: 650ms"
      >
        Permata Riders Independent &amp; Dedicated Enthusiast
      </p>
      <p
        class="hero-enter font-display mt-6 text-2xl tracking-[0.3em] text-white/90 md:text-3xl"
        style="--hero-delay: 800ms"
      >
        One Block, One Brotherhood
      </p>

      <div
        class="hero-enter mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        style="--hero-delay: 1000ms"
      >
        <a
          href="#journey"
          class="bg-gold text-night hover:bg-gold/90 w-64 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_-10px_#d4af37] sm:w-auto"
        >
          Explore Journey
        </a>
        <a
          href="#join"
          class="hover:border-gold hover:text-gold w-64 border border-white/30 px-8 py-4 text-sm font-bold tracking-[0.25em] text-white uppercase transition-colors duration-300 sm:w-auto"
        >
          Join Community
        </a>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
      <div class="flex h-12 w-7 items-start justify-center rounded-full border border-white/25 p-2">
        <div class="bg-gold h-2 w-1 animate-bounce rounded-full" />
      </div>
    </div>
  </section>
</template>
