<template>
  <Header />
  <slot></slot>
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
