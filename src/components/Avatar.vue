<template>
  <div
    class="avatar"
    :class="{
      'avatar-small': !size || size === 'sm',
      'avatar-medium': size === 'm',
    }"
  >
    <img :src="src" alt="user avatar" />
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'm',
    },
  },
};
</script>

<style lang="scss">
.avatar {
  &-small {
    width: 32px;
    height: 32px;
  }

  &-medium {
    width: 48px;
    height: 48px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
