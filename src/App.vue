<template>
  <router-view></router-view>
</template>

<style lang="sass">
@import './scss/normalize.scss'
</style>

<script>
export default {
  name: 'App',
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      if (!this.posts.length) {
        this.$store.dispatch('getAllPosts');
      }
    },
  },
};
</script>
