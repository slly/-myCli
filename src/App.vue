<template>
    <div id="pageMain" v-if="showView">
        <el-header>
            <span>Slly'myCli</span>
        </el-header>
        <el-container class="container_app">
            <menu-list></menu-list>
            <el-container>
                <!-- 这里是需要keepalive的 -->
                <div class="containRouter">
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <!-- 这里不会被keepalive -->
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </div>
            </el-container>
        </el-container>
       	
    </div>
</template>
<script>
	import menuList from './components/public/menu.vue'
	export default {
		data: function () {
			return {
                showView:false
            }
		},
		mounted: function () {
			this.showView = true;
		},
		methods: {
			
		},
		components: {
			menuList
		},
		watch: {
			
		},
	}
</script>
<style scoped>
    #pageMain {
        width: 100%;
        height: 100%;
    }
    .containRouter {
        width: 100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .container_app {
        height: calc(100% - 60px);
    }
    .el-header {
        background-color: #606266;
        color: #ffffff;
        line-height: 60px;
        text-align: left;
        font-size: 20px;
        font-weight: bold;
    }
</style>