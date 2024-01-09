<template>
  <div class="w-full h-full uppercase absolute">
    <div
      class=" overflow-hidden absolute w-full h-full blur-sm bg-black opacity-50 z-20 top-0 left-0"
      @click="state=!state"
    />
    <div class="bg-white h-full w-[456px] z-30 absolute top-0 flex pl-10 justify-between flex-col">
      <div>
        <div class=" mt-6 cursor-pointer">
          <img
            alt=""
            src="@/assets/icons/cross.png"
            @click="state=!state"
          >
        </div>
        <div class=" mt-8 font-medium flex flex-col gap-4">
          <template
            v-for="(link,i) in sideMenu1.menu.items"
            :key="i"
          >
            <RouterLink
              v-if="!link.items.length"
              :to="'/'+link.url.split('/').splice(3).join('/')"
              class="cursor-pointer"
            >
              {{ link.title }}
            </RouterLink>
            <AppExpand
              v-else
              :label="link.title"
              :options="link.items"
            />
          </template>
        </div>
        <div class="flex flex-col gap-4 mt-7">
          <RouterLink
            v-for="(link,i) in sideMenu2.menu.items"
            :key="i"
            :to="'/'+link.url.split('/').splice(3).join('/')"
          >
            {{ link.title }}
          </RouterLink>
        </div>
      </div>
      <div class=" grid mb-8 grid-cols-3 gap-3 grid-rows-1 w-24">
        <div class="flex flex-col gap-3">
          <div
            v-for="(lang,i) in isoCodes"
            :key="i"
            class="flex gap-3 cursor-pointer"
          >
            {{ lang }}
            <img
              v-if="i === 0"
              alt=""
              src="@/assets/icons/tick.svg"
            >
          </div>
        </div>
        <div class=" border-r-2 row-span-2" />
        <div class="flex flex-col-reverse gap-3">
          <div
            v-for="(currency,i) in currencies"
            :key="i"
            class="flex gap-3 ml-1 cursor-pointer"
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
    </div>
  </div>
</template>
<script setup lang="ts">
import useMenu from "@/composables/menu";
import AppExpand from "@/components/AppExpand.vue";
import {ref,watch} from "vue"
// import useShop from "@/composables/shopInformation";
import { useMagicKeys } from '@vueuse/core'

const { escape } = useMagicKeys()

watch(escape, (v) => {
  if (v){
    state.value = !state.value
  }
})
// const {isoCodes, currencies} = await useShop()
const isoCodes= ['UA','EN'];
const currencies = ['$','€']

const sideMenu1 = await useMenu('side-menu-1')
const sideMenu2 = await useMenu('side-menu-2')


const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})
const emits = defineEmits(['update:model-value'])
const state = ref(props.modelValue)
watch(state, () => {
  emits('update:model-value', state.value)
})
</script>
