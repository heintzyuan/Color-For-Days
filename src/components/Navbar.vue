<template>
<div class="navbar-div navbar-promote-layer">
	<nav class="navbar-nav" >
		<div class="model-5">
		  <div v-on:click="open" v-bind:class="{'menuopen':this.$store.getters.isOpen,'menu':this.$store.getters.isClosed}">
		    <div class="bar"></div>
		    <div class="bar"></div>
		    <div class="bar"></div>
		  </div>
		</div>
<h1 class="navbar-logo">ColorForDays</h1>
	</nav>
</div>

</template>

<script>

export default{
  methods: {
    open: function () {
this.$store.commit('draweropen')
    }
  }
}


</script>


<style>
.navbar-promote-layer {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.navbar-div{
display: block;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #03A9F4;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
    overflow: hidden;
    z-index: 902;
}

.navbar-nav {
    display: flex;
    width: 100%;
    height: 59px;
    position: relative;
    flex-direction: row;
    margin: 0 auto;	
}

.navbar-logo{
-webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 30px;
    line-height: 59px;
    margin: 0px;
    padding-left:10px;
    color: #fefefe;
    float: none;
    max-width: none;
    font-family: 'Roboto Condensed','Helvetica Neue',Helvetica,sans-serif;
    font-weight: 300;	
}
.menu {

  height: 59px;
  width: 59px;
  position: relative;
  margin:0;
  padding:0;
  border: none;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  cursor: pointer;
}

.bar {
  height: 5px;
  width: 35px;
  display: block;
  margin-left:12px;
  position: relative;
  background-color: #fff;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.model-5 {
  background-color: #F2276C;
}
.model-5 .bar{
  position: absolute;
}

.model-5 .bar:nth-of-type(1) {
  top: 11px;
  -moz-transition: top 0.1s ease 0.1s, -moz-transform 0.1s ease-out 0.1s;
  -o-transition: top 0.1s ease 0.1s, -o-transform 0.1s ease-out 0.1s;
  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s ease-out;
  -webkit-transition-delay: 0.1s, 0.1s;
  transition: top 0.1s ease 0.1s, transform 0.1s ease-out 0.1s;
}
.model-5 .bar:nth-of-type(2) {
  top: 27px;
  -moz-transition: ease 0.1s 0.1s;
  -o-transition: ease 0.1s 0.1s;
  -webkit-transition: ease 0.1s;
  -webkit-transition-delay: 0.1s;
  transition: ease 0.1s 0.1s;
}
.model-5 .bar:nth-of-type(3) {
top: 43px;
  -moz-transition: top 0.1s ease 0.1s, -moz-transform 0.1s ease-out 0.1s;
  -o-transition: top 0.1s ease 0.1s, -o-transform 0.1s ease-out 0.1s;
  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s ease-out;
  -webkit-transition-delay: 0.1s, 0.1s;
  transition: top 0.1s ease 0.1s, transform 0.1s ease-out 0.1s;
}

.menuopen {

  height: 59px;
  width: 59px;
  position: relative;
  margin:0;
  padding:0;
  border: none;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  cursor: pointer;
}
.model-5 .menuopen {
  -moz-transition: -moz-transform 0.1s ease 0.3s;
  -o-transition: -o-transform 0.1s ease 0.3s;
  -webkit-transition: -webkit-transform 0.1s ease;
  -webkit-transition-delay: 0.3s;
  transition: transform 0.1s ease 0.3s;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.model-5 .menuopen .bar:nth-of-type(1) {
  top: 27px;
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -moz-transition: top 0.1s ease 0.1s, -moz-transform 0.1s ease-out 0.3s;
  -o-transition: top 0.1s ease 0.1s, -o-transform 0.1s ease-out 0.3s;
  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s ease-out;
  -webkit-transition-delay: 0.1s, 0.3s;
  transition: top 0.1s ease 0.1s, transform 0.1s ease-out 0.3s;
}
.model-5 .menuopen .bar:nth-of-type(2) {
  opacity: 0;
}
.model-5 .menuopen .bar:nth-of-type(3) {
  top: 27px;
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -moz-transition: top 0.1s ease 0.1s, -moz-transform 0.1s ease-out 0.3s;
  -o-transition: top 0.1s ease 0.1s, -o-transform 0.1s ease-out 0.3s;
  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s ease-out;
  -webkit-transition-delay: 0.1s, 0.3s;
  transition: top 0.1s ease 0.1s, transform 0.1s ease-out 0.3s;
}



</style>