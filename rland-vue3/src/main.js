import { createApp } from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router';
import { createPinia } from 'pinia';

import App from './App.vue'
import rootRoute from './components/route.js'
import adminRoute from './components/admin/route.js'
import vue3GoogleLogin from 'vue3-google-login'

const routes = [
    rootRoute,
    adminRoute,
]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const pinia = createPinia();

//Vue.createApp() -> Global Library
createApp(App)
.use(router)
.use(pinia)
.use(vue3GoogleLogin, {
  clientId: '939267992367-0ef2opuj3cjh7juov0057rpsjhs1ph4q.apps.googleusercontent.com'
})
.mount('#app') //-> Es6 Library
