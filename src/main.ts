import './assets/css/variables.css'
import './assets/css/variables.less'
import './assets/css/index.less'
import './assets/css/style.css'
import javascriptSvg from '@/assets/images/javascript.svg'
import _ from 'lodash-es'
_.add(1+2)
console.log(javascriptSvg)
console.log(import.meta.env)
import('./test.ts').then(res=>console.log(res))
import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)
app.mount('#app')