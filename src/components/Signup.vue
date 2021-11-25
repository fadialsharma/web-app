<template>
    <div id="signup">
      <div id="form-heading">
        <h3> {{title}} </h3>
        <p>Please fill up the fields below</p>
      </div>
      <div id="form-fields">
        <label>Enter your first name:</label>
        <input type="text" placeholder="Enter your first name" />
        <label>Enter your last name</label>
        <input type="text" placeholder="Enter your last name" />
        <label>Enter your email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Enter your password</label>
        <input type="password" placeholder="Enter a strong password" />
      </div>
      <div slot="form-submit">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            title: "Sign up"
        }
    },
    methods: {
        handleSubmit: function(){
            return {

            }
        }
    }
}
</script>

<style scoped>

#signup{
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
input[type="text"], input[type="email"], input[type="password"] {
    display: block;
    width: 100%;
    padding: 8px;
    margin: 10px;
}

</style>