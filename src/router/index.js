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
  {
    name: 'Game',
    path: '/game',
    component: () => import(/*webpackChunkName: "game"*/ '../views/Game.vue'),
    meta: {
      title: 'Game',
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
