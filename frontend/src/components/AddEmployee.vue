<template>
  <div>
      <div id="nav">
      <router-link to="/homepage">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
       <router-link to="/addCourse">SignOut</router-link>
    </div>
   
 <form class="add-form">
      
      <div class="form-control">
          <label>Full Name</label>
            <input type="text" name='name' placeholder="name..." v-model="name">
      </div>
      <div class="form-control">
          <label>Department</label>
          <input type="text" name='department' placeholder="Department..." v-model="department">
      </div>
      <input type="submit" value="Save" class="button">
  </form>

  </div>
</template>

<script>
export default {
    data() {
        return {
            
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
        margin-bottom: 5px 20px;
        font-weight: 500;
    }

    .form-control input {
        width: 30%;
        height: 20px;
        margin: 5px 5px 20px;
        padding: 3px 7px;
        font-size: 15px;
    
    }

   

    .button {
        width: 32%;
        margin: 10px 0px 0px 5px;
        font-size: 20px;
        background: gray;
        border: 0px;
        border-radius: 5px;
        color: white;
    }

     .button:hover {
        
        background: green;
        
    }

    </style>