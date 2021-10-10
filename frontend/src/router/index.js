import Vue from 'vue'
import VueRouter from 'vue-router'
import AddCourse from '../views/AddCourse'


Vue.use(VueRouter)

const routes = [
  {
    path: '/addCourse',
    name: 'add-course',
    component: AddCourse
  }
]

const router = new VueRouter({
  routes
})

export default router
