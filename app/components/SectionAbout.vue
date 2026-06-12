<script setup lang="ts">
const stats = [
  { target: 24, suffix: '+', label: 'Events' },
  { target: 36, suffix: '+', label: 'Tours' },
  { target: 3, suffix: '', label: 'Years Together' },
]
</script>

<template>
  <section id="about" class="bg-night relative py-28 md:py-36">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
      <div>
        <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
          Who We Are
        </p>
        <h2
          v-reveal="100"
          class="font-display text-5xl leading-[0.95] tracking-wide text-white md:text-7xl"
        >
          More Than<br />
          <span class="text-gold-gradient">Just Riders</span>
        </h2>
        <p v-reveal="200" class="text-silver mt-8 max-w-lg text-base leading-relaxed md:text-lg">
          PRIDE adalah komunitas yang lahir dari semangat persaudaraan, kebersamaan, dan kecintaan
          terhadap perjalanan.
        </p>
        <p v-reveal="300" class="text-silver mt-4 max-w-lg text-base leading-relaxed md:text-lg">
          Kami percaya bahwa perjalanan bukan hanya tentang tujuan, tetapi tentang cerita yang
          tercipta di sepanjang jalan.
        </p>

        <div v-reveal="400" class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
          <StatCounter
            v-for="stat in stats"
            :key="stat.label"
            :target="stat.target"
            :suffix="stat.suffix"
            :label="stat.label"
          />
        </div>
      </div>

      <!-- Large cinematic visual -->
      <div v-reveal="200" class="zoom-frame relative aspect-[4/5] border border-white/10">
        <div
          class="zoom-target absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,#2a2412_0%,#111111_55%,#090909_100%)]"
        >
          <svg class="h-full w-full" viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d="M0 480 L150 320 L280 450 L420 290 L600 470 L600 750 L0 750 Z" fill="#0d0d0d" />
            <path d="M0 560 L200 420 L360 560 L520 430 L600 540 L600 750 L0 750 Z" fill="#090909" />
            <path
              d="M260 750 C320 640 230 590 320 520 C400 460 320 420 370 380"
              fill="none"
              stroke="#d4af37"
              stroke-opacity="0.45"
              stroke-width="2.5"
              stroke-dasharray="14 18"
            />
            <circle cx="370" cy="380" r="6" fill="#d4af37" />
          </svg>
        </div>
        <div class="from-night/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        <div class="absolute bottom-6 left-6">
          <p class="font-display text-2xl tracking-[0.2em] text-white">EVERY ROAD,</p>
          <p class="font-display text-gold text-2xl tracking-[0.2em]">A STORY.</p>
        </div>
        <div class="border-gold/40 absolute -top-4 -right-4 hidden h-24 w-24 border-t border-r md:block" />
        <div class="border-gold/40 absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l md:block" />
      </div>
    </div>
  </section>
</template>
