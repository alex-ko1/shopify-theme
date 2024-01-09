<template>
  <div class="grid grid-cols-2 mt-20 uppercase text-xs">
    <div class="flex flex-col gap-2.5 justify-self-start">
      <RouterLink
        :class="{ 'ml-[25px]': $route.name === 'profile-orders', 'ml-8': $route.name !== 'profile-orders' }"
        to="/profile/orders"
      >
        <span v-if="$route.name === 'profile-orders'">[</span>
        Orders
        <span v-if="$route.name === 'profile-orders'">]</span>
      </RouterLink>

      <RouterLink
        :class="{ 'ml-[25px]': $route.name === 'profile-wishlist', 'ml-8': $route.name !== 'profile-wishlist' }"
        to="/profile/wishlist"
      >
        <span v-if="$route.name === 'profile-wishlist'">[</span>
        Wishlist
        <span v-if="$route.name === 'profile-wishlist'">]</span>
      </RouterLink>

      <RouterLink
        :class="{ 'ml-[25px]': $route.name === 'profile-addresses', 'ml-8': $route.name !== 'profile-addresses' }"
        to="/profile/addresses"
      >
        <span v-if="$route.name === 'profile-addresses'">[</span>
        Addresses
        <span v-if="$route.name === 'profile-addresses'">]</span>
      </RouterLink>

      <RouterLink
        :class="{ 'ml-[25px]': $route.name === 'profile-personal-details', 'ml-8': $route.name !== 'profile-personal-details' }"
        to="/profile/personal-details"
      >
        <span v-if="$route.name === 'profile-personal-details'">[</span>
        Personal details
        <span v-if="$route.name === 'profile-personal-details'">]</span>
      </RouterLink>
    </div>
    <NuxtPage />
  </div>
</template>
