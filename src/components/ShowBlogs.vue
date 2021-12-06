<template>
    <div id="show-blogs">
    <h3>Show blogs</h3>
    <p>Fetch data from dummy api</p>
        <div v-for="(blog, index) in blogs" v-bind:key="index" class="single-blog">
          <h4>{{ blog.title }}</h4>
          <article>{{ blog.body }}</article>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
      console.log(data);
      this.blogs = data.body.slice(0,10)
    });
  }
}
</script>

<style scoped>
#show-blogs {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.single-blog {
  display: block;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  padding: 24px;
}
</style>