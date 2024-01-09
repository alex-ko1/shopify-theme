<template>
  <div class="cursor-pointer relative group w-[175.5px] md:w-auto overflow-hidden md:uppercase">
    <RouterLink :to="`/shop/${data.id}`">
      <img
        :src="data.image"
        alt=""
        class="rounded-sm md:w-[356px] md:h-[475px] w-[175.5px] bg-[#F7F7F7]"
      >
    </RouterLink>
    <RouterLink :to="`/shop/${data.id}`">
      <div class="text-center md:text-left pt-2">
        {{ data.name }}
      </div>
    </RouterLink>
    <RouterLink
      :to="`/shop/${data.id}`"
    >
      <div class="text-center font-normal md:text-left">
        {{ data.price }}
      </div>
    </RouterLink>
    <div class="absolute w-full top-0 md:hidden group-hover:block text-white">
      <div class="flex-col gap-1 items-center absolute top-2 left-2 hidden md:flex">
        <RouterLink
          v-for="elem in data.availableColors"
          :key="elem.label"
          :to="`/shop/${data.id}?color=${elem.value}`"
          :class="elem.classes"
          :title="elem.label"
          class="rounded-full w-3 h-3 cursor-pointer"
        />
      </div>
      <div class="flex gap-1 items-center absolute top-2 right-2">
        <div
          v-if="isProductFavorited(data)"
          @click="unfavoriteProduct(data)"
        >
          <span class="hidden md:inline">Remove from wishlist</span>
        </div>
        <div
          v-else
          @click="favoriteProduct(data)"
        >
          <span class="hidden md:inline">Add to wishlist</span>
        </div>
        <img
          v-if="isProductFavorited(data)"
          alt=""
          data-test="heart-black"
          src="@/assets/icons/heart-black.svg"
        >
        <img
          v-else
          data-test="heart-white"
          alt=""
          src="@/assets/icons/heart-white.svg"
        >
      </div>
      <div
        class="absolute top-[437px] w-full text-center"
        @click="addProduct(data)"
      >
        Add to bag
      </div>
    </div>
    <div
      class="md:hidden w-full uppercase  text-center"
      @click="addProduct(data)"
    >
      shop now
    </div>
  </div>
</template>

<script setup lang="ts">
import useProducts, { type Product } from '@/composables/products';
import useCart from '@/composables/cart';
import type { PropType } from "vue";

const { favoriteProduct, unfavoriteProduct, isProductFavorited } = await useProducts();
const { addProduct } = useCart();

defineProps({
  data: {
    type: Object as PropType<Product>,
    required: true,
  },
});

</script>
