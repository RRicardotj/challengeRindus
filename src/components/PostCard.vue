<template>
  <div class="post-card">
    <div class="post-card__header">
      <Avatar :src="avatar" />
      <span class="post-card__author">{{ author }}</span>
      <span class="post-card__date" v-if="date">{{ date }}</span>
    </div>
    <div class="post-card__body">
      <div class="post-card__info">
        <h2 class="post-card__title">{{ title }}</h2>
        <span class="post-card__summary">
          {{ summary }}
        </span>
      </div>
      <div class="post-card__pic">
        <img alt="post picture" :src="postPicture" />
      </div>
    </div>
    <div class="post-card__footer">Action Edit | Action Delete</div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue';
export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="scss">
.post-card {
  padding: 0 0.5em;
  :not(:last-child) {
    margin-bottom: 1em;
  }

  &__header {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
  }

  &__author {
    margin-left: 1em;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  &__body {
    display: flex;
  }

  &__info {
    padding-right: 0.5em;
  }

  &__pic {
    height: 100px;

    img {
      max-height: 100%;
    }
  }
}
</style>
