<template>
  <section>
    <div class="text-base pt-3 font-bold">
      log in
    </div>
    <AppInput
      label="email"
      model-value=""
    />
    <AppInput
      label="password"
      type="password"
      model-value=""
    />
    <div class="flex justify-between">
      <AppCheckbox label="remember me" />
      <div
        class="cursor-pointer uppercase text-xs"
        @click="showForgotPassword"
      >
        <div class="my-2">
          forgot your password?
        </div>
      </div>
    </div>
    <AppButton
      hoverable
      label="log in"
      @click="login"
    />
    <AppDivider label="or" />
    <div class="grid grid-cols-2 mb-auto gap-3">
      <AppButton
        :image="fbImage"
        label="facebook"
      />
      <AppButton
        :image="gImage"
        label="google"
      />
    </div>
    <div class="uppercase  mb-10">
      If you still don`t have a Blastout <br> studio account,
      <span
        class="font-bold cursor-pointer"
        @click="showSignUp"
      >Sign up!</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import fbImage from '@/assets/icons/fb.svg';
import gImage from '@/assets/icons/google.svg';
import AppInput from '@/components/AppInput.vue';
import AppDivider from '@/components/AppDivider.vue';
import AppButton from '@/components/AppButton.vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import { hide, showForgotPassword, showSignUp } from '@/helpers/rightSidebar';

async function login() {
  hide();
  await navigateTo('/profile/orders');
}
</script>
