<template>
  <div class="prev-next-container">
    <div v-if="prev" class="prev">
      <nuxt-link v-if="prev" :to="{ params: { slug: prev.slug } }">
        上一篇：{{ prev.slug }}
      </nuxt-link>
    </div>
    <br />
    <div v-if="next" class="next">
      <nuxt-link v-if="next" :to="{ params: { slug: next.slug } }">
        下一篇：{{ next.slug }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    prev: {
      type: Object,
      default: null,
    },
    next: {
      type: Object,
      default: null,
    },
  },
}
</script>
