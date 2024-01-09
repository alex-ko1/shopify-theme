<template>
  <div class="grid grid-cols-2 h-screen w-[1440px] mx-auto uppercase text-xs relative -mt-16 pt-20">
    <div ref="root">
      <div
        ref="scrollContainer"
        class="absolute top-0 w-1/2 left-0 h-screen overflow-y-scroll"
      >
        <img
          v-for="(image, index) in currentProduct.images"
          :id="`image-${index}`"
          :key="image.id"
          v-intersection-observer="[onIntersectionObserver, { root, threshold: 0.8 }]"
          class="w-full"
          :src="image.src"
          :alt="`Product Image ${image.id}`"
        >
      </div>
    </div>

    <div
      class="flex flex-col pl-8 mt-20 mb-8 content-between"
      @wheel="onWheel"
    >
      <div class="wrapper-2 grid grid-cols-2 items-end">
        <div class="flex flex-col justify-between">
          <div>Style {{ currentProduct.id }}</div>
          <div class="font-medium text-base">
            {{ currentProduct.name }}
          </div>
        </div>

        <div class="text-base font-medium">
          {{ currentProduct.price }} uah
        </div>
      </div>

      <div class="flex flex-1">
        <div class="flex justify-end flex-1 flex-col">
          <img
            v-for="(image, index) in currentProduct.images"
            :key="image.id"
            :src="image.src"
            class="w-[78px] h-[94px] cursor-pointer transition-all duration-300"
            :class="{
              'ring ring-black ring-inset p-0.5': selectedIndex === index,
            }"
            :alt="`Product Image ${image.id}`"
            @click="selectImage(index)"
          >
        </div>

        <div class="flex-[2] flex flex-col pr-6">
          <div class="mt-5">
            <div>information</div>
            <div class="ml-24">
              <div class="mt-3">
                <div>collection:</div>
                <div class="font-medium">
                  kjkjrbvkjvv
                </div>
              </div>
              <div class="mt-3">
                <div>color:</div>
                <div class="font-medium">
                  black
                </div>
              </div>
              <div class="mt-3">
                <div>materials:</div>
                <div class="font-medium">
                  4444
                </div>
              </div>
            </div>
          </div>

          <SizeSelector :sizes="currentProduct.availableSizes" />

          <div class="ml-24 flex mt-auto flex-col gap-3">
            <div class="flex justify-between">
              <div class="flex gap-1 items-center cursor-pointer">
                <div @click="showSizeguide">
                  Size guide
                </div>
                <img
                  alt=""
                  src="@/assets/icons/resize.svg"
                >
              </div>
              <div class="flex gap-1 items-center cursor-pointer">
                <div
                  v-if="isProductFavorited(currentProduct)"
                  @click="unfavoriteProduct(currentProduct)"
                >
                  Remove from
                  wishlist
                </div>
                <div
                  v-else
                  @click="favoriteProduct(currentProduct)"
                >
                  Add to wishlist
                </div>
                <img
                  v-if="isProductFavorited(currentProduct)"
                  class="w-3 h-3"
                  alt=""
                  src="@/assets/icons/heart-black.svg"
                  @click="unfavoriteProduct(currentProduct)"
                >
                <img
                  v-else
                  class="w-3 h-3"
                  alt=""
                  src="@/assets/icons/heart-white.svg"
                  @click="favoriteProduct(currentProduct)"
                >
              </div>
            </div>

            <AppButton
              hoverable
              label="add to bag"
              @click="addProduct(currentProduct)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import {vIntersectionObserver} from '@vueuse/components'
import useProducts from '@/composables/products';
import AppButton from '@/components/AppButton.vue';
import useCart from '@/composables/cart';
import {showSizeguide} from '@/helpers/rightSidebar';
import {ref} from "vue";
import SizeSelector from "@/components/SizeSelector.vue";

const {addProduct} = useCart();
const {favoriteProduct, unfavoriteProduct, isProductFavorited} = await useProducts();

const {products} = await useProducts();
const router = useRouter();
const productId = router.currentRoute.value.params.id;
const currentProduct = products.value.find((item) => item.id === productId);
const selectedIndex = ref(0);
const root = ref<HTMLDivElement | null>(null);
const scrollContainer = ref<HTMLDivElement | null>(null);

function onIntersectionObserver([entry]: IntersectionObserverEntry[]) {
  if (entry.isIntersecting) {
    selectedIndex.value = Number(entry.target.id.split('-')[1]);
  }
}

function selectImage(index: number) {
  selectedIndex.value = index;

  if (!root.value) return;

  // Scroll to the selected image
  const image = root.value.querySelector(`#image-${index}`) as HTMLImageElement;

  image.scrollIntoView({behavior: 'smooth'});
}

function onWheel(e: WheelEvent) {
  if (!scrollContainer.value) return;

  // Scroll the container
  scrollContainer.value.scrollTop += e.deltaY;
}

</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
