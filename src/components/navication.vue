<template>
  <!-- <div id="app"> -->
    <ul>
      <li v-for="(nav, index) in navs" v-bind:key="index">{{ nav }}</li>
    </ul>
    <!-- </div> -->
</template>

<script>

export default {
  data() { // data() is a function in ES6
    return {
    //   render an array
        navs: ['Home', 'About', 'Skills', 'Contact']
    }
  }
}
</script>

<style>
</style>