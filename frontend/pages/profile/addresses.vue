<template>
  <div class="flex flex-col gap-8">
    <div>my address</div>
    <div class="grid grid-cols-2 ml-24">
      <AppInput
        label="country"
        model-value=""
      />
      <AppInput
        label="state"
        model-value=""
      />
    </div>
    <div class="grid grid-cols-2 ml-24">
      <AppInput
        label="city"
        model-value=""
      />
      <AppInput
        label="zip"
        model-value=""
      />
    </div>
    <div class="grid grid-cols-2 ml-24">
      <AppInput
        label="address"
        model-value=""
      />
      <AppInput
        label="postal number"
        model-value=""
      />
    </div>
    <div class="font-medium underline ml-24">
      save
    </div>
  </div>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue';
</script>
