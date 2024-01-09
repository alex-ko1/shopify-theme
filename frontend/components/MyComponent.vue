<template>
  <div class="flex m-5 gap-5">
    <div v-for="num in i">{{ num }}</div>
  </div>
<!--  <img src="@/assets/logo.svg">-->
</template>

<script setup>
const i = 5;
</script>
