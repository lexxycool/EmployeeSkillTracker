<template>
  <div class="home"> 
     <div id="description">
        <h3>Learning never exhausts the mind</h3>
       
    </div>
   
       <div><p>Already have an account? <button id="loginbutton" @click="login">Login</button></p></div>
  </div>
</template>

<script>
export default {
    methods: {
      login() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
 
#loginbutton {
color: rgb(87, 87, 245);
background-color: transparent;
border: white;
font-family:Verdana, sans-serif;
font-size: 18px;
font-weight: 600;
cursor: pointer;
}
div p{
  font-family: Verdana, sans-serif;
  margin: 7px 0px 0px 200px;
  color:rgb(88, 86, 86);
}
h3{
  font-size: 60px;
  color: rgb(9, 160, 9);
}

#description{
  padding: 5px 80px;
  inline-size: 500px;
  overflow-wrap: break-word;
}

.home{
  background: url(../assets/employee.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}

@media screen and (min-width: 700px){
  #loginbutton {
color: rgb(87, 87, 245);
background-color: transparent;
border: white;
font-family:Verdana, sans-serif;
font-size: 18px;
font-weight: 600;
cursor: pointer;
}
div p{
  font-family: Verdana, sans-serif;
  margin: 7px 0px 0px 200px;
  color:rgb(88, 86, 86);
}
h3{
  font-size: 40px;
  color: rgb(9, 160, 9);
}

#description{
  padding: 5px 80px;
  inline-size: 500px;
  overflow-wrap: break-word;
}

.home{
  background: url(../assets/employee.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}
}




</style>