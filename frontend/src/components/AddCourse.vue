<template>
<div>
    <div id="nav">
      <router-link to="/homepage">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
       <router-link to="/addCourse">SignOut</router-link>
    </div>
    
    <form class="add-form" @submit.prevent="submitCourse">
      <h3>Add Course</h3>
      <div class="form-control">
            <input type="text" name='course' placeholder="Add Course..." v-model="course.coursename">
      </div>
      <div class="form-control">
          <label>Department</label>
          <input type="text" name='department' placeholder="Department..." v-model="course.department">
      </div>
       <div class="form-control">
          <label>Status</label>
          <select name="status" placeholder="status" v-model="course.status">
              <option></option>
              <option>in-view</option> 
              <option>completed</option>     
          </select>
        </div>
       <div class="form-control">
          <label>Start Date</label>
          <input type="text" name='startdate' v-model="course.startdate">
      </div>
       <div class="form-control">
          <label>End Date</label>
          <input type="text" name='enddate' v-model="course.enddate">
      </div>

      <input type="submit" value="Save" class="button">
    

  </form>
</div>
  
</template>

<script>
import ApiService from '../services/ApiService'
export default {
    name: 'addCourse',
    data() {
        return {
            course: {
                coursename: '',
                status: '',
                startdate: '',
                enddate: '',
                department: ''
                
      
            }

         
        }
    },
    methods: {
        submitCourse() {
              
            ApiService
            .addCourse(this.course)
            .then(response => {
                if(response.status == 200) {
                    alert("Course is added")
                    this.$router.push('/dashboard')
                }
            })
            .catch(error => {
                console.log(error.response);
            }) 
                
            
        }
    }
            
        }

 
</script>

<style scoped>
    .add-form {
        margin-bottom: 40px;
        text-align: center;
       
    
    }
    .form-control {
        margin: 15px 0 20px 5px;
       
    }

    .form-control label {
        display: block;
        margin-bottom: 5px 0px;
        
    }

    .form-control input {
        width: 25%;
        height: 20px;
        margin: 5px 5px;
        padding: 3px 7px;
        font-size: 15px;
    
    }

     .form-control select {
        width: 27%;
        height: 28px;
        margin: 5px 3px ;
        padding: 3px 7px;
        font-size: 15px;
    
    }

    .button {
        width: 27%;
        margin: 20px 0px 0px 5px;
        font-size: 20px;
        background: gray;
        border: 0px;
        border-radius: 5px;
        color: white;
    }

     .button:hover {
        width: 27%;
        margin: 20px 0px 0px 5px;
        font-size: 20px;
        background: green;
        border: 0px;
        border-radius: 5px;
        color: white;
    }




</style>