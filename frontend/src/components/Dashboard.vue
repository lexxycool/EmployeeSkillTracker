<template>
  <div>

    <div id="nav">
      <router-link to="/homepage">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
       <router-link to="/addCourse">SignOut</router-link>
    </div>
   
  
       <h3>John Wick</h3>
       

      <div class="tables">
        <table class="table">
    
          <tr>
           <th>Department</th>
           <th>Course</th>
           <th>Status</th>
           <th>Start date</th>
           <th>End date</th>  
          </tr>

          <tr>
            <td>Software Development</td>
            <td>Java</td>
            <td>completed</td>
            <td>02/05/2021</td>
            <td>07/08/2021</td>
           
         </tr>   

         <tr>
           <td>Cloud Management</td>
            <td>AWS</td>
            <td>in-view</td>
            <td>04/05/2021</td>
            <td>10/08/2021</td>
           
         </tr>      
       
      </table>
      <button class="btn" @click="addCourse">Add Course</button>
      </div>
      
      


  </div>
  
  
</template>

<script>
export default {
    data() {
      return {
          course: []
      }
    },
    ErrorMsg: "",
    created() {
            ApiService
            .getCourses()
            .then(response => {
                if(response.status == 200) {
                    this.course = response.data;
                }
                
            })
            .catch((error) => {
                if(response.status == 401) {
                    this.ErrorMsg = "Please try again";
                }
            })
     
    },
    methods: {
      addCourse() {
        this.$router.push('/addCourse');
      }
    }
}
</script>

<style>
    h3 {
      font-size: 25px;
    }

   

    .table {
     border-collapse: collapse;
     width: 80%;
     margin-left: 10%;
     margin-right: 35%;
     

    }

    td, th {
      border: 1px solid #ddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #ddd;
    }

    .tables {
      background-color: whitesmoke;
      height: 50vh;
      padding-top: 50px;
    }

    .btn {
      margin: 30px 80px;
      float: right;
      font-size: 13px;
      font-weight: 600;
      color: #000;
      border-radius: 5px;
      cursor: pointer;

    }

     .btn:hover {
      font-size: 14px;
      background-color: rgb(170, 233, 170);
     
    }
   
</style>