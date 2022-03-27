<template>
  <div class="post-form">
    <div class="post-form__header">
      <h2 class="post-form__title">Create a new post</h2>
    </div>
    <div class="post-form__body">
      <form
        class="post-form__form"
        @submit.prevent="submit"
        @keydown.enter.prevent="submit"
      >
        <div class="post-form__form-group">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            class="post-form__form-input"
            required
            :value="title"
            @input="onTitleInput"
          />
        </div>
        <div class="post-form__form-group">
          <label for="body">Content</label>
          <textarea
            id="body"
            :value="body"
            @input="onBodyInput"
            class="post-form__form-input"
            required
          ></textarea>
        </div>
        <div class="post-form__form-group">
          <button class="post-form__form-button">
            {{ isEdit ? 'Edit' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./post-form"></script>
<style src="./post-form.scss" lang="scss"></style>
