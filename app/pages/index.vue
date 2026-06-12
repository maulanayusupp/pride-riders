<script setup lang="ts">
const SITE_URL = 'https://pridecommunity.id'

useSeoMeta({
  title: 'PRIDE Official Community | One Block, One Brotherhood',
  description:
    'PRIDE (Permata Riders Independent & Dedicated Enthusiast) — komunitas riders Permata Cimahi yang menjunjung persaudaraan, keselamatan, dan rasa hormat. Setiap perjalanan adalah cerita. More Than A Ride.',
})

// Structured data agar tampil lebih kaya di hasil pencarian.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'PRIDE — Permata Riders Independent & Dedicated Enthusiast',
            alternateName: 'PRIDE Community',
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo.png`,
            slogan: 'One Block, One Brotherhood',
            description:
              'Komunitas riders yang dibangun atas dasar persaudaraan, kebersamaan, rasa hormat, dan kecintaan terhadap perjalanan.',
            foundingLocation: {
              '@type': 'Place',
              name: 'Permata Cimahi, Jawa Barat, Indonesia',
            },
            knowsAbout: ['Touring', 'Safety Riding', 'Komunitas Motor', 'Brotherhood'],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'PRIDE Official Community',
            inLanguage: 'id-ID',
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <main>
    <SectionHero />
    <SectionAbout />
    <SectionValues />
    <SectionJourney />
    <SectionGallery />
    <SectionMoments />
    <SectionSafety />
    <SectionJoin />
    <TheFooter />
  </main>
</template>
