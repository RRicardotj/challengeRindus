import SimpleLayout from '@/components/SimpleLayout.vue';
import PostForm from '@/components/PostForm/template.vue';

export default {
  name: 'EditPost',
  components: {
    SimpleLayout,
    PostForm,
  },
  data: () => ({ title: '', body: '', isEdit: false, id: '' }),
  methods: {
    getPost() {
      const post = this.$store.getPostById(this.$router.currentRoute.params.id);

      if (post) {
        this.title = post.title;
        this.body = post.body;
        this.id = post.id;
      }
    },
    async submit() {
      const { title, body, id } = this;
      const payload = { title, body, id };

      await this.$store.dispatch('updatePost', payload);

      this.$router.push('/');
    },
  },
  mounted() {
    if (!this.id) {
      this.getPost();
    }
  },
};
