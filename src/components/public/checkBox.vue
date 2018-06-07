<!--
    checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。
    el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。
    label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
-->
<template>
    <el-checkbox-group v-model="checkList" @change="handleCheckedItemsChange">
        <el-checkbox v-for="item in options" :label="item" :key="item"></el-checkbox>
    </el-checkbox-group>
</template>

<script>
	export default {
		props:["compValue","options"],
		data () {
			return {
				checkList: []
			};
		},
        mounted: function() {
			this.checkList = this.compValue||[];
		},
		methods: {
			handleCheckedItemsChange(val){
				console.log("checkbox compValue",val);
				this.$emit('update:compValue', val)
            }
		},
		watch:{
			"compValue"(curVal,oldVal){
				this.checkList = this.compValue||[];
			}
		}
	};
</script>

<style>


</style>