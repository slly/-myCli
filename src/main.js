import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes:[
		{ path: '/index', component:require('./components/index/index.vue'),meta:{'keepAlive':true}},
		{ path: '/demo', component:require('./components/demo/demo.vue'),meta:{'keepAlive':true}},
		//未匹配到任何路由时自动跳转到index路由
		{ path: '*', redirect:'/index'}
    ]
})

window.$vm_ = new Vue({
        router,
        render: h => h(App),
        data: {
            eventHub: new Vue()
        }
}).$mount('#app')