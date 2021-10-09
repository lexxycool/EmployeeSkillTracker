<template>
  <header>
     <h2>{{ title }}</h2>
     <Button text="Add Course" color="green"/>
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