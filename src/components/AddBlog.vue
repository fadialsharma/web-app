<template>
  <div id="add-blog">
    <h3>{{ title }}</h3>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input
        type="text" v-model="blog.title" placeholder="Blog title" required
      />
      <label>Blog content:</label>
      <!-- using lazy -->
      <textarea v-model.lazy="blog.content" placeholder="Blog content"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="Agree to tearms and conditions" v-model="blog.terms" required />
        <label>Agree to tearms and conditions</label>
        <input type="checkbox" value="Agree to receive emails" v-model="blog.terms"
          required />
        <label>Agree to receive emails</label>
      </div>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors" v-bind:key="index">
          {{ author }}
        </option>
      </select>
      <button v-on:click.prevent="addBlog">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Blog has submitted</h3>
    </div>

    <div id="preview">
      <h3>{{ preview }}</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: {{ blog.content }}</p>
      <p>Blog checkboxes:</p>
      <ul>
        <li v-for="(term, index) in blog.terms" v-bind:key="index">
          {{ term }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Add a blog page",
      preview: "Preview section",
      blog: {
        title: "",
        content: "",
        terms: [],
        author: "",
      },
      authors: ["Fadi", "Salam"],
      submitted: false
    };
  },
  methods: {
    addBlog: function() {
      this.$http.post("http://jsonplaceholder.typicode.com/posts",
      {
          userId: 1,
          id: 1,
          title: this.blog.title,
          content: this.blog.content,
          author: this.blog.author,
          terms: this.blog.terms,
          completed: false,
        }).then(function(data) {
          console.log(data);
          this.submitted = true
        });
    },
  },
};
</script>

<style scoped>
#add-blog {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
  margin: 10px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
#checkboxes input,
#checkboxes label {
  display: inline-block;
}
#checkboxes label {
  margin-left: 10px;
}
</style>