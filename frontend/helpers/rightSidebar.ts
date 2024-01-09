import { ref } from 'vue';

const rightSidebar = ref('');

// actions
export function showCart() {
  rightSidebar.value = 'cart';
}

export function hide() {
  rightSidebar.value = '';
  console.log('aaa');
}

export function showLogin() {
  rightSidebar.value = 'login';
}

export function showSignUp() {
  rightSidebar.value = 'signup';
}

export function showForgotPassword() {
  rightSidebar.value = 'forgot-password';
}
export function showSizeguide() {
  rightSidebar.value = 'size-guide';
}

export function showRecoverPassword() {
  rightSidebar.value = 'recover-password';
}

export function showFilters() {
  rightSidebar.value = 'filters';
}

// getters
export function isShown() {
  return !!rightSidebar.value;
}

export function isSignUp() {
  return rightSidebar.value === 'signup';
}

export function isLogin() {
  return rightSidebar.value === 'login';
}

export function isForgotPassword() {
  return rightSidebar.value === 'forgot-password';
}

export function isRecoverPassword() {
  return rightSidebar.value === 'recover-password';
}

export function isShoppingCart() {
  return rightSidebar.value === 'cart';
}

export function isFilters() {
  return rightSidebar.value === 'filters';
}
export function isSizeguide() {
  return rightSidebar.value === 'size-guide';
}
