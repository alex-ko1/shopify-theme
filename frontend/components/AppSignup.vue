<template>
  <section>
    <div class="text-base pt-3 font-bold">
      sign up
    </div>
    <AppInput
      v-model="username"
      label="name"
    />
    <AppInput
      v-model="email"
      label="email"
    />
    <AppInput
      v-model="password"
      label="password"
      type="password"
    />
    <AppInput
      v-model="passwordConfirm"
      label="confirm password"
      type="password"
    />
    <div class="flex justify-between">
      <AppCheckbox label="I HAVE READ AND UNDERSTAND THE PRIVACY AND COOKIES POLICY" />
    </div>
    <AppButton
      hoverable
      label="log in"
      @click="signUp"
    />
    <AppButton
      hoverable
      label="AUTH"
      @click="auth"
    />
    <AppDivider label="or" />
    <div class="grid grid-cols-2 mb-auto gap-3">
      <AppButton
        :image="fbImage"
        label="facebook"
      />
      <AppButton
        :image="gImage"
        label="google"
      />
    </div>
    <div class="uppercase mb-12">
      Do you have an account? <span
        class="font-bold cursor-pointer"
        @click="showLogin"
      >log in</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import AppInput from '@/components/AppInput.vue';
import AppDivider from '@/components/AppDivider.vue';
import AppButton from '@/components/AppButton.vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import fbImage from '@/assets/icons/fb.svg';
import gImage from '@/assets/icons/google.svg';
import { showLogin } from '@/helpers/rightSidebar';
// import auth from "@/composables/authentication";
// import userAuth from "@/composables/userAuth";
import getToken from "@/composables/obtainAccessToken";

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
// const {registerUser} = userAuth();

// const signUp = async () => {
//   await registerUser('komik.forever@gmail.com','12345','123')
//
//   await auth();
// }
</script>
