<template>
  <div>
    <div class="text-center text-xs uppercase mt-20">
      Bold, powerful, unapologetic
    </div>
    <div class="text-center mb-28 text-bold uppercase">
      Collections
    </div>
    <div class="grid grid-cols-[3fr_1fr]">
      <div class="grid grid-cols-[1fr_2fr] items-center">
        <template
          v-for="collection in collections"
          :key="collection.id"
        >
          <div class="text-center">
            {{ collection.name }}
          </div>
          <img
            class="w-full"
            :src="collection.image"
            alt=""
          >
        </template>
      </div>
      <div>
        <div class="fixed bottom-3 right-8">
          <img
            v-for="collection in collections"
            :key="collection.id"
            :src="collection.image"
            class="w-[78px] h-[94px] cursor-pointer"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {collections} from '@/helpers/collections'
</script>
