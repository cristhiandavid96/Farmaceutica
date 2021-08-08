import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Echarts from 'vue-echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'

Vue.component('chart',Echarts)
new Vue({
    render:h =>h(App)
    
}).use(router).use(store).mount('#app')


