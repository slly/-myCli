<!--
    checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。
    el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。
    label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
    indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
-->
<template>
    <div id="iCheckBox">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div class="marginDiv"></div>
        <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
            <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
	// const itemOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		props:["compValue","options"],
		data () {
			return {
				checkAll: false,
				checkedItems: [],
				items: [],
				isIndeterminate: true
			};
		},
		mounted: function() {
			this.checkedItems = this.compValue||[];
			this.items = this.options;
			var checkedNum = this.checkedItems.length;
			if(checkedNum > 0 && checkedNum < this.items.length){
				this.isIndeterminate = true;
			}else{
				this.checkAll = checkedNum === this.items.length;
				this.isIndeterminate = false;
			}
		},
		methods: {
			handleCheckAllChange(val) {
				this.checkedItems = val ? this.items : [];
				this.isIndeterminate = false;
				this.$emit('update:compValue', this.checkedItems)
			},
			handleCheckedItemsChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.items.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
				this.$emit('update:compValue', value)
			}
		},
		watch:{
			"compValue"(curVal,oldVal){
				this.checkedItems = this.compValue||[];
			},
			"options"(curVal,oldVal){
				this.items = this.options;
			}
		}
	};
</script>

<style scoped>
    .marginDiv{
        margin: 6px 0;
    }
</style>