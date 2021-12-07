// Controll everything. It runs when we run this application
import Vue from 'vue'
// import app.vue root component to our main.js file
import App from './App.vue'

// Import Vue Resource package for HTTP request
import VueResource from 'vue-resource'
Vue.use(VueResource);

// Custom Directives
Vue.directive('rainbow', {
  bind(el) {
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

// Register component
// Vue.component('app-component', component);
Vue.config.productionTip = false

new Vue({
  // reender our app.vue root component to our Vue instance
  render: h => h(App),
}).$mount('#app')
