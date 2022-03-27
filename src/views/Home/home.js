import SimpleLayout from '@/components/SimpleLayout.vue';
import PostCard from './PostCardImplementation.vue';

export default {
  name: 'HomeView',
  components: {
    SimpleLayout,
    PostCard,
  },
  data: () => ({
    orderAsc: false,
    searchBy: '',
  }),
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    isLoadingPosts() {
      return this.$store.state.isLoadingPosts;
    },
    postsSortedFiltered() {
      const posts = this.posts || [];

      // Sort by title because it's the only property visble that I get from the API response
      // Order by a date property should be better but, the current date prop is hardcoded (there is not date prop from api)
      const orderDesc = (a, b) => b.title.localeCompare(a.title);
      const orderAsc = (a, b) => a.title.localeCompare(b.title);

      const sortedFunction = this.orderAsc ? orderAsc : orderDesc;

      const filterByTitleOrContent = (post) => {
        const search = this.searchBy.toLowerCase();
        return (
          post.title.toLowerCase().includes(search) ||
          post.body.toLowerCase().includes(search)
        );
      };

      return posts.sort(sortedFunction).filter(filterByTitleOrContent);
    },
  },
  methods: {
    goToCreatePost() {
      this.$router.push('/create-post');
    },
  },
};
