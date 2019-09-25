import App from './App'
import Vue from 'vue'
import router from './router'
import VCharts from '../src/index.es'
import CodeSection from './components/code-section'

Vue.component(CodeSection.name, CodeSection)
Vue.use(VCharts, {
  theme: 'default'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
