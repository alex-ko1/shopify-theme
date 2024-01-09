<template>
  <section>
    <div class="text-base pt-3 font-bold">
      Forgot password
    </div>
    <div class="uppercase pb-3">
      Enter the email address you used when you joined and we’ll send you instructions to
      reset your password
    </div>
    <AppInput
      label="email"
      model-value=""
    />
    <AppButton
      class="mb-auto"
      hoverable
      label="submit"
      @click="showRecoverPassword"
    />
    <div class="uppercase mb-10">
      Remember your password? <span
        class="font-bold cursor-pointer"
        @click="showLogin"
      >Back to login</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import { showLogin, showRecoverPassword } from '@/helpers/rightSidebar';

const props = defineProps({
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

<style scoped>

</style>
