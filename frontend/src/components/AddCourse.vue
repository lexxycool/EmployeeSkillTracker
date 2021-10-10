<template>
<div>
    <form class="add-form" @submit.prevent="submitForm">
      <h3>Add Course</h3>
      <div class="form-control">
          <label>Course</label>
          <input type="text" name='course' placeholder="Add Course..." v-model="name">
      </div>
      <div class="form-control">
          <label>EmployeeId</label>
          <input type="text" name='employeeid' placeholder="Employeeid..." v-model="employeeid">
      </div>
       <div class="form-control">
          <label>Status</label>
          <input type="text" name='status' placeholder="Status..." v-model="status">
      </div>
       <div class="form-control">
          <label>Start Date</label>
          <input type="text" name='startdate' v-model='startdate'>
      </div>
       <div class="form-control">
          <label>End Date</label>
          <input type="text" name='enddate' v-model="enddate">
      </div>

      <input type="submit" value="Save" class="btn btn-block">
    

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

    }
    .form-control {
        margin: 20px 0;
    }

    .form-control label {
        display: block;
        margin-bottom: 5px;
        
    }

    .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px 3px;
        padding: 3px 7px;
        font-size: 15px;
    
    }



</style>