import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from '../views/about-page.vue'
import LoginView from '../views/login-view.vue'
import RegisterView from '../views/register-view.vue'
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
        component: RegisterView,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/login')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/home')
          return next()
        },
      },
      {
        path: '/home',
        name: 'home',
        component: HomePage,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        },
      },
    ],
  })
}
