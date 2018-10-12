<template>
	<div class="row">
		<!-- 菜单 -->
		<div class="col-sm-12 col-md-8">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems">
					<tr>
						<td><strong>{{item.name}}</strong></td>
					</tr>
					<tr v-for="option in item.options">
						<td>{{option.size}}寸</td>
						<td>{{option.price}}</td>
						<td><button class="btn btn-sm btn-outline-success" v-on:click="addToBasket(item,option)">+</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- 购物车 -->
		<div class="col-sm-12 col-md-4">
			<div v-if="baskets.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>数量</th>
							<th>品种</th>
							<th>价格</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="basket in baskets">
							<td>
								<button @click="decQuantity(basket)">-</button>
								<span class="num">{{basket.quantity}}</span>
								<button @click="incQuantity(basket)">+</button>
							</td>
							<td>{{basket.name}}<span class="size">{{basket.size}}寸</span></td>
							<td>{{basket.price * basket.quantity}}</td>
						</tr>
					</tbody>
				</table>
				<p>总价: <span>{{total+"RMB"}}</span></p>
				<button class="btn btn-success btn-block">提交</button>
			</div>
			<div v-else><h3>{{basketText}}</h3></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				baskets:[],
				basketText:'购物车还是空的哦，快去买买买吧！！！',
				getMenuItems:{
					1: {
					  'name': '榴莲pizza',
					  'description': '这是喜欢吃榴莲朋友的最佳选择',
					  'options': [{
					    'size': 9,
					    'price': 38
					  }, {
					    'size': 12,
					    'price': 48
					  }]
					},

					2: {
					  'name': '芝士pizza',
					  'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
					  'options': [{
					    'size': 9,
					    'price': 38
					  }, {
					    'size': 12,
					    'price': 48
					  }]
					},

					3: {
					  'name': '夏威夷pizza',
					  'description': '众多人的默认选择',
					  'options': [{
					    'size': 9,
					    'price': 36
					  }, {
					    'size': 12,
					    'price': 46
					  }]
					}
				}
			}
		},
		created(){
			//this.$http.get('../../static/posts.json').then(data => {
		   			// console.log(data);
		   			// this.blogs = data.body.slice(0,10);
			//  })
			fetch("http://47.106.196.15:8080/objs"
					// headers:{
					// 	"Content-type":"application/json"
					// }
				).then(res => {
					console.log(res);
					res.json().then((data) => {
				            console.log(data);
				        });
				})
		},
		methods:{
			addToBasket:function(item,option){
				let newBasket = {
					name:item.name,
			 		size:option.size,
			 		price:option.price,
			 		quantity:1
				}
				if(this.baskets.length == 0){
					this.baskets.push(newBasket);
				}else{
					let res = this.baskets.filter((basket) => {
						return (basket.name === item.name && basket.size === option.size);
					});

					if(res.length == 0){
						this.baskets.push(newBasket);
					}else{
						res[0].quantity ++;
					}
				}
			},
			decQuantity:function(basket){
				if(basket.quantity < 1){
					this.removeFromBasket(basket);
				}else{
					basket.quantity--;
				}
			},
			incQuantity:function(basket){
				basket.quantity++;
			},
			removeFromBasket:function(basket){
				this.baskets.splice(this.baskets.indexOf(basket));
			}
		},
		computed:{
			total:function(){
				let totalCost = 0;
				for(let item in this.baskets){
					let individualItem = this.baskets[item];
					totalCost += individualItem.quantity * individualItem.price;
				}
				return totalCost;
			}
		}
	}
</script>

<style scoped>
	.num{
		margin:0 5px;
	}
	.size{
		color: red;
		margin-left: 5px;
	}
</style>