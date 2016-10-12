<template>
<nav class="navdrawer-promote-layer navdrawer" v-bind:class="{'navdraweropen':this.$store.getters.drawerisOpen}">
              <h4></h4>
              <ul>
                <li >
                    <a>1</a>
                        
                </li>
                <li>
                    <a>2</a>
                </li>
                
              </ul>
            </nav>
</template>

<script>

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
    width: 250px;
    height: 100%;
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.15);
    color: #fefefe;
    -webkit-transform: translate(-250px,0);
    transform: translate(-250px,0);
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
.navdrawer ul li a:hover {
    background-color: rgba(0,0,0,0.1);
}
.navdrawer ul li a {
    display: block;
    text-decoration: none;
    color: #444444;
    transition: background-color 0.2s ease-out;
}
.navdrawer h4, .navdrawer ul li a {
    height: 58px;
    padding: 0 25px;
    line-height: 58px;
    margin: 0px;
}
</style>
