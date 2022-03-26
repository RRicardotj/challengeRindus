import SimpleLayout from '@/components/SimpleLayout.vue';
import PostCard from './PostCardImplementation.vue';

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
  },
};
