<template>
  <div class="mx-auto w-[1440px] h-[calc(100vh-120px)]">
    <div class="text-7xl mt-16 w-[692px] text-left">
      6 Olhynska Street, Kyiv, 01001
    </div>
    <div class="flex flex-col flex-wrap gap-96">
      <div class="flex mt-14 ">
        <div class=" mt-14">
          <div class="uppercase font-medium text-xs">
            hello@blastoutstudio.com <br> +38 093 198 19 88
          </div>
        </div>
        <div class="uppercase text-xs w-96 ml-10 font-medium mt-14">
          opening hours:<br>10:00-22:00
        </div>
        <div class="ml-96 mt-14">
          <div>
            Discover our range of collections where each piece tells a story of elegance, power, and sustainability. Our collections are thoughtfully designed to encapsulate the essence of sensuality and strength, crafted with impeccable tailoring and a keen eye for detail. Bold, powerful, unapologetic. This collection features strong silhouettes, sharp lines, and an assertive aesthetic.
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="mt-auto uppercase text-xs font-medium">
          Instagram: <br> @blastoutstudio
        </div>
        <div class=" flex mt-auto gap-1">
          <img
            v-for="image in images"
            :key="image.id"
            :src="image.image"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {faker} from "@faker-js/faker";

const images  = ref(Array.from({length: 7}).map(() => {
  return {
    id: faker.database.mongodbObjectId(),
    image: faker.image.imageUrl(98, 82, 'cat', true),
  }
}));

</script>
