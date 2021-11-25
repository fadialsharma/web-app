<template>
    <header>
        <div class="header-container">
            <div class="col-3">
                <div class="logo" @click="changeLogo()">{{logoTitle}}</div>
            </div>
            <div class="col-3">
                <ul>
                    <li v-for="(nav, index) in navication" v-bind:key="index" v-on:click="changeMenuItem">{{ nav }}</li>
                </ul>
            </div>
            <div class="col-3">
                <div class="search">
                    <button v-on:click="deleteNavItem">Pop the navication items</button>
                    <!-- <button v-on:click="deleteMenuItem">Pop menu items</button> -->
                </div>
            </div>
        </div>

    </header>
</template>

<script>
//import { bus } from '../main'
export default {
    props: {
      navication: Array,
      logoTitle: String
    },
    data() {
        return {
            SearchTitle: 'Search'
        }
    },
    methods: {
        deleteNavItem: function() {
            this.navication.pop()
        },
        changeMenuItem: function() {
            this.navication = 'Tickd'
        },
        changeLogo: function() {
           // this.logoTitle = 'clicked'
          console.log('clicked will be the new name of the logo', );
          this.$emit('change-logo-text', 'clicked');
        }
    },
    // Life cycle hooks
    beforeCreate() {
        // Fire code before the inst created
        // alert(" Life Cycle hook beforeCreate");
    },
    created() {
        // Fire when component gets created. Good for fetching data
        // alert(" Life Cycle hook Created");
    },
    beforeMount (){
        // Fire before mounting the DOM
        // alert(" Life Cycle hook beforeMounted");
    },
    mounted() {
        // Fire when the DOM mounted. Good for minipulated the DOM once it's mounted
        // alert(" Life Cycle hook Mounted");
    },
    beforeUpdate() {
        alert(" Life Cycle hook beforeUpdated");
    },
    updated() {
        alert(" Life Cycle hook updated");
    },
}
</script>

<style scoped>
header {
    background: #3FB983;
}
.header-container {
    display: flex;
    max-width: 1280px;
    padding: 15px;
    margin: 0 auto;
}
.header-container .col-3 {
    width: 33.333%;
}
.header-container .col-3 .search{
    text-align: right;
}
ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
li {
    list-style: none;
}
</style>

