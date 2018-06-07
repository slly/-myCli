<template>
    <div id="indexContent">
        <el-header>欢迎使用myCli</el-header>
        <div class="indexMain">
            
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted:function(){
			
		},
		methods: {

		}
	};
</script>

<style scoped>
    #indexContent{
        height: 100%;
        margin-left: 20px;
    }
    .el-header{
        padding-left: 0;
        color: #606266;
        line-height: 60px;
        text-align: left;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
    }
    .indexMain{
        margin-top: 20px;
        height: calc(100% - 120px);
        background-color: #ffffff;
        padding: 20px;
        overflow-y: auto;
    }
</style>
