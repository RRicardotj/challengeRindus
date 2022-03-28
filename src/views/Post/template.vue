<template>
  <SimpleLayout>
    <section id="postRead" class="post-read">
      <div class="post" v-if="!isLoadingPost">
        <div class="post__header">
          <Author :userId="post.userId" />
          <span class="post__date" v-if="post.date">{{ post.date }}</span>
        </div>
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__body">{{ post.body }}</p>
      </div>
      <form @submit.prevent="leaveComment" class="post-leave-comment">
        <h3 class="post-leave-comment__title">Leave a comment</h3>
        <input
          type="email"
          class="post-leave-comment__email"
          required="true"
          placeholder="email@example.com"
          v-model="email"
        />
        <textarea
          v-model="commentToLeave"
          class="post-leave-comment__comment"
        />
        <button type="submit" class="post-leave-comment__button">Share</button>
      </form>
      <div class="post-comments">
        <div class="post-comments__header">
          <h3 class="post-comments__title">Comments</h3>
        </div>
        <div class="post-comments__body" v-if="comments">
          <div
            class="post-comments__comment"
            v-for="comment in comments.reverse()"
            :key="comment.id"
          >
            <div class="post-comments__comment-header">
              <Avatar :src="generateFakeAvatar()" />
              <span class="post-comments__comment-date">
                {{ comment.email }}
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

<script src="./post"></script>
<style src="./post.scss" lang="scss"></style>
