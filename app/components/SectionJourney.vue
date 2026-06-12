<script setup lang="ts">
const stops = [
  { name: 'Permata Cimahi', note: 'Titik kumpul — perjalanan dimulai dari satu blok yang sama.' },
  { name: 'Tugu Nanas', note: 'Landmark pertama, formasi rapat mulai terbentuk.' },
  { name: 'Dago Antjagak', note: 'Menanjak menyusuri lekukan Dago pagi hari.' },
  { name: 'Mata Air Cimincrang', note: 'Berhenti sejenak, udara dingin dan air pegunungan.' },
  { name: "D'Castello", note: 'Taman bunga di kaki gunung — momen foto bersama.' },
  { name: 'Ciater', note: 'Hamparan kebun teh membentang di kiri dan kanan jalan.' },
  { name: 'Curug Cibareubeuy', note: 'Trek menuju air terjun, menguji kekompakan rombongan.' },
  { name: 'Tangkuban Perahu', note: 'Kawah legendaris di ketinggian — puncak perjalanan.' },
  { name: 'Orchid Forest', note: 'Hutan pinus dan anggrek, jeda di tengah rimbun.' },
  { name: 'Grafika Cikole', note: 'Kopi hangat dan cerita di antara kabut Cikole.' },
  { name: 'Cisarua', note: 'Jalur pulang menurun, formasi tetap terjaga.' },
  { name: 'Lembang', note: 'Garis akhir — satu cerita baru untuk brotherhood.' },
]

const sectionEl = ref<HTMLElement | null>(null)
const progress = ref(0)
let raf = 0

function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const el = sectionEl.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const viewport = window.innerHeight
    const total = rect.height - viewport * 0.4
    const passed = viewport * 0.6 - rect.top
    progress.value = Math.min(Math.max(passed / total, 0), 1)
  })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <section id="journey" class="bg-night relative overflow-hidden py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="mb-20 text-center">
        <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
          Signature Journey
        </p>
        <h2 v-reveal="100" class="font-display text-5xl tracking-wide text-white md:text-7xl">
          Journey Beyond <span class="text-gold-gradient">Destination</span>
        </h2>
        <p v-reveal="200" class="text-silver mt-6 text-sm tracking-[0.3em] uppercase">
          Featured Route — Permata Cimahi → Lembang
        </p>
      </div>

      <!-- Route map overview -->
      <div v-reveal class="relative mx-auto mb-24 max-w-4xl border border-white/10 bg-coal/60 p-6 md:p-10">
        <svg class="w-full" viewBox="0 0 800 260" aria-hidden="true">
          <path
            id="route"
            d="M40 220 C140 200 120 120 220 130 C320 140 300 60 420 80 C540 100 520 190 620 170 C700 154 720 90 760 60"
            fill="none"
            stroke="#d4af37"
            stroke-width="2.5"
            stroke-dasharray="1200"
            :stroke-dashoffset="1200 - progress * 1200"
            stroke-linecap="round"
            style="transition: stroke-dashoffset 0.15s linear"
          />
          <path
            d="M40 220 C140 200 120 120 220 130 C320 140 300 60 420 80 C540 100 520 190 620 170 C700 154 720 90 760 60"
            fill="none"
            stroke="#ffffff"
            stroke-opacity="0.08"
            stroke-width="2.5"
            stroke-dasharray="6 10"
          />
          <circle cx="40" cy="220" r="7" fill="#d4af37" />
          <circle cx="760" cy="60" r="7" fill="#c1121f" />
          <text x="40" y="250" fill="#9ca3af" font-size="13" letter-spacing="2">PERMATA CIMAHI</text>
          <text x="660" y="38" fill="#9ca3af" font-size="13" letter-spacing="2">LEMBANG</text>
        </svg>
        <p class="text-silver mt-4 text-center text-xs tracking-[0.3em] uppercase">
          Rute terukir mengikuti perjalanan scroll Anda
        </p>
      </div>

      <!-- Scroll-driven timeline -->
      <div ref="sectionEl" class="relative mx-auto max-w-3xl">
        <!-- Track -->
        <div class="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2">
          <div
            class="from-gold to-blood absolute top-0 left-0 w-full bg-gradient-to-b"
            :style="{ height: `${progress * 100}%` }"
          />
        </div>

        <ol class="space-y-14">
          <li
            v-for="(stop, i) in stops"
            :key="stop.name"
            v-reveal="80"
            class="relative pl-14 md:w-1/2 md:pl-0"
            :class="i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'"
          >
            <span
              class="absolute top-1 left-4 h-3 w-3 -translate-x-1/2 rotate-45 border transition-colors duration-500"
              :class="[
                progress >= (i + 0.5) / stops.length ? 'bg-gold border-gold' : 'bg-night border-white/30',
                i % 2 === 0 ? 'md:left-auto md:-right-1.5 md:translate-x-0' : 'md:-left-1.5 md:translate-x-0',
              ]"
            />
            <p class="text-gold font-mono text-xs tracking-[0.3em]">
              {{ String(i + 1).padStart(2, '0') }}
            </p>
            <h3 class="font-display mt-1 text-2xl tracking-[0.12em] text-white md:text-3xl">
              {{ stop.name }}
            </h3>
            <p class="text-silver mt-2 text-sm leading-relaxed">{{ stop.note }}</p>
          </li>
        </ol>
      </div>

      <p v-reveal class="text-silver mx-auto mt-24 max-w-2xl text-center text-base leading-relaxed italic md:text-lg">
        Setiap tikungan punya cerita, setiap perhentian punya makna. Dari Permata Cimahi hingga
        Lembang — kami berangkat sebagai rombongan, pulang sebagai saudara.
      </p>
    </div>
  </section>
</template>
