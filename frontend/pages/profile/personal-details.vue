<template>
  <div class="flex flex-col gap-y-14">
    <div class="flex flex-col gap-8">
      <div>account info</div>
      <AppInput
        class="ml-24"
        label="name"
        model-value=""
      />
      <div class="grid grid-cols-2 ml-24">
        <AppInput
          label="your email"
          model-value=""
        />
        <AppInput
          label="your phone"
          model-value=""
        />
      </div>
      <div class="font-medium underline ml-24">
        save
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <div>password settings</div>
      <AppInput
        class="ml-24"
        label="your password"
        type="password"
        model-value=""
      />
      <div class="font-medium underline ml-24">
        change password
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
</script>
