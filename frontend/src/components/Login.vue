<template>

  <div class="signup">
      
    <h2>Create your free account here</h2>
        <form>
            <div class="register">
                 <input type="text" placeholder="name.." name="text" class="info">
                <input type="text" placeholder="name.." name="text" class="info">
                <input type="text" placeholder="name.." name="text" class="info">
            </div>

            <button class="submit">Create Account</button>
           
        </form>
        
    </div>

</template

<script>
export default {
 
  
}
</script>

<style>
  .signup {
      text-align: center;
      width: 100%;
      height: auto;
  }

  .register {
      max-width: 500px;
      height: 17em;
      margin: 0 auto;
      padding: 30px;
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #fefefe;

  }

  .info {
      display: block;
      width: 100%;
      padding: 10px 15px;
      height: 40px;
      font-size: 15px;
      margin: 10px;
      margin-bottom: 30px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
  }

  .submit {
      width: 56%;
      margin: 25px 0px;
      opacity: 0.7;
      font-size: 18px;
      padding: 10px 15px;
      font-weight: bold;
      color: #ffff;
      background-color: rgba(20,20,236);
      border: 1px solid;
      border-radius: 5px;
  }

  ::-webkit-input-placeholder {
      opacity: 0.5;
  }


  
 
 
</style>