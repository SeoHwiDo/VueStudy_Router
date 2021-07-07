import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/triphelper',
    name: 'triphelper',
    component: () => import('../views/triphelper.vue')
  },
  {
    path: '/story',
    name: 'story',
    component: () => import('../views/story.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue')
  },
  {
    path: '/community ',
    name: 'community',
    component: () => import('../views/community.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
