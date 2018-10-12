<template>
	<div class="container">
		<div class="row mb-5">
			<!-- 左侧导航栏 -->
			<div class="col-4">
				<div class="list-group mb-5">
					<router-link tag="li" class="nav-link" :to='{name:"historyLink"}'><a class="list-group-item list-group-item-action">历史订单</a></router-link>
					<router-link tag="li" class="nav-link" :to='{name:"contactLink"}'><a class="list-group-item list-group-item-action">联系我们</a></router-link>
					<router-link tag="li" class="nav-link" :to='{name:"orderLink"}'><a class="list-group-item list-group-item-action">点餐信息</a></router-link>
					<router-link tag="li" class="nav-link" :to='{name:"deliveryLink"}'><a class="list-group-item list-group-item-action">快递</a></router-link>
				</div>
			</div>

			<!-- 右侧对应信息展示 -->
			<div class="col-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.col-8{
		margin-top:7px;
	}
</style>