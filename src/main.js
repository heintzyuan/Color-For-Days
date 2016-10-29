import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Navdrawer from './components/Navdrawer.vue'
import Calendar from './components/Calendar.vue'
Vue.use(VueRouter)
Vue.use(Vuex)

/*vuex设置*/
const store = new Vuex.Store({
  state: {
    isOpen:false,
  isClosed:true,
  drawerisOpen:false,
  drawerisClosed:true
  },

  mutations: {
    draweropen (state) {
state.isOpen = ! state.isOpen
state.isClosed = ! state.isClosed
state.drawerisOpen = ! state.drawerisOpen

    }
  },


  getters: {
      isOpen: state => state.isOpen,
      isClosed: state => state.isClosed,
      drawerisOpen: state => state.drawerisOpen,
     drawerisClosed: state => state.drawerisClosed
  
    }
})

/*组件注册*/
Vue.component('my-navbar', Navbar)
Vue.component('my-navdrawer', Navdrawer)
Vue.component('my-Calendar', Calendar)
const router = new VueRouter({
  routes // short for routes: routes
})



Vue.config.devtools = true
/* eslint-disable no-new */

/*路由设置*/
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [

  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]


/*入口*/
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})