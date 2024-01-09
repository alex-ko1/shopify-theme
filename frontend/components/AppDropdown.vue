<template>
  <div class="flex cursor-pointer gap-0.5 text-xs items-center relative group">
    <div>{{ label }}</div>
    <div class="flex flex-nowrap gap-0.5 cursor-pointer">
      {{ currentOption.label }}
    </div>
    <img
      alt=""
      class="w-2.5 h-1"
      src="@/assets/icons/triangle.svg"
    >
    <div
      class="flex flex-col ml-12 bg-white shadow z-40 absolute p-3 border border-[#F7F7F7] gap-3 mt-36 opacity-0 group-hover:opacity-100 transition-all group-hover:pointer-events-auto pointer-events-none"
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="flex justify-between items-center gap-2"
        @click="state = option.value"
      >
        <div class="cursor-pointer whitespace-nowrap">
          {{ option.label }}
        </div>
        <img
          v-if="state === option.value"
          alt=""
          class="w-2 h-2.5"
          src="@/assets/icons/tick.svg"
        >
        <div
          v-else
          class="w-2 h-2.5"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref, watch } from 'vue';

export interface Option {
  label: string;
  value: string;
}

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
    default: () => [],
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(['update:model-value']);
const state = ref(props.modelValue);
watch(state, () => {
  emits('update:model-value', state.value);
});
const currentOption = computed(() => props.options.find((option) => option.value === state.value));
</script>
