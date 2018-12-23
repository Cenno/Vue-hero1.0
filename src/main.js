import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import VueRouter from 'vue-router'
import Heros from './components/heros.vue'
import Bar from './components/bar.vue'
import Foo from './components/foo.vue'


Vue.use(VueRouter);
var routes = [
  {name:'heros',path:'/heros',component:Heros},
  {name:'bar',path:'/bar',component:Bar},
  {name:'foo',path:'/foo',component:Foo}
];

var router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
