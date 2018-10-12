<template>
	<div class="card text-dark bg-light mb-3">
		<div class="card-header">
			快递信息
		</div>
		<div class="card-body">
			<h4 class="card-title">快递信息</h4>
			<router-link class="card-text" :to="{name:'deliveryInfoLink'}">详情...</router-link>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	
</style>