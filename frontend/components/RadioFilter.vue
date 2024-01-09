<template>
  <div
    class="flex justify-between cursor-pointer"
    @click="expanded = !expanded"
  >
    <div>{{ label }}</div>
    <span v-if="expanded">-</span>
    <span v-else>+</span>
  </div>
  <div v-if="expanded">
    <AppCheckbox
      v-for="option in options"
      :key="option.label"
      :input-classes="option.classes"
      :label="option.label"
      :model-value="state.includes(option.value)"
      rounded
      @update:model-value="v => addOrRemove(v, option)"
    />
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref, watch } from 'vue';
import AppCheckbox from '@/components/AppCheckbox.vue';

export interface Option {
  label: string;
  value: string;
  classes: string;
}

const expanded = ref(false);
const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => [],
  },
});

const emits = defineEmits(['update:model-value']);
const state = ref<string[]>(props.modelValue);

watch(state, () => {
  emits('update:model-value', state.value);
});

function addOrRemove(value: string, option: Option) {
  if (value) {
    state.value.push(option.value);
    return;
  }

  const removeIndex = state.value.findIndex((v) => v === option.value);
  state.value.splice(removeIndex, 1);
}
</script>
