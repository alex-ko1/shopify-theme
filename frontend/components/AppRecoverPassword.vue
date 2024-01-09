<template>
  <section>
    <div class="text-base pt-3 font-bold">
      Recover password
    </div>
    <div class="uppercase pb-3">
      If account “konstantin.konstantinopolky@gmail.com” exist, an email will be send with
      further instructions
    </div>
    <AppButton
      class="mb-auto"
      hoverable
      label="go to main"
      @click="hide"
    />
    <div class="uppercase mb-10">
      Remember your password? <span
        class="font-bold cursor-pointer"
        @click="showLogin"
      >Back to login</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import { hide, showLogin } from '@/helpers/rightSidebar';
</script>
