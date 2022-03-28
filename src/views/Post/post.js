import Author from './Author.vue';
import Avatar from '@/components/Avatar.vue';
import SimpleLayout from '@/components/SimpleLayout.vue';
import generateFakeAvatar from '@/utils/generateFakeAvatar';

export default {
  name: 'PostView',
  components: {
    Author,
    SimpleLayout,
    Avatar,
  },
  data: () => ({ email: '', commentToLeave: '' }),
  computed: {
    post() {
      const postFound = this.$store.state.postsFound[this.$route.params.postId];

      return postFound;
    },
    isLoadingPost() {
      if (!this.post) return true;

      return this.post.isLoading;
    },
    isLoadingComments() {
      const commentsById =
        this.$store.state.commentsByPostId[this.$route.params.postId];

      if (!commentsById) return true;

      return commentsById.isLoading;
    },
    comments() {
      return (
        this.$store.state.commentsByPostId[this.$route.params.postId]
          ?.comments ?? []
      );
    },
  },
  methods: {
    fetchPost() {
      this.$store.dispatch('getPost', this.$route.params.postId);
    },
    generateFakeAvatar() {
      return generateFakeAvatar();
    },
    leaveComment() {
      const { email, commentToLeave } = this;

      this.$store.dispatch('leaveComment', {
        postId: this.$route.params.postId,
        comment: {
          email,
          body: commentToLeave,
        },
      });

      this.email = '';
      this.commentToLeave = '';
    },
  },
  mounted() {
    if (!this.post) {
      this.fetchPost();
    }
    if (!this.$store.state.commentsByPostId[this.$route.params.postId]) {
      this.$store.dispatch('getCommentsByPostId', this.$route.params.postId);
    }
  },
};
