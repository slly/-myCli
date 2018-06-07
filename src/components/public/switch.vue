<!--
    使用active-text属性与inactive-text属性来设置开关的文字描述。
-->
<template>
    <el-switch
            v-model="switchValue"
            active-text=""
            inactive-text=""
            @change="handleChange">
    </el-switch>
</template>

<script>
	export default {
		props:["compValue","leftText","rightText"],
		data() {
			return {
				switchValue:0,
			}
		},
		mounted: function() {
			this.switchValue = this.compValue?true:false;
		},
		methods: {
			handleChange(val){
				console.log("el-switch",val);
				val?this.$emit('update:compValue', 1):this.$emit('update:compValue', 0);
			}
		},
		watch:{
			"compValue"(curVal,oldVal){
				this.switchValue = this.compValue?true:false;
			}
		}
	}
</script>

<style>
.el-switch{
    height: 40px;
    line-height: 40px;
}
.el-switch__label{
    height: 40px;
    line-height: 40px;
}
</style>