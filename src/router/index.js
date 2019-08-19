import Vue from 'vue'
import Router from 'vue-router'
import { sessionSetItem } from '../common/util'

// 按需（懒）加载
const ProcuctDetail = () => import('../views/productDetail')
const success = () => import('../views/success')
Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

const router = new Router({
    mode: 'history',
    base: base,
    routes: [{
        path: '/',
        name: 'procuctDetail',
        component: ProcuctDetail
    },
    {
        path: '/success',
        name: 'success',
        component: success
    }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});
// 路由拦截器
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (localStorage.getItem('userinfo') && JSON.parse(localStorage.getItem('userinfo')).userId && JSON.parse(localStorage.getItem('userinfo')).session) {
            next();
        }
        else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    }
    else {
        next();
    }
})

export default router;
