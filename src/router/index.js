import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/dahsboard/dahsboard.vue'
import Facturacion from '../pages/Facturacion/index.vue'
import Promocion from '../pages/Promocion/index.vue'
import medicamentos from '../pages/medicamentos/index.vue'
import Reporte from '../pages/Reporte/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/facturacion',
        name: 'Facturacion',
        component: Facturacion,
    },
    {
        path: '/promocion',
        name: 'Promocion',
        component: Promocion,
    },
    {
        path: '/medicamento',
        name: 'medicamentos',
        component: medicamentos,
    },
    {
        path: '/reportes',
        name: 'reportes',
        component: Reporte,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
