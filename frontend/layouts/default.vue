<template>
  <div>
    <AppHeader />
    <div>
      <slot />
    </div>
    <AppFooter v-if="!hideFooterPages.includes($route.name)" />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

const hideFooterPages = [
  'orders',
  'wishlist',
  'addresses',
  'personal-details',
  'shop-id',
  'tos',
  'contacts'
];

useSeoMeta({
  title: 'Blastout',
  description: 'This is a blastout ecommerce site',
  ogTitle: 'Blastout',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
});
</script>
