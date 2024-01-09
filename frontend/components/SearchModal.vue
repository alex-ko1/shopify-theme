<template>
  <div class="hidden md:static w-full h-full uppercase absolute">
    <div class=" overflow-hidden absolute w-full h-full blur-sm bg-black opacity-50 z-20 left-0" />
    <div class="bg-white h-52 w-full z-30 absolute grid content-between">
      <div class=" flex justify-end mr-6 space-x-[14.5rem] mt-7">
        <div
          class="uppercase text-xs cursor-pointer"
          @click="toggleState"
        >
          hide
        </div>
        <div class="cursor-pointer">
          <img
            alt=""
            class="w-4 h-4"
            src="@/assets/icons/cross.png"
            @click="toggleState"
          >
        </div>
      </div>

      <div class="flex justify-between ml-6">
        <div class="w-full">
          <input
            ref="target"
            class=" mb-5 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="WHAT ARE YOU SEARCHING FOR?"
          >
        </div>
        <div class="mt-6 mr-6">
          <img
            alt=""
            class="w-4 h-4"
            src="@/assets/icons/loupe.svg"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFocus } from '@vueuse/core'
import { useMagicKeys } from '@vueuse/core'

const target = ref()
useFocus(target, { initialValue: true })
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(['update:model-value']);
const state = ref(props.modelValue);
const toggleState = () => {
  state.value = !state.value;
};

const { escape } = useMagicKeys()

watch(escape, (v) => {
  if (v){
    state.value = !state.value
  }
})
watch(state, () => {
  emits('update:model-value', state.value);
});
</script>
