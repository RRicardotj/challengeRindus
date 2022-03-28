export default {
  name: 'PostView',
  computed: {
    post() {
      return this.$store.state.postsFound[this.$route.params.postId];
    },
    isLoadingPost() {
      if (!this.post) return true;

      return this.post.isLoading;
    },
  },
  methods: {
    fetchPost() {
      this.$store.dispatch('getPost', this.$route.params.postId);
    },
  },
  mounted() {
    if (!this.post) {
      this.fetchPost();
    }
  },
};
