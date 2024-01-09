<template>
  <div :class="wrapperClasses">
    <img
      v-if="image"
      :src="image"
      alt=""
    >
    <div class="uppercase">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  hoverable: {
    type: Boolean,
    required: false,
  },
  image: {
    type: String,
    required: false,
    default: '',
  },
});

const wrapperClasses = computed(() => {
  const def = 'cursor-pointer border-2 border-black py-3.5 flex gap-2 justify-center';

  if (props.hoverable) {
    return `${def} hover:bg-black hover:text-white`;
  }

  return def;
});
</script>
