<template>
  <PostCard
    :avatar="author?.avatar ?? ''"
    :author="author?.name ?? ''"
    :title="title"
    :summary="summary"
    :postPicture="postPicture"
    :date="date"
    @edit="goToEdit"
    @delete="deletePost"
    @select="$router.push(`/post/${post.id}`)"
  />
</template>

<script>
import PostCard from '@/components/PostCard.vue';
import generateFakeImagePost from '@/utils/generateFakeImagePost';

export default {
  name: 'PostCardImplementation',
  data: () => ({ avatar: '', postPicture: '' }),
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    PostCard,
  },
  computed: {
    title() {
      return this.post.title;
    },
    summary() {
      return this.post.body;
    },
    date() {
      // TODO: format date. For now it's just hardcoded.
      return '2022-03-23';
    },
    author() {
      return this.$store.state.usersFound[this.post.userId];
    },
  },
  methods: {
    fetchAuthor() {
      this.$store.dispatch('fetchUser', this.post.userId);
    },
    goToEdit() {
      this.$router.push(`/edit-post/${this.post.id}`);
    },
    deletePost() {
      this.$store.dispatch('deletePost', this.post.id);
    },
    getFakePics() {
      this.postPicture = generateFakeImagePost();
    },
  },
  mounted() {
    if (!this.author) {
      this.fetchAuthor();
    }

    this.getFakePics();
  },
};
</script>
