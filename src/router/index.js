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
    component: () => import('../views/Intro/Intro.vue')
  },
  {
    path: '/triphelper',
    name: '',
    component: () => import('../views/triphelper/TripHelper.vue'),
    children:[
      {path:'/',name:'triphelper',component: () => import('../views/triphelper/TripHelperHome.vue')},
      {path:'guide',name:'triphelper-Guide',component: () => import('../views/triphelper/TripHelperGuide.vue')},
      {path:'materials',name:'triphelper-Materials',component: () => import('../views/triphelper/TripHelperMaterials.vue')},
      {path:'service',name:'triphelper-Service',component: () => import('../views/triphelper/TripHelperService.vue')},
      {path:'passport',name:'triphelper-PassPort',component: () => import('../views/triphelper/TripHelperPassPort.vue')},
    ]
  },
  {
    path: '/story',
    name: '',
    component: () => import('../views/Story/Story.vue'),
    children:[
      {path:'/',name:'Story',component: () => import('../views/Story/StoryHome.vue')},
      {path:'road01',name:'Story-Road01',component: () => import('../views/Story/Road01.vue')},
      {path:'road02',name:'Story-Road02',component: () => import('../views/Story/Road02.vue')},
      {path:'road03',name:'Story-Road03',component: () => import('../views/Story/Road03.vue')},
      {path:'road04',name:'Story-Road04',component: () => import('../views/Story/Road04.vue')},
      {path:'road05',name:'Story-Road05',component: () => import('../views/Story/Road05.vue')},
      {path:'road06',name:'Story-Road06',component: () => import('../views/Story/Road06.vue')},
    ]
  },
  {
    path: '/info',
    name: '',
    component: () => import('../views/Info/Info.vue'),
    children:[
      {path:'/',name:'Info',          component: () => import('../views/Info/InfoHome.vue')},
      {path:'food',name:'Info-Food',  component: () => import('../views/Info/InfoFood.vue')},
      {path:'sleep',name:'Info-Sleep',component: () => import('../views/Info/InfoSleep.vue')},
    ]
  },
  {
    path: '/community',
    name: '',
    component: () => import('../views/Community/Community.vue'),
    children:[
      {path:'/',name:'Community',                     component: () => import('../views/Community/CommunityHome.vue')},
      {path:'notice', name:'Community-Notice',        component: () => import('../views/Community/CommunityNotice.vue')},
      {path:'freeboard', name:'Community-FreeBoard',  component: () => import('../views/Community/CommunityFreeBoard.vue')},
      {path:'newsletter', name:'Community-NewsLetter',component: () => import('../views/Community/CommunityNewsLetter.vue')},
      {path:'content', name:'Community-Content',      component: () => import('../views/Community/CommunityContent.vue')},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
