<template>
    <div :id="compId">
        <el-input
                :placeholder="placeholderText"
                v-model="inputText"
                clearable  @change="handleChange">
        </el-input>
    </div>
</template>

<script>
	export default {
		props:["compValue","placeholderText","compWidth","compId"],
		data() {
			return {
				placeText: "请输入内容",
				inputText:""
			}
		},
		mounted: function() {
			this.inputText = this.compValue||"";
			this.placeholderText = this.placeholderText||this.placeText;
			if(this.compWidth && this.compId){
				$("#"+this.compId+" .el-input").css("width",this.compWidth+"px")
			}
		},
		methods: {
			handleChange(val){
				this.$emit('update:compValue', val)
            }
		},
        watch:{
			"compValue"(curVal,oldVal){
				this.inputText = this.compValue||"";
            },
            "compWidth"(curVal,oldVal){
				if(this.compWidth && this.compId){
					$("#"+this.compId+" .el-input").css("width",this.compWidth+"px")
                }else{
					$("#"+this.compId+" .el-input").css("width","200px")
                }

            }
        }
	}
</script>
<style scoped>
    .el-input{
        width: 200px;
        height: 40px;
    }
    div{
        display: inline-block;
    }
</style>