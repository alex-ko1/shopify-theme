<template>
  <div>
    <div
      class="relative grid grid-cols-[116px_210px_249px_71px_10px] gap-2.5 text-xs cursor-pointer"
      @click="expanded = !expanded"
    >
      <div>#{{ data.id }}</div>
      <div>{{ format(data.expectedBy, 'dd MMM yyyy', { locale: enUS }) }}</div>
      <div>{{ data.status }}</div>
      <div>${{ calculateOrderPrice(data).toFixed(2) }}</div>
      <div>
        <span v-if="expanded">-</span>
        <span v-else>+</span>
      </div>
    </div>

    <div
      v-if="expanded"
      class="my-4 border-dashed border-t py-4 w-[690px]"
    >
      <div class="flex justify-between">
        <div class="flex gap-5">
          <div>Shipping details:</div>
          <div class="max-w-xs font-medium">
            Konstantin Konstantinovsky Vasylkivska 25, Kyiv, Ukraine, 01001 + 38 (095)
            592-84-96
            konstantin@gmail.com
          </div>
        </div>

        <div class="flex flex-col font-medium text-right">
          <div>{{ data.paidVia }}</div>
          <div>{{ data.shipping.name }} - ${{ data.shipping.price }}</div>
        </div>
      </div>

      <div
        v-for="item in data.items"
        :key="item.id"
        class="flex gap-4 mt-5"
      >
        <img
          :src="item.image"
          alt=""
          class="w-[110px] h=[117px]"
        >
        <div class="flex flex-1 justify-between">
          <div>{{ item.name }}</div>
          <div>{{ item.size.value }}, {{ item.color.label }}, qty {{ item.qty }}</div>
          <div>{{ item.price }}</div>
        </div>
      </div>
    </div>
    <div class="border-b mt-8 w-[690px] border-solid border-[#e6e6e6]" />
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { type PropType, ref } from 'vue';
import { calculateOrderPrice } from '@/helpers/common';
import type { Order } from "@/composables/orders";

defineProps({
  data: {
    type: Object as PropType<Order>,
    required: true,
  },
});

const expanded = ref(false);
</script>
