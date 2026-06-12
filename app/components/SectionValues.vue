<script setup lang="ts">
const values = [
  {
    title: 'Brotherhood',
    description: 'Kami tumbuh bersama sebagai keluarga.',
    icon: 'M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-6 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm12 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 12c2.7 0 5 1.6 5 3.8V19H7v-3.2C7 13.6 9.3 12 12 12Zm-7.5 2c.5 0 1 .07 1.5.2-.6.8-1 1.7-1 2.6V19H2v-2.3C2 15.2 3.1 14 4.5 14Zm15 0c1.4 0 2.5 1.2 2.5 2.7V19h-3v-2.2c0-.9-.4-1.8-1-2.6.5-.13 1-.2 1.5-.2Z',
  },
  {
    title: 'Safety',
    description: 'Keselamatan adalah prioritas utama.',
    icon: 'M12 2 4 5.5v5.1c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9V5.5L12 2Zm-1.2 13.5-3.3-3.3 1.4-1.4 1.9 1.9 4.3-4.3 1.4 1.4-5.7 5.7Z',
  },
  {
    title: 'Respect',
    description: 'Menghormati sesama di dalam maupun di luar komunitas.',
    icon: 'M12 21s-7.5-4.6-10-9.2C.6 8.6 2.6 5 6 5c2 0 3.4 1.1 4.2 2.3L12 9.6l1.8-2.3C14.6 6.1 16 5 18 5c3.4 0 5.4 3.6 4 6.8C19.5 16.4 12 21 12 21Z',
  },
  {
    title: 'Discipline',
    description: 'Menjaga sikap dan ketertiban dalam setiap perjalanan.',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v5.3l4.2 2.5-.8 1.4L11 13V7h2Z',
  },
]
</script>

<template>
  <section id="values" class="bg-coal relative py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="mb-16 text-center">
        <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
          Our Values
        </p>
        <h2 v-reveal="100" class="font-display text-5xl tracking-wide text-white md:text-7xl">
          The Values We <span class="text-gold-gradient">Ride With</span>
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(value, i) in values"
          :key="value.title"
          v-reveal="i * 120"
          class="glow-card bg-night/60 group border border-white/10 p-8"
        >
          <div
            class="border-gold/40 text-gold group-hover:bg-gold group-hover:text-night mb-8 flex h-14 w-14 items-center justify-center border transition-colors duration-500"
          >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path :d="value.icon" />
            </svg>
          </div>
          <h3 class="font-display text-3xl tracking-[0.15em] text-white">{{ value.title }}</h3>
          <p class="text-silver mt-4 text-sm leading-relaxed">{{ value.description }}</p>
          <div class="bg-gold mt-8 h-px w-10 transition-all duration-500 group-hover:w-full" />
        </article>
      </div>
    </div>
  </section>
</template>
