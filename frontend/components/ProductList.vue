<template>
  <div class="flex flex-wrap font-medium text-xs gap-x-2 md:gap-x-1 gap-y-8 h-31 w-[375px] md:w-auto md:max-w-[1440px] mx-auto px-2 md:px-0">
    <ProductItem
      v-for="item in products"
      :key="item.id"
      :data="item"
    />
  </div>
</template>

<script setup lang="ts">
import useProducts from '@/composables/products';
import ProductItem from '@/components/ProductItem.vue';

const props = defineProps({
  showCount: {
    type: Number,
    default: 250,
  },
});

const { products } = await useProducts(props.showCount);
</script>
