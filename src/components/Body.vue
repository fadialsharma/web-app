<template>
    <div id="services">
        <ul>
            <li v-for="(service, index) in services" v-bind:key="index" v-on:click="service.show = !service.show">
                <h2>{{ service.name }}</h2>
                <span> {{service.message}} </span>
                <p v-show="service.show">{{ service.availability }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {name: 'Web Development', message: 'Click to see the availability',availability: 'Yes', show: false},
                {name: 'Web Design', message: 'Click to see the availability',availability: 'Yes', show: false},
                {name: 'Graphic Design', message: 'Click to see the availability', availability: 'Yes', show: false},
                {name: 'Server Administrator', message: 'Click to see the availability', availability: 'Yes', show: false},
                {name: 'IT Support', message: 'Click to see the availability', availability: 'Yes', show: false},
                {name: 'Game Programming', message: 'Click to see the availability', availability: 'No', show: false}
            ]
        }
    }
}
</script>

<style scoped>
#services{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>