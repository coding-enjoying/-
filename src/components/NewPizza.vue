<template>
	<form>
		<h4 class="text-muted my-5">新品添加</h4>
		<div class="form-group row">
			<label class="col-sm-1">名称</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.val1">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea class="form-control" rows="5" v-model="newPizza.val2"></textarea>
			</div>
		</div>
		<p><strong>选项一</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.val3">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.val4">
			</div>
		</div>
		<p><strong>选项二</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.val5">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.id">
			</div>
		</div>
		<button type="button" class="btn btn-block btn-success" @click="addMenuItem">添加</button>
	</form>
</template>

<script>
	export default{
		data(){
			return{
				newPizza:{}
			}
		},
		methods:{
			addMenuItem:function(){
				console.log(this.newPizza)
				// let data = {
				// 	name:this.newPizza.name,
				// 	description:this.newPizza.description,
				// 	options:[
				// 		{
				// 			size1:this.newPizza.size1,
				// 			price1:this.newPizza.price1
				// 		},
				// 		{
				// 			size2:this.newPizza.size2,
				// 			price2:this.newPizza.price2
				// 		}
				// 	]
				// }
				// //将数据传入到数据库中  axios vue-resource fetch
				fetch(`http://47.106.196.15:8080/obj?val1=${this.newPizza.val1}&val2=${this.newPizza.val2}&val3=张88&val4=张88&val5=55`,{
					method:"POST"
					// headers:{
					// 	"Content-type":"application/json"
					// },
					// body:JSON.stringify(data)
				})
				.then(
					function(res){
				        // if(res.status!==200){
				        //     // console.log("存在一个问题，状态码为："+res.status);
				        //     return;
				        // }
				        // //检查响应文本
				        res.json().then((data) => {
				            console.log(data);
				        });
				    }
				)
				// .then(data => this.$router.push('menu'))
				// .then(err => console.log(err))
			}
		}
	}
</script>