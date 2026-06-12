<template>
  <section id="join" class="bg-night relative overflow-hidden py-28 md:py-40">
    <!-- Glow backdrop -->
    <div
      class="absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_65%)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
      <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
        Join The Brotherhood
      </p>
      <h2 v-reveal="100" class="font-display text-5xl tracking-wide text-white md:text-8xl">
        Become Part Of <span class="text-gold-gradient">The Journey</span>
      </h2>
      <p v-reveal="200" class="text-silver mx-auto mt-8 max-w-xl text-base leading-relaxed md:text-lg">
        Terbuka bagi siapa saja yang menjunjung tinggi persaudaraan, keselamatan, dan rasa hormat.
      </p>

      <div v-reveal="300" class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://wa.me/6200000000000"
          target="_blank"
          rel="noopener"
          class="bg-gold text-night hover:bg-gold/90 w-64 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_-10px_#d4af37] sm:w-auto"
        >
          Join Community
        </a>
        <a
          href="mailto:hello@pridecommunity.id"
          class="hover:border-gold hover:text-gold w-64 border border-white/30 px-8 py-4 text-sm font-bold tracking-[0.25em] text-white uppercase transition-colors duration-300 sm:w-auto"
        >
          Contact Us
        </a>
      </div>

      <div v-reveal="400" class="mt-10 flex items-center justify-center gap-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          class="text-silver hover:text-gold flex items-center gap-2 text-xs tracking-[0.25em] uppercase transition-colors"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 2.2c3.2 0 3.6 0 4.9.07 3.2.15 4.7 1.7 4.85 4.85.06 1.27.07 1.65.07 4.88s-.01 3.6-.07 4.88c-.15 3.1-1.6 4.7-4.85 4.85-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-3.2-.15-4.7-1.75-4.85-4.85C2.2 15.6 2.2 15.2 2.2 12s0-3.6.06-4.88C2.4 4 3.9 2.4 7.1 2.27 8.4 2.2 8.8 2.2 12 2.2Zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4Zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Zm5.4-8.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
            />
          </svg>
          Instagram
        </a>
        <a
          href="https://wa.me/6200000000000"
          target="_blank"
          rel="noopener"
          class="text-silver hover:text-gold flex items-center gap-2 text-xs tracking-[0.25em] uppercase transition-colors"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm5.1 13.6c-.2.6-1.2 1.2-1.7 1.2-.5.07-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.55-2.6-1.1-4.3-3.8-4.4-4-.13-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.27.5-.33.7-.33h.5c.16 0 .37-.06.58.45.2.5.7 1.8.77 1.93.06.13.1.3.02.46-.4.9-.9.86-.66 1.27.9 1.5 1.8 2.1 3.1 2.75.23.1.36.1.5-.06.13-.16.56-.66.7-.9.16-.2.3-.18.5-.1.2.06 1.3.6 1.5.73.23.1.37.17.43.27.06.1.06.6-.13 1.2Z"
            />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
