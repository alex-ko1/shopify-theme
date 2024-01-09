<template>
  <section>
    <div class="text-base pt-3 flex gap-1.5 font-medium items-center">
      <div>Bag</div>
      <div class=" rounded-full w-1 h-1 bg-black" />
      <div>{{ items.length }}</div>
    </div>
    <CartItem
      v-for="item in items"
      :key="item.id"
      :data="item"
      @delete-item="deleteItem"
    />
    <div class="bg-[#F7F7F7] py-[22px] mt-auto">
      <div class="flex flex-col px-6 gap-1">
        <div class="font-medium">
          Add even more to your order
        </div>
        <div class="">
          The finishing touch for that modern etiquette
        </div>
      </div>
      <div
        v-for="(upsell, index) in upsells"
        :key="upsell.id"
        class="flex mt-6 flex-col px-2 gap-4"
      >
        <CartItem
          :data="upsell"
          type="upsell"
          @add-item="addUpsell"
        />
        <AppDivider v-if="index !== upsells.length - 1" />
      </div>
    </div>
    <div class="flex flex-col gap-3 ">
      <div class="flex justify-between ">
        <div>subtotal</div>
        <div>{{ subtotal }} usd</div>
      </div>
      <AppButton
        hoverable
        label="checkout now"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import useCart from '@/composables/cart';
import CartItem from '@/components/CartItem.vue';
import AppButton from '@/components/AppButton.vue';
import AppDivider from '@/components/AppDivider.vue';

const {
  items,
  upsells,
  subtotal,
  addUpsell,
  deleteItem,
} = useCart();
</script>
