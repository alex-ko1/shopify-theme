<template>
  <div class="w-full h-screen uppercase top-0 right-0 absolute">
    <div
      class=" overflow-hidden absolute w-full h-full blur-sm bg-black opacity-50 z-20 top-0 right-0"
      @click="hide"
    />
    <div
      class="bg-white h-full overflow-y-auto w-[456px] right-0 z-30 absolute top-0 flex pr-10 flex-col justify-between"
    >
      <div class="cursor-pointer z-40 absolute right-0 pr-6 pt-4">
        <img
          alt=""
          class="w-4 h-4 "
          src="@/assets/icons/cross.png"
          @click="hide"
        >
      </div>
      <AppLogin v-if="isLogin()" />

      <AppSignup v-else-if="isSignUp()" />

      <AppForgotPassword
        v-else-if="isForgotPassword()"
        model-value=""
      />

      <AppRecoverPassword v-else-if="isRecoverPassword()" />

      <ShoppingCart v-else-if="isShoppingCart()" />

      <AppFilters v-else-if="isFilters()" />
      <AppSizeguide v-else-if="isSizeguide()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import AppLogin from '@/components/AppLogin.vue';
import AppSignup from '@/components/AppSignup.vue';
import AppForgotPassword from '@/components/AppForgotPassword.vue';
import AppRecoverPassword from '@/components/AppRecoverPassword.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import AppFilters from '@/components/AppFilters.vue';
import {
  hide,
  isSizeguide,
  isFilters,
  isForgotPassword,
  isLogin,
  isRecoverPassword,
  isShoppingCart,
  isSignUp,
} from '@/helpers/rightSidebar';

onMounted(() => {
  document.body.classList.add('overflow-hidden');
});
onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});

</script>
