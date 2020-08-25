<template>
  <div class="blog-container">
    <h3>{{ article.slug }}</h3>

    <hr />

    <PrevNext :prev="prev" :next="next"></PrevNext>

    <p>更新于: {{ formatDate(article.updatedAt) }}</p>

    <hr />

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
let mermaid
if (process.client) {
  mermaid = require('mermaid')
}

export default {
  async asyncData({ $content, params }) {
    const [prev, next] = await $content('blogs')
      .only(['slug'])
      .sortBy('createAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article: await $content('blogs', params.slug).fetch(),
      prev,
      next,
    }
  },
  data() {
    return { article: null, prev: null, next: null }
  },
  mounted() {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'forest',
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
      },
    })
    mermaid.init(undefined, document.querySelectorAll('.language-text>code'))
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('zh', options)
    },
  },
}
</script>

<style lang="less" scoped>
.blog-container {
  width: 100vw;
  padding: 24px 48px;
}
</style>
