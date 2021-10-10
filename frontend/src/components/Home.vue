<template>
   <div>
       <h2><span>Perficient</span> Employees</h2>
       <div v-for="employee in employees" :key="employee.id">
            <hr>
           <h3>{{employee.name}}</h3>
           <p>{{employee.department}}</p>
       </div>
       <div class="edit">
           <div class="add" >
               <i class="fa fa-plus" @click="add"></i> Add 
           </div>
           <div class="delete">
                <i class="fa fa-trash" @click="remove"></i>Delete
           </div>
       </div>
       
   </div>
</template>

<script>
export default {
    data() {
        return {
            employees: [],
        }
    },
    methods: {
        add() {
            console.log('working');
            this.$router.push('/addEmployee');
        },
        remove() {
            this.$router.push('/deleteEmployee');
        }
    },
    created() {
        this.employees = [
            {
                id: 1,
                name: 'John Wick',
                department: 'Software Development'
            },
            {
                id: 2,
                name: 'Stephanie Weiss',
                department: 'Human Resource'
            },
            {
                id: 3,
                name: 'Bradley Cooper',
                department: 'Product Management'
            },
            
        ]
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
        margin-right: 2px;
      
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