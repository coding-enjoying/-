<template>
	<div class="row">
		<!-- 添加新pizza -->
		<div class="col-sm-12 col-md-8">
			<new-pizza></new-pizza>
		</div>
		<!-- 新pizza展示 -->
		<div class="col-sm-12 col-md-4">
			<h4 class="text-muted my-5">新品列表</h4>
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td><button class="btn btn-sm btn-outline-danger">&times</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza'
	export default{
		components:{
			"new-pizza":NewPizza
		},
		methods:{
			delete:function(){

			}
		}
	}
</script>

<style>
	
</style>