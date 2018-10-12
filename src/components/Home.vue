<template>
	<div>
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝pizza</h1>
				<h3>这里有你最喜欢的pizza</h3>
				<button @click="goToOrder" class="btn btn-success">let's order</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goToOrder:function(){
				this.$router.push('/menu');
			}
		}
	}
</script>

<style scoped>
	#home{
		background:url('../../src/assets/pizza.jpg');
		height: 85vh;
		padding:10%;
	}
	h1,h3{
		margin:6%;
	}
	.background{
		background-color: #eee;
		opacity: 0.8;
		max-width:65vw; 
		margin:0 auto; 
		padding:20px 0;
	}
</style>