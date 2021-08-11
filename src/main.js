// Controll everything. It runs when we run this application
import Vue from 'vue'
// import app.vue root component to our main.js file
import App from './App.vue'
import navs from './components/navication.vue'

Vue.component('navication', navs);

Vue.config.productionTip = false

new Vue({
  // reender our app.vue root component to our Vue instance
  render: h => h(App),
}).$mount('#app')
