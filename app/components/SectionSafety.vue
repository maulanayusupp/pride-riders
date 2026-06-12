<script setup lang="ts">
const checklist = [
  { label: 'Helm Full Face', note: 'Pelindung utama, tanpa kompromi.' },
  { label: 'Riding Jacket', note: 'Perlindungan tubuh di segala cuaca.' },
  { label: 'Gloves', note: 'Genggaman aman sepanjang perjalanan.' },
  { label: 'Motor Check', note: 'Rem, ban, lampu, dan oli sebelum berangkat.' },
  { label: 'Full Tank', note: 'Tangki penuh, perjalanan tanpa khawatir.' },
  { label: 'Surat Kendaraan Lengkap', note: 'SIM dan STNK selalu dibawa.' },
]
</script>

<template>
  <section id="safety" class="bg-coal relative py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
            Safety First
          </p>
          <h2 v-reveal="100" class="font-display text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
            Ride Safe,<br />
            <span class="text-gold-gradient">Ride Together</span>
          </h2>
          <p v-reveal="200" class="text-silver mt-8 max-w-md text-base leading-relaxed">
            Keselamatan bukan pilihan — itu standar. Setiap anggota PRIDE wajib memenuhi checklist
            ini sebelum roda mulai berputar.
          </p>

          <div v-reveal="300" class="border-blood/40 bg-blood/10 mt-10 inline-flex items-center gap-4 border px-6 py-4">
            <svg class="text-blood h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2 4 5.5v5.1c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9V5.5L12 2Z" />
            </svg>
            <p class="text-sm leading-snug font-semibold tracking-wide text-white uppercase">
              No Gear, No Ride.<br />
              <span class="text-silver font-normal normal-case">Aturan pertama setiap perjalanan PRIDE.</span>
            </p>
          </div>
        </div>

        <ul class="grid gap-4 sm:grid-cols-2">
          <li
            v-for="(item, i) in checklist"
            :key="item.label"
            v-reveal="i * 100"
            class="glow-card bg-night/60 group flex items-start gap-4 border border-white/10 p-6"
          >
            <span
              class="border-gold/50 text-gold group-hover:bg-gold group-hover:text-night mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-500"
              aria-hidden="true"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div>
              <h3 class="font-display text-xl tracking-[0.1em] text-white">{{ item.label }}</h3>
              <p class="text-silver mt-1 text-xs leading-relaxed">{{ item.note }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
