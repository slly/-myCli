<template>
    <div id="compContent">
        <el-header>component demo</el-header>
        <div class="compMain">
        	<template v-if="showData">
				<el-form :model="compListKey" :rules="rules" ref="compListKey" label-width="150px" status-icon>
		        	<template v-for="(item,index) in compList">
		        		<el-form-item :label="item.label" :prop="item.key">
		        			<component :is="item.type" :comp-value.sync="compListKey[item.key]" :placeholder-text="item.placeholder" :options="item.items||[]" :json-editor-name="item.key" :comp-width="item.width" :comp-height="item.height" :comp-id="item.key" v-on:checkValue="checkCompValue"></component>
		        		</el-form-item>
		        	</template>
			        <el-form-item>
		                <el-button type="primary" @click="submitForm('compListKey')">确定</el-button>
		            </el-form-item>
	            </el-form>
        	</template>
        </div>
    </div>
</template>

<script>
	import Base from "./../../common/componentBase";
	export default {
		mixins: [Base],
		data() {
			return {
				showData:false,
				rules:{},
				compListKey:{},
				compList:[
					{
						"type": "einput",
						"key": "theme",
		                "label": "主题名",
		                "require": true,
		                "value": "",
		                "placeholder": "请输入主题名",
		                "width":200
					},
					{
						"type": "ejson",
						"key": "level",
		                "label": "场次",
		                "require": true,
		                "value": {level:1},
		                "placeholder": ""
					},
					{
						"type": "echeckbox",
						"key": "country",
		                "label": "国家",
		                "require": true,
		                "value": ["中国"],
		                "items":["中国","俄罗斯","巴基斯坦"],
		                "placeholder": ""
					},
					{
						"type": "eicheckbox",
						"key": "city",
		                "label": "城市",
		                "require": true,
		                "value": ["深圳","广州","汕头"],
		                "items":["深圳","广州","汕头"],
		                "placeholder": ""
					},
					{
						"type": "eradio",
						"key": "month",
		                "label": "月份",
		                "require": true,
		                "value": "七月",
		                "items":["六月","七月","八月"],
		                "placeholder": ""
					},
					{
						"type": "eselect",
						"key": "day",
		                "label": "日期",
		                "require": false,
		                "value": "13",
		                "items":["10","11","12","13","14","15","16","17"],
		                "placeholder": "请选择日期"
					}
				]
			}
		},
		mounted:function(){
			var temp;
			for(var j=0;j<this.compList.length;j++){
				temp = this.compList[j];
				this.compListKey[temp.key] = temp.value;
				this.rules[temp.key] = { required: true, message: '请输入'+temp.label, trigger: 'blur' }
			}
			setTimeout(()=>{this.showData = true},0)
		},
		methods: {
			submitForm(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log('success submit!!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			checkCompValue(key,val){
				console.log(key,val)
            }
		}
	};
</script>

<style scoped>
    #compContent{
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
    .compMain{
        margin-top: 20px;
        height: calc(100% - 120px);
        background-color: #ffffff;
        padding: 20px;
        overflow-y: auto;
    }
</style>
