export default {
  name: 'PostForm',
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data: () => ({ title: '', body: '', isEdit: false }),
  created() {
    if (this.post) {
      this.title = this.post.title;
      this.body = this.post.body;
      this.isEdit = true;
    }
  },
  methods: {
    async submit() {
      const { title, body } = this;
      const payload = { title, body };

      if (this.isEdit) {
        payload.id = this.post.id;
        await this.$store.dispatch('updatePost', payload);
      } else {
        await this.$store.dispatch('createPost', payload);
      }
      this.$router.push('/');
    },
  },
};
