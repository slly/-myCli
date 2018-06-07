<template>
    <el-aside>
        <el-menu :default-openeds="['1','3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>默认</template>
                    <el-menu-item index="1-1" @click="selectMenu('index')">默认页面</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-tickets"></i>demo</template>
                    <el-menu-item index="2-1" @click="selectMenu('demo')">demo页面</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
	export default {
		data: function() {
			return {
                routerName:''
			}
		},
		mounted: function() {
            this.routerName = window.location.hash.split("/")[1];
		},
		methods: {
			selectMenu(type){
				this.routerName = '';
				this.$router.push(type)
			}
		},
	}
</script>

<style scoped>
    .el-aside{
        background-color: rgb(238, 241, 246);
    }
    .el-menu{
        font-size: 18px;
        height: 100%;
    }
    .el-menu-item.is-active{
        background-color: #dde9f5;
    }
</style>