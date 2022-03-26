import SimpleLayout from '@/components/SimpleLayout.vue';
import PostCard from './PostCardImplementation.vue';
import { getAll, deletePost } from '@/services/postService';

export default {
  name: 'HomeView',
  components: {
    SimpleLayout,
    PostCard,
  },
  data: () => ({
    posts: [],
  }),
  methods: {
    goToCreatePost() {
      this.$router.push('/create-post');
    },
    async getAllPosts() {
      try {
        const { data } = await getAll();

        this.posts = data;
      } catch (e) {
        // this should be handler with an error handler implementing some toast to show notifications
        this.posts = null;
      }
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
  mounted() {
    if (this.posts && !this.posts.length) {
      this.getAllPosts();
    }
  },
};
