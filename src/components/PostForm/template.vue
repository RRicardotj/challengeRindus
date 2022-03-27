<template>
  <div class="post-management">
    <div class="post-management__header">
      <h2 class="post-management__title">Create a new post</h2>
    </div>
    <div class="post-management__body">
      <div class="post-management__form">
        <form @submit.prevent="createPost" @keydown.enter.prevent="createPost">
          <div class="post-management__form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              v-model="title"
              class="post-management__form-input"
            />
          </div>
          <div class="post-management__form-group">
            <label for="content">Content</label>
            <textarea
              id="content"
              v-model="body"
              class="post-management__form-input"
            ></textarea>
          </div>
          <div class="post-management__form-group">
            <button class="post-management__form-button">
              {{ isEdit ? 'Edit' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./post-form"></script>
<style src="./post-form.scss" lang="scss"></style>
