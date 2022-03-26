import SimpleLayout from '@/components/SimpleLayout.vue';

export default {
  name: 'CreatePost',
  components: {
    SimpleLayout,
  },
  data: () => ({
    title: '',
    content: '',
  }),
  methods: {
    async createPost() {
      try {
        await this.$store.dispatch('createPost', {
          title: this.title,
          content: this.content,
        });
        this.$router.push('/');
      } catch (e) {
        // this should be handler with an error handler implementing some toast to show notifications
        console.log('createPost failed');
      }
    },
  },
};
