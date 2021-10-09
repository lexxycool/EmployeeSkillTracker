import Vue from 'vue'
import Router from 'vue-router'
import { component } from 'vue/types/umd';
import AddCourse from '../src/components/AddCourse'



Vue.use(Router)


const router = new Router({

    routes: [
        {
            path: '/addCourse',
            name: 'add-course',
            component: AddCourse,


        }




    ]

  });

export default router;
