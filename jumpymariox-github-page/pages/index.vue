<template>
  <div class="index-container">
    <nav>
      <h2 class="nav-title">Jumpymariox Github Page</h2>
    </nav>
    <div class="content">
      <h4>
        Blogs
      </h4>
      <ul>
        <li v-for="blog in blogs" :key="blog.slug">
          <nuxt-link :to="'blog/' + blog.slug + '/'">{{ blog.slug }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blogs').sortBy('createAt', 'asc').fetch()
    return { blogs }
  },
  data() {
    return {
      blogs: [],
    }
  },
}
</script>

<style lang="less" scoped>
ul,
li {
  list-style: none;
}
.index-container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  nav {
    background-color: #3b8070;
    .nav-title {
      color: white;
    }
  }
  .content {
    padding: 24px 48px;
  }
}
</style>
