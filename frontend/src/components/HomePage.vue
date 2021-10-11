<template>
<div>
    <div id="nav">
      <router-link to="/homepage">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
       <router-link to="/addCourse">SignOut</router-link>
    </div>
   <div>
       <h2><span>Perficient</span> Employees</h2>
       <div v-for="employee in employees" :key="employee.id">
            <hr>
           <h3 >{{employee.name}}</h3> 
           <p>{{employee.department}}</p>
            <div class="delete">
                <i class="fa fa-trash" @click="remove(employee.employeeId)"></i>Delete
           </div>
          
       </div>
       <div class="edit">
           <div class="add" >
               <i class="fa fa-plus" @click="add"></i> Add Employee
           </div>
           
       </div>
       
   </div>
</div>

</template>

<script>
import ApiService from '../services/ApiService';
export default {
    data() {
        return {
            employees: [],
        }
    },
    methods: {
       
        add() {
            
            this.$router.push('/addEmployee');
        },
        remove(id) {
         
            alert("Are you sure you want to premanently remove this employee");
            ApiService.deleteEmployee(id)
            .then(response => {
                if(response.data == 200) {
                    this.employees = employees.filter(item => {
                        return item.id != id;
                    })
                }
            })
            location.reload();
            
            
            
        }
    },
    ErrorMsg: "",
    created() {
            ApiService
            .getEmployees()
            .then(response => {
                if(response.status == 200) {
                    console.log(response.data)
                    this.employees = response.data;
                }
                
            })
            .catch((error) => {
                if(response.status == 401) {
                    this.ErrorMsg = "Please try again";
                }
            })

     
    }

}
</script>

<style>
    hr {
        width: 50%;
      
    }

    h2 span {
        color: red;
    }

    div h3:hover {
        color: #42b983;
        cursor: pointer;
    }

    .edit {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px 0px 0px 50px;
        
    }

    .edit div {
        margin-right: 50px;
        font-weight: 700;
        
    }

     .edit div i {
        margin-right: 10px;
      
    }

    .add i {
        color: rgb(131, 131, 241);
        cursor: pointer;
    }

  

     .delete i {
          color: red;
          cursor: pointer;
    }

     @media(min-width: 700px) {
       hr {
            width: 30%;
        }

       .edit {
        display: flex;
        align-items: center;
        justify-items: center;
        }
        
     }

</style>