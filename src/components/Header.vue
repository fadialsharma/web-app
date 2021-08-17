<template>
    <header>
        <div class="header-container">
            <div class="col-3">
                <div class="logo">{{logoTitle}}</div>
            </div>
            <div class="col-3">
                <ul>
                    <li v-for="(nav, index) in navication" v-bind:key="index">{{ nav }}</li>
                </ul>
            </div>
            <div class="col-3">
                <div class="search">{{SearchTitle}}</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['navication'],
    data() {
        return {
            logoTitle: 'Logo',
            SearchTitle: 'Search'
        }
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