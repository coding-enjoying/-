import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import {routes} from './routes.js'
Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd2468178309upkmpi.wilddogio.com/'
const router = new VueRouter({
	routes,
	mode:'history',
	scrollBehavior:function(to,from,savedPosition){
		// return {
		// 	x:0,
		// 	y:100
		// }
		// return {
		// 	selector:'.btn'  停留在btn标签处
		// }
		// 回退页面后，页面停留在上次访问过的位置处
		// if(savedPosition){
		// 	return savedPosition;
		// }else{
		// 	return{
		// 		x:0,
		// 		y:0
		// 	}
		// }
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
