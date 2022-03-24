import SimpleLayout from '@/components/SimpleLayout.vue';
import PostCard from './PostCardImplementation.vue';
import { getAll } from '@/services/postService';

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
    async getAllPosts() {
      try {
        const { data } = await getAll();

        console.log(data);

        this.posts = data;
      } catch (e) {
        // this should be handler with an error handler implementing some toast to show notifications
        this.posts = null;
      }
    },
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mount', this.posts);
    if (this.posts && !this.posts.length) {
      this.getAllPosts();
    }
  },
};
