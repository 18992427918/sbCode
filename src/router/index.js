import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login.vue'),
    children:[
      {
        path:'success',
        component:()=>import('../components/login-1.vue')

      }
    ]
  },
  {
    path:'/about',
    name:'about',
    component:()=>import('../views/About.vue'),
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
