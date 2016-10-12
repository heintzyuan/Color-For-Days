.navar-button{
    border-radius: 50%;
    width: 58px;
    height: 58px;
    background-image: none;
    background-color: transparent;
    border: none;
    padding: 0;
    transition: background-color 0.2s ease-out;
    -webkit-tap-highlight-color: rgba(255,255,255,0.2);
    font-size: 26px;
    color: white;
    line-height: 58px;
}
methods: {

hamb: function(){
    var menu = this.document.querySelector('.menu');

  this.menu.classList.toggle('open');
}

}

.model-5 .bar {
  position: absolute;
}
v-on:click="open" v-bind:class="{'menuopen':isOpen,'menu':isClosed}"

:drawer-is-open.sync="drawerisOpen" :drawer-is-closed.sync="drawerisClosed"

export default{
   

    data:function(){
        return{
  drawerisOpen:false,
  drawerisClosed:true
}}

 
}
export default{
  
    data:function(){
        return{
  isOpen:false,
  isClosed:true,
  drawerisOpen:false,
  drawerisClosed:true
}
  },
  methods: {
    open: function () {
this.isOpen = ! this.isOpen
this.isClosed = ! this.isClosed

     }
    },
    
}
export default{
  data:function(){
        return{
  drawerisOpen:this.$store.getters.drawerisOpen,
  drawerisClosed:this.$store.getters.drawerisClosed, 
}
}
}

.navdrawer-container.open {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
}
.app-bar, .navdrawer-container, main {
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
}
.navdrawer-container {
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
.promote-layer {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
