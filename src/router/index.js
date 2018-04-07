import Vue from 'vue'
import Router from 'vue-router'

/* 样式 */
import '@/assets/css/reset.css'
import '@/assets/css/header.css'

/* 路由组件 */
import Shop from '@/views/shop'

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'shop',
            path: '/',
            component: Shop
        }

    ]
})
