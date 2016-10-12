<template>
  <div id="app">
<my-navbar></my-navbar>
<my-navdrawer></my-navdrawer>

    <img class="logo" src="./assets/logo.png">
   
    <div>
  {{ message }}
</div>
<p>
          <router-link to="/foo">Go to Foo</router-link>
          <router-link to="/bar">Go to Bar</router-link>
        </p>
        
<router-view></router-view>
    
  </div>


</template>

<script>


export default { 
  data () {
    return {
      message: 'Hello world!'
    }
  }
  
  
}
</script>

<style>
html {
  height: 100%;
}

body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
}


</style>
