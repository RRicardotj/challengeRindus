<template>
  <SimpleLayout>
    <section id="postlist" class="post-list">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </SimpleLayout>
</template>

<script src="./home"></script>
<style lang="scss" src="./home.scss"></style>
