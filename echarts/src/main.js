import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Echarts from 'vue-echarts'
import * as echarts from 'echarts'

const app = createApp(App)
app.component('e-charts',Echarts)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts
app.mount('#app')
