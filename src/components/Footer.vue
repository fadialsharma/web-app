<template>
    <footer>
        <div class="footer-container">
            <p>{{copyrights}}</p>
        </div>
    </footer>
</template>

<script>
// import
export default {
    data() {
        return {
            copyrights: 'All Rights Reserved. Designed by Fadi Asharma.'
        }
    }
}
</script>

<style scoped>
footer {
    background: black;
    color: white;
}
.footer-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
}
</style>