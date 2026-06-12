export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    // Stub so SSR knows the directive exists; the real work happens client-side.
    nuxtApp.vueApp.directive('reveal', { getSSRProps: () => ({}) })
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      if (typeof binding.value === 'number') {
        el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      }
      observer.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer.unobserve(el)
    },
  })
})
