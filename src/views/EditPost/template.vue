<template>
  <SimpleLayout>
    <section id="editPost" class="edit-post">
      <PostForm :isEdit="true" v-model:title="title" v-model:body="body" />
    </section>
  </SimpleLayout>
</template>

<script src="./edit-post"></script>
<style src="./edit-post.scss"></style>
