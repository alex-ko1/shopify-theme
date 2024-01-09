<template>
  <div class="my-2">
    <label
      class=" flex gap-2 cursor-pointer relative items-center text-black"
      for="remember"
    >
      <input
        id="remember"
        v-model="state"
        :class="inputClasses"
        class="w-3 h-3 appearance-none outline-none content-none checked:after:content-[''] checked:after:absolute checked:after:top-1 checked:after:bottom-1 checked:after:left-0.5 checked:after:w-2 checked:after:h-2"
        name="remember"
        type="checkbox"
      >
      <span class="text-xs">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  inputClasses: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: {
    type: Boolean,
    required: false,
  },
});

const inputClasses = computed(() => {
  if (props.rounded) {
    return [
      'rounded-full',
      'overflow-hidden',
      'checked:border',
      'checked:border-black',
      "after:content-['']",
      'after:rounded-full',
      'after:absolute',
      'after:top-1',
      'after:left-0.5',
      'after:w-2',
      'after:h-2',
      props.inputClasses,
    ];
  }

  return [
    'rounded-sm',
    'border',
    'border-gray-300',
    'checked:after:bg-gray-300',
  ];
});

const emits = defineEmits(['update:model-value']);
const state = ref(props.modelValue);

watch(state, () => {
  emits('update:model-value', state.value);
});
</script>
