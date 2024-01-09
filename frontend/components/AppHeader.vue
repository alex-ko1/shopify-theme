<template>
  <transition name="slide-left">
    <OpenedMenu
        v-if="clickedMenu"
        :model-value="clickedMenu"
        @update:model-value="(v) => clickedMenu = v"
    />
  </transition>
  <SearchModal
      v-if="clickedSearch"
      v-model="clickedSearch"
  />
  <ProductList
      v-if="clickedShop"
      v-model="clickedShop"
  />
  <header
      :class="{
      'text-white': whiteHeader,
      'text-black': !whiteHeader,
    }"
      class="md:grid md:grid-cols-3 flex pt-3 md:pt-6 px-6 md:px-10 h-11 md:h-16 items-center md:items-stretch justify-between gap-1 relative tracking-tighter z-10"
  >
    <!-- Left -->
    <div class="flex md:gap-8 w-11 md:w-auto md:text-xs uppercase">
      <img
          v-if="whiteHeader"
          alt="Toggle menu"
          class="md:w-5 w-7 self-start mt-1 cursor-pointer"
          src="@/assets/icons/menu-closed.svg"
          @click="clickedMenu=!clickedMenu"
      >
      <img
          v-else
          alt="Toggle menu"
          class="md:w-5 w-7 self-start mt-1 cursor-pointer"
          src="@/assets/icons/black-menu-closed.svg"
          @click="clickedMenu=!clickedMenu"
      >
      <RouterLink
          v-for="(link,i) in data"
          :key="i"
          :to="link.url"
      >
        <div class="hidden md:block">
          {{ link.title }}
        </div>
      </RouterLink>
    </div>

    <!-- Center -->
    <a
        class="flex"
        href="/"
        title=""
    >
      <img
          v-if="whiteHeader"
          class="w-52 md:w-auto"
          alt="Blast Out Logo"
          src="@/assets/icons/logo-top.svg"
      >
      <img
          v-else
          class="w-52 md:w-auto"
          alt="Blast Out Logo"
          src="@/assets/icons/black-top-logo.svg"
      >
    </a>

    <!-- Right -->
    <div class="flex gap-6 text-xs uppercase justify-end">
      <div
          class="hidden md:block cursor-pointer"
          @click="clickedSearch=!clickedSearch"
      >
        Search
      </div>
      <LangSelector class="hidden md:block" />
      <div
          class="cursor-pointer text-[13px] md:text-xs text-nowrap"
          @click="showCart"
      >
        <span class="hidden md:inline">
          Shopping
        </span> bag ({{ qty }})
      </div>
      <div
          class="hidden md:block cursor-pointer"
          @click="showLogin"
      >
        Log in
      </div>
      <transition name="slide-right">
        <RightSidebar v-if="isShown()" />
      </transition>
    </div>
  </header>
</template>
<script setup lang="ts">
import OpenedMenu from "@/components/OpenedMenu.vue";
import SearchModal from "@/components/SearchModal.vue";
import LangSelector from "@/components/LangSelector.vue";
import {computed, ref} from 'vue'
// import useCart from "@/composables/cart";
// import RightSidebar from "@/components/RightSidebar.vue";
import {useRoute} from "vue-router";
import {isShown, showCart, showLogin} from "@/helpers/rightSidebar";
import useMenu from "@/composables/menu";

const clickedMenu = ref(false)
const clickedSearch = ref(false)
const clickedShop = ref(false)

// const {qty} = useCart()
const qty = window.cartCount
const route = useRoute();
const data = useMenu("header-menu");
const whiteHeader = computed(() => route.name === 'index');
</script>
