<template>
  <div id="app">
    <app-header v-bind:navication="navication" />
    <app-body />
    <app-footer v-bind:navication="navication"/>
  </div>
</template>

<script>
// export const bus = new Vue();

import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  data() {
    return {
        navication: ['Home', 'About','Services','Contact'],
    }
  },
  components: {
    'app-header': Header,
    'app-body': Body,
    'app-footer': Footer,
  }
}
</script>

<style>
body {
    margin: 0 auto !important;
    width: 100% !important;
    display: block !important;
    color: #273849;
    /* max-width: 1024px; */
}
</style>