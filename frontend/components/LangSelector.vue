<template>
  <div class="cursor-pointer group relative">
    US/$
    <div
      class="bg-white opacity-0 group-hover:opacity-100 transition-all group-hover:pointer-events-auto pointer-events-none absolute text-black p-4 rounded flex mb-8 flex-col gap-3 mt-1.5 -ml-4 w-[3.625rem]"
    >
      <div
        v-for="(lang,i) in locales"
        :key="i"
        class="flex gap-3"
      >
        {{ lang.isoCode }}
        <img
          v-if="i === 0"
          alt=""
          src="@/assets/icons/tick.svg"
        >
      </div>
      <div class="border-b-2 row-span-3" />
      <div
        v-for="(currency,i) in currencies"
        :key="i"
        class="flex gap-3 ml-1"
      >
        {{ currency.symbol }}
        <img
          v-if="i === 0"
          alt=""
          src="@/assets/icons/tick.svg"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import useShop from "@/composables/shopInformation";

// const {isoCodes, currencies} = await useShop()
const currencies = window.currencies;
const locales = window.locales;
</script>
