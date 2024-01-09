<template>
  <div
    class="flex justify-between cursor-pointer"
    @click="expanded = !expanded"
  >
    <div>{{ label }}</div>
    <span v-if="expanded">-</span>
    <span v-else>+</span>
  </div>
  <AppDivider
    v-if="expanded"
    classes="border-color-[#f7f7f7]"
    dashed
  />
  <div v-if="expanded">
    <AppCheckbox
      v-for="option in options"
      :key="option.label"
      :label="option.label"
      :model-value="state.includes(option.value)"
      @update:model-value="v => addOrRemove(v, option)"
    />
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref, watch } from 'vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import AppDivider from '@/components/AppDivider.vue';

export interface Option {
  label: string;
  value: string;
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
    type: Array,
    required: false,
    default: () => [],
  },
});

const emits = defineEmits(['update:model-value']);
const state = ref(props.modelValue);

watch(state, () => {
  emits('update:model-value', state.value);
});

function addOrRemove(value: boolean, option: Option) {
  if (value) {
    state.value.push(option.value);
    return;
  }

  const removeIndex = state.value.findIndex((v) => v === option.value);
  state.value.splice(removeIndex, 1);
}

</script>
