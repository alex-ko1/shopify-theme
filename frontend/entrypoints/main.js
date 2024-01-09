import 'vite/modulepreload-polyfill'
import { createApp } from 'vue'
// import App from './App.vue'
import MyComponent from '@/components/MyComponent.vue'
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import indexPage from "@/pages/index.vue";
import router from "@/router/router.js";

// const app = createApp(App);
// app.mount('#app')

const appElement = document.querySelector('#app')
const app = createApp();
if (appElement) {
    app.component('MyComponent', MyComponent)
      .component('AppHeader',AppHeader)
      .component('AppFooter', AppFooter)
      .component('MainPage',indexPage)
      .use(router)
    app.mount(appElement)
} else {
    const vueElements = document.querySelectorAll('[vue]')
    if (vueElements) vueElements.forEach(el => app.mount(el))
}

/**
 * fixes for Shopify sections
 * 1. properly render vue components on user insert in the theme editor
 * 2. reload the current page to rerender async inserted sections with vue components
 *
 * add the 'vue' keyword to the section's wrapper classes if the section uses any vue functionality e.g.:
 * {% schema %}
 * {
 *   "class": "vue-section"
 * }
 * {% endschema %}
 */
if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', (event) => {
        if (event.target.classList.value.includes('vue')) {
            app.mount(event.target)
        }
    })
} else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
    new MutationObserver((mutationsList) => {
        mutationsList.forEach(record => {
            const vue = Array.from(record.addedNodes).find(node => node.classList && node.classList.value.includes('vue'))
            if (vue) window.location.reload()
        })
    }).observe(document.body, {
        childList: true,
        subtree: true
    })
}
