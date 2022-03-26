<template>
  <SimpleLayout>
    <section id="createPosts" class="create-posts">
      <div class="create-posts__header">
        <h1 class="create-posts__title">Create a new post</h1>
      </div>
      <div class="create-posts__body">
        <div class="create-posts__form">
          <form
            @submit.prevent="createPost"
            @keydown.enter.prevent="createPost"
          >
            <div class="create-posts__form-group">
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                v-model="title"
                class="create-posts__form-input"
              />
            </div>
            <div class="create-posts__form-group">
              <label for="content">Content</label>
              <textarea
                id="content"
                v-model="content"
                class="create-posts__form-input"
              ></textarea>
            </div>
            <div class="create-posts__form-group">
              <button class="create-posts__form-button">Create</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </SimpleLayout>
</template>

<script src="./create-post"></script>
