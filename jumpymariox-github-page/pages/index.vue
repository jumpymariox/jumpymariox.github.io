<template>
  <div class="index-container">
    <nav>
      <img src="~assets/leave.svg" />
      <span class="nav-title">jumpymariox</span>
    </nav>
    <div class="content">
      <aside></aside>
      <div class="inner-content">
        <ul>
          <li v-for="blog in blogs" :key="blog.slug">
            <nuxt-link :to="'blog/' + blog.slug + '/'">{{
              blog.slug
            }}</nuxt-link>
          </li>
        </ul>
      </div>
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
    display: flex;
    padding-left: 45px;
    height: 40px;
    background-color: #598987;
    > img {
      position: absolute;
      top: 2px;
      left: 10px;
      width: 35px;
    }
    .nav-title {
      margin-left: 5px;
      font-family: cursive;
      line-height: 36px;
      color: white;
    }
  }
  .content {
    display: flex;
    background-color: #f2dfc5;

    aside {
      width: 150px;
      background-color: #ffaa8d;
    }
    .inner-content {
      flex: 1;
      li {
        line-height: 1.5;
      }
      a {
        text-decoration: none;
        color: #565656;
        transition: 0.3s;

        &:hover {
          color: #b87d38;
        }
      }
    }
  }
}
</style>
