<template>
  <PostCard
    :avatar="avatar"
    :author="author"
    :title="title"
    :summary="summary"
    :postPicture="postPicture"
    :date="date"
    @edit="goToEdit"
    @delete="deletePost"
  />
</template>

<script>
import { getUserDetails } from '@/services/userService';
import PostCard from '@/components/PostCard.vue';
import generateFakeAvatar from '@/utils/generateFakeAvatar';
import generateFakeImagePost from '@/utils/generateFakeImagePost';

export default {
  name: 'PostCardImplementation',
  data: () => ({ author: '' }),
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
    postPicture() {
      const pic = generateFakeImagePost();

      return pic;
    },
    date() {
      // TODO: format date. For now it's just hardcoded.
      return '2022-03-23';
    },
    avatar() {
      const pic = generateFakeAvatar();
      return pic;
    },
  },
  methods: {
    async fetchAuthor() {
      const user = await getUserDetails(this.post.userId);
      this.author = user.name;
    },
    goToEdit() {
      this.$router.push({
        name: 'edit-post',
        params: {
          postId: this.post.id,
        },
      });
    },
    deletePost() {
      this.$emit('delete', this.post.id);
    },
  },
  mounted() {
    if (!this.author) {
      this.fetchAuthor();
    }
  },
};
</script>
