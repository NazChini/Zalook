import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from '../views/about-page.vue'
import GetStarted from '../views/get-started.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import HomePage from '../views/home-page.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'AboutPage',
        component: AboutPage,
      },
      {
        path: '/get-started',
        name: 'GetStarted',
        component: GetStarted,
      },
      // {
      //   path: '/users/:id',
      //   name: 'UserDetail',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue'),
      // },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: HomePage,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        },
      },
    ],
  })
}
