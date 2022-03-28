<template>
  <SimpleLayout>
    <section id="postRead">
      <div class="post">
        <div class="post__header">
          <Avatar :src="avatar" />
          <span class="post__author">{{ author }}</span>
          <span class="post__date" v-if="date">{{ date }}</span>
        </div>
        <h2 class="post__title">{{ title }}</h2>
        <p class="post__body">{{ body }}</p>
      </div>
      <div class="post-comments">
        <div class="post-comments__header">
          <h3 class="post-comments__title">Comments</h3>
        </div>
        <div class="post-comments__body">
          <div
            class="post-comments__comment"
            v-for="comment in comments"
            :key="comment.id"
          >
            <div class="post-comments__comment-header">
              <Avatar :src="comment.avatar" />
              <span class="post-comments__comment-author">
                {{ comment.author }}
              </span>
              <span class="post-comments__comment-date">
                {{ comment.date }}
              </span>
            </div>
            <p class="post-comments__comment-body">
              {{ comment.body }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </SimpleLayout>
</template>

<script>
export default {};
</script>

<style></style>
