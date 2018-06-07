<template>
    <div :id="'jsonEditorView_'+jsonEditorName" class="jsonEditorView" :style="{'height':compHeight+'px'}">
        <el-button class="saveJsonBtn" size="mini" @click="saveJson">保存JSON配置</el-button>
    </div>
</template>

<script>
	export default {
		props:["compValue","jsonEditorName","compHeight"],
		data() {
			return {
				jsonData: "",
			}
		},
		mounted: function() {
			if(this.compValue!=="" && JSON.stringify(this.compValue)!=="[]"){
				this.jsonData = typeof(this.compValue)=="string"?JSON.parse(this.compValue):this.compValue;
            }else{
				this.jsonData = {};
            }

			var self_ = this;
			var container = document.getElementById('jsonEditorView_'+this.jsonEditorName);
			var options = {
				mode: "code",
				onError: function (err) {
					alert(err.toString());
				}
			};
			this.jsonEditor = new JSONEditor(container, options,this.jsonData);
		},
		methods: {
			saveJson(){
				// this.$emit('update:compValue', this.jsonEditor.getText()||"{}");
				this.$emit('checkValue',this.jsonEditorName,this.jsonEditor.getText()||"{}");
            }
		},
        watch:{
			"compValue"(curVal,oldVal){
				if(this.compValue!=="" && JSON.stringify(this.compValue)!=="[]"){
					this.jsonData = typeof(this.compValue)=="string"?JSON.parse(this.compValue):this.compValue;
				}else{
					this.jsonData = {};
				}
				this.jsonEditor.set(this.jsonData);
			}
        }
	}
</script>
<style>
    .jsonEditorView{
        width: 600px;
        height: 400px;
        position: relative;
    }
    .saveJsonBtn{
        position: absolute;
        right: 10px;
        top: 4px;
        z-index: 10;
    }
</style>