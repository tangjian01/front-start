import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(antd)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted:function () {
  },
  method:{}
})
