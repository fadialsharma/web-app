<template>
  <div id="app">
    <app-header
      v-bind:navication="navication"
      @change-logo-text="changeLogoFromApp"
      :logoTitle="logoName"
    />
    <app-body />
    <div class="forms">
      <button v-on:click="component = 'app-signup' ">Signup form</button>
      <button v-on:click="component = 'app-loginForm' ">Login Form</button>
      <button v-on:click="component = 'add-blog' ">Add blog</button>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
    </div>
    <app-InBody />

    <app-footer v-bind:navication="navication" />
  </div>
</template>

<script>
// export const bus = new Vue();

import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
import Signup from "./components/Signup.vue";
import LoginForm from "./components/LoginForm.vue";
import AddBlog from "./components/AddBlog.vue";

export default {
  data() {
    return {
      navication: ["Home", "About", "Services", "Contact"],
      logoName: "my logo name",
      component: "component",
    };
  },
  components: {
    "app-header": Header,
    "app-body": Body,
    "app-footer": Footer,
    "app-signup": Signup,
    "app-loginForm": LoginForm,
    "add-blog": AddBlog,
  },
  methods: {
    changeLogoFromApp(newName) {
      this.logoName = newName;
      console.log("newName FROM APP", newName);
    }
  }
};
</script>

<style>
body {
  margin: 0 auto !important;
  width: 100% !important;
  display: block !important;
  color: #273849;
  /* max-width: 1024px; */
}
.forms {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>