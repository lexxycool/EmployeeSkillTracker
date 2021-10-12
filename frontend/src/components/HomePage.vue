<template>
<div>
    <div id="nav">
      <router-link to="/homepage">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
       <router-link to="/">SignOut</router-link>
    </div>
   <div>
       <h2><span>Perficient</span> Employees</h2>
       <div v-for="employee in employees" :key="employee.id">
            <hr>
           <h3 >{{employee.name}}</h3> 
           <p>{{employee.department}}</p>
           <div class="icons">
               <div class="edit">
                    <i class="fa fa-edit" @click="edit(employee.employeeId)"></i>Edit
                </div>
                <div class="delete">
                    <i class="fa fa-trash" @click="remove(employee.employeeId)"></i>Delete
                </div>
           </div>
            
          
       </div>
       
           <div class="add" >
               <i class="fa fa-plus" @click="add"></i>Add Employee
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
            
            
            
        },
        edit(id) {
            this.$router.push('/edit');
        }
    },
    ErrorMsg: "",
    created() {
            ApiService
            .getEmployees()
            .then(response => {
                if(response.status == 200) {
                    
                    this.employees = response.data;
                }
                
            })
            .catch((error) => {
                if(response.status == 401) {
                    this.ErrorMsg = "Please try again";
                }
            })

     
    },
    

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
    .edit{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px; 
        margin-right: 30px;
        color: rgb(3, 121, 3);
        cursor: pointer;
    }

    .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        
    }

    .edit div {
        margin-right: 50px;
        font-weight: 700;
       
        
    }


    .add i {
        color: rgb(131, 131, 241);
        cursor: pointer;
        margin: 40px 2px 0px 20px;
       
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