<template>
  <div class="flex gap-1">
    <img
      :src="data.image"
      alt=""
      class="w-[6.125rem] cursor-pointer h-[6.5rem] object-cover"
    >
    <div class="flex flex-col flex-1 gap-2 p-1">
      <div class="flex justify-between">
        <div class="cursor-pointer">
          {{ data.name }}
        </div>
        <div>
          <img
            v-if="type === 'regular'"
            alt=""
            class="cursor-pointer"
            src="@/assets/icons/trash.svg"
            @click="$emit('deleteItem', data)"
          >
          <div
            v-else-if="type === 'upsell'"
            class="cursor-pointer"
            @click="$emit('addItem', data)"
          >
            add to bag +
          </div>
        </div>
      </div>
      <div
        v-if="type === 'regular'"
        class="flex justify-between"
      >
        <div class="flex flex-nowrap gap-1 cursor-pointer">
          <div>size:</div>
          <div>[</div>
          <div>l</div>
          <img
            alt=""
            src="@/assets/icons/triangle.svg"
          >
          <div>]</div>
        </div>
      </div>
      <div class="flex justify-between mt-auto">
        <div
          v-if="type === 'regular'"
          class="flex flex-nowrap gap-1.5"
        >
          <div>qty:</div>
          <div
            class="cursor-pointer"
            @click="decreaseQty(data.id)"
          >
            -
          </div>
          <div>{{ data.qty }}</div>
          <div
            class="cursor-pointer"
            @click="increaseQty(data.id)"
          >
            +
          </div>
        </div>
        <div>{{ data.price * data.qty }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCart from "@/composables/cart";
import type { OrderProduct } from "@/composables/orders";
import type { PropType } from "vue";

const {decreaseQty, increaseQty} = useCart();

defineProps({
  data: {
    type: Object as PropType<OrderProduct>,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'regular',
  },
});

defineEmits(['addItem', 'deleteItem']);
</script>
