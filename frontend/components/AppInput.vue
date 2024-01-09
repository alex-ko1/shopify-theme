<template>
  <div class="relative">
    <input
      v-model="state"
      :type="type"
      class="block py-2 w-full text-black uppercase bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
    >
    <label
      class="absolute text-black duration-300 -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
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
</script>
