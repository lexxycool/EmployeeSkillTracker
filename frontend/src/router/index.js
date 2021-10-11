import Vue from 'vue'
import VueRouter from 'vue-router'
import AddCourse from '../views/AddCourse'
import Dashboard from '../views/Dashboard'
import HomePage from '../views/HomePage'
import AddEmployee from '../views/AddEmployee'
import DeleteEmployee from '../views/DeleteEmployee'
import Home from '../views/Home'
import Login from '../views/Login'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/homepage',
    name: 'home-page',
    component: HomePage
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
