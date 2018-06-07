<template>
    <el-radio-group v-model="selectedValue" @change="handleChange">
        <el-radio v-for="item in options" :label="item" :key="item">{{item}}</el-radio>
    </el-radio-group>
</template>

<script>
	export default {
		props:["compValue","options"],
		data() {
			return {
                selectedValue:"",
                selectItems:[]
			}
		},
		mounted: function() {
            this.selectedValue = this.compValue||"";
            // this.selectItems = this.options;
		},
		methods: {
			handleChange(){
				console.log("radio compValue",this.selectedValue);
				this.$emit('update:compValue', this.selectedValue)
            }
		},
		watch:{
			"compValue"(curVal,oldVal){
				this.selectedValue = this.compValue||"";
			},
			/*"options"(curVal,oldVal){
				this.selectItems = this.options;
			}*/
		}
	}
</script>
<style>
    .el-radio-group{
        height: 40px;
        line-height: 50px;
    }
</style>