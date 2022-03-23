<template>
  <header class="header">
    <div class="header__logo">Ricardo's Posts</div>
    <div class="header__user-info"></div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
}
</style>
