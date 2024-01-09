<template>
  <div>
    <div class="grid grid-cols-[116px_210px_249px_71px_10px] gap-2.5 uppercase">
      <div class="text-xxs">
        Order No.
      </div>
      <div class="text-xxs">
        Expected by
      </div>
      <div class="text-xxs">
        Status
      </div>
      <div class="text-xxs">
        Price
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-7 uppercase">
      <OrderItem
        v-for="item in orders"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useOrders from '@/composables/orders';
import OrderItem from '@/components/OrderItem.vue';

const { orders } = await useOrders();
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
