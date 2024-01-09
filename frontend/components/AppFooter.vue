<template>
  <footer class="pt-8 md:w-[1440px] w-[375px] mx-auto">
    <div class=" flex flex-wrap md:gap-x-40 gap-x-16 ml-8 mt-10 uppercase text-xs mb-2">
      <div class="flex-col w-full pr-4 mb-10 md:w-[511px]">
        <div class="leading-3 font-medium">
          Get 10% off your next purchase <br> Subscribe to our newsletter
        </div>
        <div class="mt-6 relative">
          <span class="absolute right-0 mt-4 font-medium">SUBSCRIBE</span>
          <input
            class="h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="YOUR E-MAIL ADDRESS"
          >
        </div>
      </div>
      <div class="flex-col mb-5">
        <div class="font-medium">
          PRODUCTS
        </div>
        <div class="flex mt-6 flex-col gap-1.5">
          <div>COLLECTIONS</div>
          <div>SHOP</div>
          <div>NEW ARRIVALS</div>
        </div>
      </div>
      <div class="flex-col mb-5">
        <div class="font-medium">
          INFO
        </div>
        <div class="flex mt-6 flex-col gap-1.5">
          <div>SHIPPING & RETURNS</div>
          <div>TRACK ORDER</div>
          <div>ABOUT US</div>
          <div>CONTACTS</div>
        </div>
      </div>
      <div class="flex-col mb-5">
        <div class="font-medium">
          SOCIAL NETWORKS
        </div>
        <div class="mt-6 font-medium">
          INSTAGRAM
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-y-3 p-6 mt-4">
      <img
        alt="Toggle menu"
        class=""
        src="@/assets/icons/black-logo.png"
      >
      <div class="text-xxs uppercase">
        © 2018-2023 Blastoutstudio. All rights reserved
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
