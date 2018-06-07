<template>
    <el-select v-model="selectedValue" clearable :placeholder="placeText" @change="handleChange">
        <!--<el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>-->
        <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item">
        </el-option>
    </el-select>
</template>

<script>
	export default {
		props:["compValue","options","placeholderText"],
		data() {
			return {
				placeText: "请选择内容",
                selectedValue:""
			}
		},
		mounted: function() {
			this.placeText = this.placeholderText||this.placeText;
			this.selectedValue = this.compValue;
		},
		methods: {
			handleChange(val){
				console.log("select compValue",val)
				this.$emit('update:compValue', val)
            }
		},
		watch:{
			"compValue"(curVal,oldVal){
				this.selectedValue = this.compValue;
			}
		}
	}
</script>
<style>
    .el-select{
        height: 40px;
        width: 200px;
        line-height: 40px;
    }
</style>