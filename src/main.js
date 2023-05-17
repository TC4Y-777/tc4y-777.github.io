import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'

import router from '@/router/index'

import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
// import 'quasar/dist/quasar.css'


createApp(App)
    .use(router)
    .use(Quasar, {
        plugins: {},
    })
    .mount('#app')
