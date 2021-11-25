<template>
    <div id="login">
        <h3>{{title}}</h3>
        <form>
            <label>Enter your email address:</label>
            <input type="email" placeholder="Enter Your Email" />
            <lable>Enter your password:</lable>
            <input type="password" placeholder="Enter Your Password" />
            <br/>
            <button type="submit" value="Submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
        title: "User Login"
        }
    }
}
</script>

<style scoped>
#login {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

label{
    display: block;
    margin: 20px 0 10px;
}
input[type="email"], input[type="password"]{
    display: block;
    width: 100%;
    padding: 8px;
    margin: 10px;
}


</style>