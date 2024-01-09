<template>
  <div class="flex flex-col gap-3">
    <div
      class="cursor-pointer"
      @click="state = !state"
    >
      {{ label }}
      <span v-if="state">-</span>
      <span v-else>+</span>
    </div>

    <template v-if="state">
      <RouterLink
        v-for="(option, index) in options"
        :key="index"
        :to="'/'+option.url.split('/').splice(3).join('/')"
        :class="{ 'mb-3': index === options.length - 1 }"
        class="ml-3 font-normal cursor-pointer whitespace-nowrap"
        @click="state = option.value"
      >
        {{ option.title }}
      </RouterLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
});

const state = ref(false);

</script>
