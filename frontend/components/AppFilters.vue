<template>
  <section>
    <div class="flex flex-col gap-3">
      <div class="text-base pt-3 font-medium">
        Filters
      </div>
      <div class="flex flex-col gap-4 py-4">
        <CheckboxFilter
          v-model="typeState"
          :options="typeOptions"
          label="type"
        />
        <AppDivider classes="border-color-[#f7f7f7]" />
        <CheckboxFilter
          v-model="sizeState"
          :options="sizeOptions"
          label="size"
        />
        <AppDivider classes="border-color-[#f7f7f7]" />
        <RadioFilter
          v-model="colorState"
          :options="colorOptions"
          label="colour"
        />
        <AppDivider classes="border-color-[#f7f7f7]" />
        <CheckboxFilter
          v-model="collectionState"
          :options="collectionOptions"
          label="collection"
        />
      </div>
    </div>
    <div class="flex flex-col cursor-pointer gap-3 mt-auto">
      Reset
      <AppButton
        class="mb-auto"
        hoverable
        label="Show results"
        @click="showFilters"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '@/components/AppButton.vue';
import CheckboxFilter from '@/components/CheckboxFilter.vue';
import RadioFilter from '@/components/RadioFilter.vue';
import AppDivider from '@/components/AppDivider.vue';
import {
  colorOptions,
  sizeOptions,
  typeOptions,
} from '@/helpers/fixtures';
import { showFilters } from '@/helpers/rightSidebar';
import { collectionOptions } from '@/helpers/fixtures';

const typeState = ref(['coats', 'jackets']);
const sizeState = ref(['l', 'm']);
const colorState = ref(['red', 'pink']);
const collectionState = ref(['col3']);
</script>
