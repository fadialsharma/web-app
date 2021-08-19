<template>
    <header>
        <div class="header-container">
            <div class="col-3">
                <div class="logo" v-on:click="changeLogo">{{logoTitle}}</div>
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
    props: ['navication'],
    data() {
        return {
            logoTitle: 'Logo',
            SearchTitle: 'Search'
        }
    },
    methods: {
        deleteNavItem: function() {
            this.navication.pop()
        },
        changeMenuItem: function() {
            this.navication = 'Tickd'
            //this.titlChange
            //bus.$emit('titlChange', 'Ticked')
        },
        //changeLogo: function() {
          //  this.logoTitle = 'clicked'
            //bus.$emit('changeLogoText', 'clicked');
        //}
    }
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