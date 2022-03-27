<template>
  <SimpleLayout>
    <section id="postlist" class="post-list">
      <div class="post-list__toolbar">
        <input
          class="post-list__search"
          placeholder="Searh by title or content..."
          v-model="searchBy"
        />
        <button
          class="post-list__order"
          :class="{
            'post-list__order__asc': orderAsc,
            'post-list__order__desc': !orderAsc,
          }"
          :tilte="orderAsc ? 'Order ascending' : 'Order descending'"
          @click="orderAsc = !orderAsc"
        />
      </div>
      <PostCard
        v-for="post in postsSortedFiltered"
        :key="post.id"
        :post="post"
      />
      <div v-if="isLoadingPosts">...Loading</div>
      <button type="button" class="post-list__add-more" @click="goToCreatePost">
        +
      </button>
    </section>
  </SimpleLayout>
</template>

<script src="./home"></script>
<style lang="scss" src="./home.scss"></style>
