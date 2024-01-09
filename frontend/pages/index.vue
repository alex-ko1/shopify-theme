<template>
  <div
      class="md:bg-[url('~/assets/bg-md.jpg')] bg-[url('@/assets/bg.jpg')] w-full bg-center -mt-16 h-screen bg-no-repeat bg-cover grid md:justify-center content-end text-center text-white text-xs uppercase p-5 relative"
  >
    SYMBIOSIS OF SENSUALITY AND POWER<br> EMBODIED IN EXQUISITE TAILORING<br><br>
    <div class="hidden md:block">
      <RouterLink
          to="/shop"
      >
        Show All
      </RouterLink>
    </div>

    <ItemCardMini />
  </div>
  <div class="md:hidden absolute top-0 left-0 right-0 h-1/2 flex items-end justify-center text-white uppercase">
    <RouterLink
        to="/shop"
    >
      Shop Now
    </RouterLink>
  </div>
  <div class="uppercase relative flex justify-center m-6 text-xs">
    <span class="">new arrivals</span>
    <span class="hidden md:block absolute right-1.5">view more</span>
  </div>
<!--  <ProductList :show-count="4" />-->
  <div class="flex flex-col max-w-lg ml-auto mr-auto products-center text-s">
    <div class=" uppercase mt-24 text-center font-medium">
      About blast out studio
    </div>
    <div class="mt-4 text-xs text-center">
      Discover our range of collections where each piece tells a story of elegance,
      power, and sustainability. Our collections are thoughtfully designed to encapsulate the essence of sensuality and
      strength, crafted with impeccable tailoring and a keen eye for detail. Bold, powerful, unapologetic. This
      collection features strong silhouettes, sharp lines, and an assertive aesthetic
    </div>
    <div class="grid gap-1 mt-12 grid-flow-col mx-4">
      <img
          class="object-fill h-full"
          alt=""
          src="@/assets/photolist1.jpg"
      >
      <img
          class="object-fill h-full"
          alt=""
          src="@/assets/photolist2.jpg"
      >
      <img
          class="object-fill h-full"
          alt=""
          src="@/assets/photolist3.jpg"
      >
      <img
          class="object-fill h-full"
          alt=""
          src="@/assets/photolist4.jpg"
      >
      <img
          class="object-fill h-full"
          alt=""
          src="@/assets/photolist5.jpg"
      >
    </div>
    <div class="flex uppercase font-medium text-xs mx-auto mt-10 gap-3">
      <RouterLink class="text-center" to="/pages/about-us">
        read more
      </RouterLink>
      <div class="text-center border-r-2" />
      <div class="text-center">
        instagram
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCardMini from '@/components/ItemCardMini.vue';
// import ProductList from '@/components/ProductList.vue';
</script>
