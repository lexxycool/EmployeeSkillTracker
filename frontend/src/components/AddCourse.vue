<template>
<div>
    <div id="nav">
      <router-link to="/homepage">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
       <router-link to="/addCourse">SignOut</router-link>
    </div>
    
    <form class="add-form">
      <h3>Add Course</h3>
      <div class="form-control">
            <input type="text" name='course' placeholder="Add Course..." v-model="name">
      </div>
      <div class="form-control">
          <label>EmployeeId</label>
          <input type="text" name='employeeid' placeholder="Employeeid..." v-model="employeeid">
      </div>
       <div class="form-control">
          <label>Status</label>
          <select name="status" placeholder="status" v-model="status">
              <option></option>
              <option>in-view</option> 
              <option>completed</option>     
          </select>
        </div>
       <div class="form-control">
          <label>Start Date</label>
          <input type="text" name='startdate' v-model='startdate'>
      </div>
       <div class="form-control">
          <label>End Date</label>
          <input type="text" name='enddate' v-model="enddate">
      </div>

      <input type="submit" value="Save" class="button">
    

  </form>
</div>
  
</template>

<script>
export default {
    name: 'addCourse',
    data() {
        return {
            name: '',
            courseId: '',
            employeeid: '',
            status: '',
            startdate: '',
            enddate: '',
            actions: '',
        }
    },
    methods: {
        submitForm() {
            if(!this.name) {
                alert('Please add a course')
                return;
            }

            const newCourse = {
                name: this.name,
                courseid: Math.floor(Math.random() * 1000),
                employeeid: this.employeeid,
                status: this.status,
                startdate: this.startdate,
                enddate: this.enddate,
                actions: this.actions
            }
            console.log(newCourse);
            
        }

    }, 
    
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