<template>
  <Avatar :src="author?.avatar ?? ''" />
  <span class="post__author">
    {{ author?.name ?? '' }}
  </span>
</template>

<script>
import Avatar from '@/components/Avatar.vue';

export default {
  name: 'CommentAuthor',
  props: ['userId'],
  components: {
    Avatar,
  },
  computed: {
    author() {
      return this.$store.state.usersFound[this.userId];
    },
  },
  methods: {
    fetchAuthor() {
      this.$store.dispatch('fetchUser', this.userId);
    },
  },
  mounted() {
    if (!this.author) {
      this.fetchAuthor();
    }
  },
};
</script>
