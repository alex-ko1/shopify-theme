<template>
  <div class="flex items-center relative">
    <div
      :class="{
        'border-dashed': dashed,
        [classes]: true,
      }"
      class="border-t h-px w-full"
    />
    <div
      v-if="label"
      class="flex absolute justify-center items-center w-full"
    >
      <div class="p-4 uppercase bg-white">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  classes: {
    type: String,
    required: false,
    default: 'border-gray-500',
  },
  dashed: {
    type: Boolean,
    required: false,
  },
});
</script>
