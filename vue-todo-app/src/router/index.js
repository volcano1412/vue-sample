import Vue from 'vue'
import Router from 'vue-router'
import todoApp from '@/components/todoApp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todoApp',
      component: todoApp
    }
  ]
})
