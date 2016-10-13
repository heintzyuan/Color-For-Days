<template>
<div class="navbar-div navbar-promote-layer">
	<nav class="navbar-nav" >
		<div class="navbar-button">
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
    height: 49px;
    position: relative;
    flex-direction: row;
    margin: 0 auto;	
}

.navbar-logo{
-webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 20px;
    line-height: 49px;
    margin: 0px;
    padding-left:10px;
    color: #fefefe;
    float: none;
    max-width: none;
    font-family: 'Roboto Condensed','Helvetica Neue',Helvetica,sans-serif;
    font-weight: 300;	
}
.menu {

  height: 49px;
  width: 49px;
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
  height: 3px;
  width: 21px;
  display: block;
  margin-left:14px;
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
.navbar-button {
  background-color: #F2276C;
}
.navbar-button .bar{
  position: absolute;
}

.navbar-button .bar:nth-of-type(1) {
  top: 14px;
  -moz-transition: top 0.1s ease 0.1s, -moz-transform 0.1s ease-out 0.1s;
  -o-transition: top 0.1s ease 0.1s, -o-transform 0.1s ease-out 0.1s;
  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s ease-out;
  -webkit-transition-delay: 0.1s, 0.1s;
  transition: top 0.1s ease 0.1s, transform 0.1s ease-out 0.1s;
}
.navbar-button .bar:nth-of-type(2) {
  top: 23px;
  -moz-transition: ease 0.1s 0.1s;
  -o-transition: ease 0.1s 0.1s;
  -webkit-transition: ease 0.1s;
  -webkit-transition-delay: 0.1s;
  transition: ease 0.1s 0.1s;
}
.navbar-button .bar:nth-of-type(3) {
top: 32px;
  -moz-transition: top 0.1s ease 0.1s, -moz-transform 0.1s ease-out 0.1s;
  -o-transition: top 0.1s ease 0.1s, -o-transform 0.1s ease-out 0.1s;
  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s ease-out;
  -webkit-transition-delay: 0.1s, 0.1s;
  transition: top 0.1s ease 0.1s, transform 0.1s ease-out 0.1s;
}

.menuopen {

  height: 49px;
  width: 49px;
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
.navbar-button .menuopen {
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
.navbar-button .menuopen .bar:nth-of-type(1) {
  top: 23px;
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
.navbar-button .menuopen .bar:nth-of-type(2) {
  opacity: 0;
}
.navbar-button .menuopen .bar:nth-of-type(3) {
  top: 23px;
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