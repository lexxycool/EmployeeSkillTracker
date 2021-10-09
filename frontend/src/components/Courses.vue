<template>
<div>
      <div class="courseBody" v-for="course in courses" :key="course.id">
           <h3>{{ course.coursename }}
               <i class="fas fa-trash"></i>
           </h3> 
           
            <p>{{ course.status }}</p>
     </div>
</div>

</template>

<script>

export default {
    name: 'Courses',
    props: {
        courses: Array
    }
}
</script>

<style scope>
    .courseBody {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .courseBody h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .fas {
        color: red;
        font-size: 12px;
        margin-top: 10px;
        }
        
</style>