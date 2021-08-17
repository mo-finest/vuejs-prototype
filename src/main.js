import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";
import './assets/CSS/fonts.css'
import './assets/CSS/tailwind.css'
stockInit(Highchart);
Vue.use(HighchartsVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
