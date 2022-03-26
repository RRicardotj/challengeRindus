import SimpleLayout from '@/components/SimpleLayout.vue';
import PostCard from './PostCardImplementation.vue';
import { deletePost } from '@/services/postService';

export default {
  name: 'HomeView',
  components: {
    SimpleLayout,
    PostCard,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    isLoadingPosts() {
      return this.$store.state.isLoadingPosts;
    },
  },
  methods: {
    goToCreatePost() {
      this.$router.push('/create-post');
    },
    async deletePost(id) {
      if (!id) return;

      try {
        await deletePost(id);

        this.posts = this.posts.filter((post) => post.id !== id);
      } catch {
        console.log('deletePost failed');
      }
    },
  },
};
