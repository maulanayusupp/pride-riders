<script setup lang="ts">
const props = defineProps<{
  target: number
  suffix?: string
  label: string
}>()

const el = ref<HTMLElement | null>(null)
const current = ref(0)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return
      observer.disconnect()

      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        current.value = Math.round(eased * props.target)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    { threshold: 0.4 },
  )
  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div ref="el" class="border-l border-white/10 pl-5">
    <p class="font-display text-gold-gradient text-5xl tracking-wider md:text-6xl">
      {{ current }}{{ suffix ?? '' }}
    </p>
    <p class="text-silver mt-1 text-xs tracking-[0.25em] uppercase">{{ label }}</p>
  </div>
</template>
