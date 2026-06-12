<script setup lang="ts">
const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Journey', to: '#journey' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Safety', to: '#safety' },
  { label: 'Contact', to: '#join' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]
</script>

<template>
  <footer class="bg-coal border-t border-white/5">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div class="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div class="flex flex-col items-center gap-4 md:flex-row md:items-center md:text-left">
          <NuxtImg
            src="/images/logo-192.png"
            alt="Logo PRIDE"
            width="72"
            height="72"
            format="webp"
            loading="lazy"
            class="h-18 w-18 drop-shadow-[0_0_16px_rgba(212,175,55,0.3)]"
          />
          <div class="text-center md:text-left">
            <p class="font-display text-gold-gradient text-4xl tracking-[0.25em]">PRIDE</p>
            <p class="text-silver mt-2 text-xs tracking-[0.3em] uppercase">
              One Block, One Brotherhood
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul class="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                class="hover:text-gold text-xs tracking-[0.2em] text-white/70 uppercase transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>

        <ul class="flex gap-6">
          <li v-for="social in socials" :key="social.label">
            <a
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="text-silver hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors"
            >
              {{ social.label }}
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-12 border-t border-white/5 pt-8 text-center">
        <p class="text-silver text-xs tracking-[0.15em]">
          © {{ new Date().getFullYear() }} PRIDE Community — All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
