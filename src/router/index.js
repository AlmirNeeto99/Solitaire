import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Menu',
    path: '/',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue'),
    meta: {
      title: 'Menu',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - ' + Vue.prototype.$appName
  next()
})

export default router
