import SimpleLayout from '@/components/SimpleLayout.vue';
import PostForm from '@/components/PostForm/template.vue';
import { getById } from '@/services/postService';

export default {
  name: 'EditPost',
  components: {
    SimpleLayout,
    PostForm,
  },
  data: () => ({ title: '', body: '', isEdit: false, id: '' }),
  methods: {
    async getPost() {
      let post = this.$store.posts?.find((p) => p.id === this.$route.params.id);

      if (!post) {
        const { data } = await getById(this.$route.params.id);

        post = data;
      }

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
