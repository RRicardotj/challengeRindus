<template>
  <SimpleLayout>
    <section id="postlist" class="post-list">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete="deletePost"
      />
      <button type="button" class="post-list__add-more">+</button>
    </section>
  </SimpleLayout>
</template>

<script src="./home"></script>
<style lang="scss" src="./home.scss"></style>
