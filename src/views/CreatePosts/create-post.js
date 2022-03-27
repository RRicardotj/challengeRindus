import SimpleLayout from '@/components/SimpleLayout.vue';
import PostForm from '@/components/PostForm/template.vue';

export default {
  name: 'CreatePost',
  components: {
    SimpleLayout,
    PostForm,
  },
  data: () => ({ title: '', body: '' }),
  methods: {
    async submit() {
      const { title, body } = this;
      const payload = { title, body };

      await this.$store.dispatch('createPost', payload);
      this.$router.push('/');
    },
  },
};
