<template>
  <div class="container">
    <Header title="Skill Tasker"/>
    <Courses :courses="courses"/>
      
  </div>
</template>

<script>
import Courses from './components/Courses.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
   data() {
        return {
            courses: [],

            }
        },
        created() {
            this.courses =  [
                {
                id: 1,
                coursename: "Java",
                status: "in-view",
                },
                {
                id: 2,
                coursename: "Postgres",
                status: "Completed",
                },
                {
                id: 3,
                coursename: "JavaScript",
                status: "Completed",
                },
            ]    
         },

  components: {
    Header,
    Courses
  
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  width: 350px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

@media(min-width: 700px) {
  .container {
      width: 40%;
  }

  }

</style>
