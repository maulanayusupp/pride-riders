<template>
  <section class="bg-night relative overflow-hidden py-28 md:py-36">
    <!-- Immersive backdrop -->
    <div class="absolute inset-0" aria-hidden="true">
      <svg class="h-full w-full opacity-60" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="moments-glow" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stop-color="#2a2210" />
            <stop offset="60%" stop-color="#111111" />
            <stop offset="100%" stop-color="#090909" />
          </radialGradient>
        </defs>
        <rect width="1440" height="700" fill="url(#moments-glow)" />
        <path d="M0 460 L260 300 L460 440 L700 270 L940 450 L1180 320 L1440 440 L1440 700 L0 700 Z" fill="#0c0c0c" />
        <path d="M0 540 L300 410 L560 540 L820 420 L1100 540 L1440 430 L1440 700 L0 700 Z" fill="#090909" />
        <path
          d="M520 700 C620 600 520 540 640 480 C760 420 680 360 760 320"
          fill="none"
          stroke="#d4af37"
          stroke-opacity="0.3"
          stroke-width="2"
          stroke-dasharray="12 16"
        />
      </svg>
      <div class="from-night via-night/40 to-night absolute inset-0 bg-gradient-to-b" />
    </div>

    <div class="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
      <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
        Community Moments
      </p>
      <h2 v-reveal="100" class="font-display text-5xl tracking-wide text-white md:text-7xl">
        Every Journey <span class="text-gold-gradient">Creates A Story</span>
      </h2>
      <p v-reveal="200" class="text-silver mx-auto mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
        Highlight moments dari touring, gathering, dan kegiatan sosial komunitas. Setiap kilometer
        yang kami tempuh bersama menjadi bagian dari cerita besar PRIDE.
      </p>

      <blockquote v-reveal="300" class="relative mx-auto mt-16 max-w-3xl">
        <span class="text-gold/30 font-display absolute -top-10 left-1/2 -translate-x-1/2 text-8xl" aria-hidden="true">
          "
        </span>
        <p class="font-display text-3xl leading-snug tracking-[0.06em] text-white md:text-4xl">
          Bukan tentang seberapa cepat,<br class="hidden md:block" />
          tetapi tentang seberapa banyak cerita<br class="hidden md:block" />
          yang kita dapatkan dalam setiap perjalanan.
        </p>
        <footer class="mt-8 flex items-center justify-center gap-4">
          <span class="bg-gold/60 h-px w-10" />
          <span class="text-gold text-xs tracking-[0.4em] uppercase">PRIDE</span>
          <span class="bg-gold/60 h-px w-10" />
        </footer>
      </blockquote>
    </div>
  </section>
</template>
