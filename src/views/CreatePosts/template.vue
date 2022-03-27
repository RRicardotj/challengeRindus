<template>
  <SimpleLayout>
    <section id="createPost" class="create-post">
      <PostForm v-model:title="title" v-model:body="body" @submit="submit" />
    </section>
  </SimpleLayout>
</template>

<script src="./create-post"></script>
<style src="./create-post.scss"></style>
