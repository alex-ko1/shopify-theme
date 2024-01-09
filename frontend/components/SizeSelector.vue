<template>
  <div class="mt-10">
    <div>size:</div>
    <div class="flex gap-3 mt-3 ml-24">
      <div
        v-for="size in sizes"
        :key="size.value"
        class="cursor-pointer font-medium text-center w-8 whitespace-nowrap"
        @click="select(size)"
      >
        <span v-if="selectedSize === size">[</span>
        {{ size.label }}
        <span v-if="selectedSize === size">]</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {Size} from "@/composables/products";

const props = defineProps({
  sizes: {
    type: Array as PropType<Size[]>,
    required: true
  }
})
const selectedSize = ref(props.sizes[0])
function select(size: Size) {
  selectedSize.value = size
}
</script>
