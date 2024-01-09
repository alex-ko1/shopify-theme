<template>
  <div class="absolute top-0 pt-36 w-1/2 right-0 h-screen overflow-y-scroll">
    <div class="flex gap-3 flex-wrap">
      <ProductItem
        v-for="item in favorites"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composables/products';

const { favorites } = await useProducts();

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
