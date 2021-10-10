import Vue from 'vue'
import VueRouter from 'vue-router'
import AddCourse from '../views/AddCourse'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import AddEmployee from '../views/AddEmployee'
import DeleteEmployee from '../views/DeleteEmployee'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/addCourse',
    name: 'add-course',
    component: AddCourse
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/addEmployee',
    name: 'add-employee',
    component: AddEmployee
  },
  {
    path: '/deleteEmployee',
    name: 'delete-employee',
    component: DeleteEmployee

  }
]

const router = new VueRouter({
  routes
})

export default router
