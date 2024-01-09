<template>
  <div class="max-w-[1440px] mx-auto uppercase">
    <div class="text-base font-medium pt-28">
      All items <sup>12</sup>
    </div>
    <div class="flex justify-between pt-20 pb-6">
      <AppDropdown
        :model-value="options[2].value"
        :options="options"
        label="Sort by:"
      />
      <div
        v-if="'expand'"
        class="flex gap-1 cursor-pointer text-xs"
      >
        <div @click="showFilters">
          Filters
        </div>
        <div>+</div>
      </div>
    </div>
  </div>
  <ProductList />

<!--  <div-->
<!--    class="text-xs cursor-pointer uppercase text-center mt-12 mb-28"-->
<!--    @click="loadMoreProducts(4)"-->
<!--  >-->
<!--    show more-->
<!--  </div>-->
</template>

<script setup lang="ts">
import ProductList from '@/components/ProductList.vue';
import AppDropdown from '@/components/AppDropdown.vue';
import {showFilters} from "@/helpers/rightSidebar";

const options = [
  {
    label: 'price: high to low',
    value: 'price_high_to_low',
  },
  {
    label: 'price: low to high',
    value: 'price_low_to_high',
  },
  {
    label: 'alphabetically',
    value: 'alphabetically',
  },
  {
    label: 'featured',
    value: 'featured',
  },
];
</script>
