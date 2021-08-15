<template>
    <header>
        <ul>
            <li v-for="(nav, index) in navication" v-bind:key="index">{{ nav }}</li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navication: ['Home', 'About','Services','Contact']
        }
    }
}
</script>


<style scoped>
header {
    background: lightblue;
}
ul {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    max-width: 1280px;
    margin: 0 auto;
}
li {
    list-style: none;
}
</style>