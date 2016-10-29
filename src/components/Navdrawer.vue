<template>
<nav class="navdrawer-promote-layer navdrawer" v-bind:class="{'navdraweropen':drawerisOpen}">
              <h4></h4>
              <ul>
              <li >

                    <img class="logo-plane" src="../assets/plane.png"><a>登录</a>   
                </li>
                <li >
                    <img class="logo-calender" src="../assets/calendar.png"><a>炫彩日历</a>   
                </li>
                <li>
                    <img class="logo-test" src="../assets/test.png"><a>炫彩便签</a>
                </li>
                <li >
                    <img class="logo-clock" src="../assets/clock.png"><a>倒计时</a>    
                </li>
                <li >
                    <img class="logo-cloud" src="../assets/cloud.png"><a>云同步</a>   
                </li>
                <li >
                    <img class="logo-glasses" src="../assets/glasses.png"><a>关于</a>        
                </li>
                
              </ul>
            </nav>
</template>

<script>
export default{
  computed :{
drawerisOpen: function()
{return this.$store.getters.drawerisOpen}
}
}


</script>


<style>

.app-bar, .navdrawer, main {
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
}
.navdrawer {
    z-index: 5;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 155px;
    height: 100%;
    background-color: white;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.20);
    color: #fefefe;
    -webkit-transform: translate(-155px,0);
    transform: translate(-155px,0);
    overflow: auto;
}
.navdraweropen {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
}
.navdrawer-promote-layer {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.navdrawer ul {
    padding:  0;
    margin: 0;
    list-style-type: none;
}
.navdrawer ul li a:hover {
    background-color: rgba(0,0,0,0.1);
    color:#F2276C;
}
.navdrawer ul li{
height: 60px;
}
.navdrawer ul li a {
    font-family: "Microsoft Yahei";
    font-weight: 300;
    
    display: block;
    text-decoration: none;
    color: #444444;
    transition: background-color 0.2s ease-out;
}
.navdrawer h4{
    height: 49px;
    padding: 0 25px;
    margin: 0px;
}
.navdrawer ul li a {
    padding: 0 0 0 59px;
    line-height: 60px;
    margin: 0px;
}
.logo-plane {
    display:inline-block;
    margin-left: 26px;
    margin-top: 22.5px;
    position: absolute;
    width:23px;
    height:23px;
    z-index: 100;
    
}
.logo-calender {
    display:inline-block;
    margin-left: 29px;
    margin-top: 21px;
    position: absolute;
    width:20px;
    height:20px;
    z-index: 100;
    
}
.logo-test {
    display:inline-block;
    margin-left: 30px;
    margin-top: 20px;
    position: absolute;
    width:18px;
    height:22px;
    z-index: 100;
    
}
.logo-clock {
    display:inline-block;
    margin-left: 29px;
    margin-top: 20.5px;
    position: absolute;
    width:20px;
    height:22px;
    z-index: 100;
    
}
.logo-cloud {
    display:inline-block;
    margin-left: 27px;
    margin-top: 20px;
    position: absolute;
    width:22px;
    height:22px;
    z-index: 100;
    
}
.logo-glasses {
    display:inline-block;
    margin-left: 27px;
    margin-top: 22.5px;
    position: absolute;
    width:22px;
    height:18px;
    z-index: 100;
    
}
</style>
