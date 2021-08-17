<template>
    <footer>
        <div class="footer-container">
            <div class="col-3">
                <h3>{{navTitle}}</h3>
                <ul>
                    <li v-for="(nav, index) in navication" v-bind:key="index">{{nav}}</li>
                </ul>
            </div>
            <div class="col-3">
                <h3>{{subscribeTitle}}</h3>
            </div>
            <div class="col-3">
                <h3>{{mapTitle}}</h3>
            </div>
        </div>
        <div class="copyrights">
            <p>{{copyrights}}</p>
        </div>
    </footer>
</template>

<script>
// import
export default {
    props: ['navication'],
    data() {
        return {
            copyrights: 'All Rights Reserved. Designed by Fadi Asharma.',
            navTitle: 'Navication',
            subscribeTitle: 'Subscribe',
            mapTitle: 'Map',

        }
    }
}
</script>

<style scoped>
footer {
    background: #34495E;
    color: white;
}
.footer-container {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px;
}
.footer-container .col-3 {
    width: 33.333%;
}
.footer-container .col-3 ul {
    text-align: left;
    list-style: none;
    padding: 0px 15px;
}
.footer-container .col-3 ul li{
    margin: 15px 0px;
    text-decoration: underline;
}
footer .copyrights {
    text-align: center;
    padding: 0px 0px 32px 0px;
}
</style>