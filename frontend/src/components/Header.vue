<template>
  <header>
     <h2>{{ title }}</h2>
     <router-link to="/addCourse">
         <Button text="Add Course" color="green"/>
     </router-link>
     
  </header>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
    name: 'Header',
    props: {
        title: "Skill Tracker",
    }
}    
</script>

<style scoped>
    header {
      display: flex;
      justify-content: space-between; 
      align-items: center; 
      margin-bottom: 20px;
    }
</style>