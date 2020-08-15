<template>
  <div class="container">
    <h3>{{ article.slug }}</h3>

    <prev-next :prev="prev" :next="next"></prev-next>

    <p>更新于: {{ formatDate(article.updatedAt) }}</p>

    <p>目录</p>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log('asyncData', params)
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article: await $content('articles', params.slug).fetch(),
      prev,
      next,
    }
  },
  data() {
    return { article: null, prev: null, next: null }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('zh', options)
    },
  },
}
</script>

<style>
.container {
  width: 100vh;
}
</style>
