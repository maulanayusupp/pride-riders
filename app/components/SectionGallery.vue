<script setup lang="ts">
type Category = 'Touring' | 'Gathering' | 'Social Event' | 'Brotherhood'

interface GalleryItem {
  src: string
  title: string
  category: Category
}

const categories: Array<'All' | Category> = [
  'All',
  'Touring',
  'Gathering',
  'Social Event',
  'Brotherhood',
]

const items: GalleryItem[] = [
  { src: '/images/gallery/touring-1.svg', title: 'Sunrise Run ke Lembang', category: 'Touring' },
  { src: '/images/gallery/brotherhood-1.svg', title: 'Satu Blok, Satu Saudara', category: 'Brotherhood' },
  { src: '/images/gallery/gathering-1.svg', title: 'Kopdar Permata Cimahi', category: 'Gathering' },
  { src: '/images/gallery/touring-2.svg', title: 'Kabut Pagi Cikole', category: 'Touring' },
  { src: '/images/gallery/social-1.svg', title: 'Bakti Sosial Bersama Warga', category: 'Social Event' },
  { src: '/images/gallery/brotherhood-2.svg', title: 'Salam Sebelum Berangkat', category: 'Brotherhood' },
  { src: '/images/gallery/touring-3.svg', title: 'Lekukan Dago Antjagak', category: 'Touring' },
  { src: '/images/gallery/gathering-2.svg', title: 'Malam Keakraban', category: 'Gathering' },
  { src: '/images/gallery/social-2.svg', title: 'Berbagi di Hari Jumat', category: 'Social Event' },
  { src: '/images/gallery/touring-4.svg', title: 'Kebun Teh Ciater', category: 'Touring' },
  { src: '/images/gallery/brotherhood-3.svg', title: 'Formasi Rapat', category: 'Brotherhood' },
  { src: '/images/gallery/gathering-3.svg', title: 'Anniversary PRIDE', category: 'Gathering' },
]

const activeCategory = ref<'All' | Category>('All')
const filtered = computed(() =>
  activeCategory.value === 'All'
    ? items
    : items.filter((item) => item.category === activeCategory.value),
)

const preview = ref<GalleryItem | null>(null)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') preview.value = null
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section id="gallery" class="bg-coal relative py-28 md:py-36">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="mb-12 text-center">
        <p v-reveal class="text-gold mb-4 text-xs font-semibold tracking-[0.4em] uppercase">
          Gallery
        </p>
        <h2 v-reveal="100" class="font-display text-5xl tracking-wide text-white md:text-7xl">
          Stories From <span class="text-gold-gradient">The Road</span>
        </h2>
      </div>

      <!-- Category filter -->
      <div v-reveal class="mb-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category"
          class="px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
          :class="
            activeCategory === category
              ? 'bg-gold text-night'
              : 'border border-white/15 text-white/70 hover:border-gold/60 hover:text-gold'
          "
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Masonry grid -->
      <div class="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <button
          v-for="(item, i) in filtered"
          :key="item.src"
          v-reveal="(i % 3) * 100"
          class="zoom-frame group relative mb-5 block w-full break-inside-avoid border border-white/10 text-left"
          :aria-label="`Lihat ${item.title} dalam mode fullscreen`"
          @click="preview = item"
        >
          <img
            :src="item.src"
            :alt="item.title"
            loading="lazy"
            class="block w-full"
            width="640"
            :height="i % 3 === 0 ? 800 : i % 3 === 1 ? 480 : 640"
          />
          <div
            class="from-night/90 absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <p class="text-gold text-[10px] tracking-[0.3em] uppercase">{{ item.category }}</p>
            <p class="font-display mt-1 text-xl tracking-[0.1em] text-white">{{ item.title }}</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Fullscreen preview -->
    <Transition name="lightbox">
      <div
        v-if="preview"
        class="bg-night/95 fixed inset-0 z-[90] flex items-center justify-center p-6 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        :aria-label="preview.title"
        @click.self="preview = null"
      >
        <button
          class="hover:text-gold absolute top-6 right-6 text-3xl text-white transition-colors"
          aria-label="Tutup preview"
          @click="preview = null"
        >
          ✕
        </button>
        <figure class="max-h-full max-w-4xl">
          <img :src="preview.src" :alt="preview.title" class="max-h-[80vh] w-auto border border-white/10" />
          <figcaption class="mt-4 text-center">
            <p class="text-gold text-[10px] tracking-[0.3em] uppercase">{{ preview.category }}</p>
            <p class="font-display mt-1 text-2xl tracking-[0.1em] text-white">{{ preview.title }}</p>
          </figcaption>
        </figure>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.35s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
