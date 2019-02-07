import Vue from 'vue'
import Router from 'vue-router'
import root from '@/components/root'
import aboutUs from '@/components/aboutUs'
import aboutUsAr from '@/components/aboutUsAr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: root,
      children:[
      {
        path:'/ar',
      	component:aboutUs
      },
      {
        path:'/',
        component:aboutUsAr
      }
      ]
    }
  ]
})
