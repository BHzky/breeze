import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component:Index,
    //如果想让这个页面缓存，不重复请求数据的话
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/index',
    name: 'index',
    component:Index,
    //如果想让这个页面缓存，不重复请求数据的话
    meta:{
      keepAlive:true
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {path:"/product/:kw",name:"product",component:()=>import(/* webpackChunkName: "products" */ '../views/Product.vue'),props:true,meta:{
  //   keepAlive:false
  // }},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
