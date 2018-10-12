import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Admin from './components/Admin'
import About from './components/About/About'
import Register from './components/Register'

//二级路由
import History from './components/About/History'
import Contact from './components/About/Contact'
import Delivery from './components/About/Delivery'
import Order from './components/About/Order'
// import NewPizza from './components/NewPizza'

//三级路由
import DeliveryInfo from './components/About/DeliveryInfo'
import Person from './components/About/contact/Person'
import Phone from './components/About/contact/Phone'

export const routes = [
	{path:'/',name:"homeLink",components:{
		default:Home,
		'contact':Contact,
		'history':History,
		'order':Order
	}},
	{path:'/header',name:"headerLink",component:Header},
	{path:'/login',name:"loginLink",component:Login},
	{path:'/menu',name:"menuLink",component:Menu},
	{path:'/admin',name:"adminLink",component:Admin
	// ,children:[
	// 	{path:'/newPizza',name:"newPizzaLink",component:NewPizza}
	// ]
	},
	{path:'/register',name:"registerLink",component:Register},
	{path:'/about',name:"aboutLink",redirect:'/contact',component:About,children:[
		{path:'/history',name:"historyLink",component:History},
		{path:'/contact',name:"contactLink",redirect:'/phone',component:Contact,children:[
			{path:'/person',name:"personLink",component:Person},
			{path:'/phone',name:"phoneLink",component:Phone}
		]},
		{path:'/order',name:"orderLink",component:Order},
		{path:'/delivery',name:"deliveryLink",component:Delivery,children:[
			{path:'/deliveryInfo',name:"deliveryInfoLink",component:DeliveryInfo}
		]}
	]},
	{path:'*',redirect:'/'}
]