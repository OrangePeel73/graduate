// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vee-validate
import VeeValidate from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN' // 引入中文包，提示信息可以以中文形式显示
import VueI18n from 'vue-i18n'

import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import store from './store'

//  注册全局的组件
import '@/components/global.js'
import '@/components'

Vue.config.productionTip = false

// vee-vlidate
// 表单验证 中文显示
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zhCN'
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zhCN
  },
  delay: 0.5,
  events: 'blur',  // **input|blur** 在用户输入和表单失去焦点时都进行校验 可单独写  blur或input
  inject: true,
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  validity: false
})

// Vue.use(Validate)
Vue.config.productionTip = false
// const i18n = new VueI18n({
//   locale: 'zh_CN'
// })
// const config = {
//   aria: true,
//   classNames: {},
//   classes: false,
//   delay: 0,
//   // dictionary: null,
//   errorBagName: 'errors', // change if property conflicts
//   events: 'input|blur',
//   fieldsBagName: 'fields',
//   // i18n: null, // the vue-i18n plugin instance
//   i18n, // the vue-i18n plugin instance
//   i18nRootKey: 'validations', // the nested key under which the validation messsages will be located
//   dictionary: {
//     zhCN
//   },
//   inject: true,
//   locale: 'zh_CN',
//   strict: true,
//   validity: false
// }

// Vue.use(VeeValidate, config)

Vue.use(Vuex)
// elementUI 全局配置默认为small
Vue.use(ElementUI)
// Vue.use(Element, { size: 'small' })
Vue.use(VueLodash, lodash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.name === 'admin') { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath} // 路由重定向
      })
    }
  } else {
    next()
  }
})
