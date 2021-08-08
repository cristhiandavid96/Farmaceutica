import  {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Chartkick.use(Chart)
createApp(App).use(router).use(store).mount('#app')
