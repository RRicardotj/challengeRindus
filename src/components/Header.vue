<template>
  <header class="header">
    <div class="header__logo" @click="$router.push('/')">Ricardo's Posts</div>
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
  height: 56px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  box-shadow: 0px -2px 10px rgb(0 0 0 / 15%);
  background: #fff;
  z-index: 10;
  top: 0;

  &__logo {
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
    cursor: pointer;
  }
}
</style>
