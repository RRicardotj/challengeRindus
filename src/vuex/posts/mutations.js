export default {
  setPosts(state, posts) {
    state.posts = posts;
    state.isLoadingPosts = false;
    state.fetchPostsState = 'NONE';
  },
  addPost(state, newPost) {
    state.posts.push(newPost);
    state.isLoadingPosts = false;
    state.fetchPostsState = 'NONE';
  },
  removePost(state, postId) {
    state.posts = state.posts.filter((post) => post.id !== postId);
    state.isLoadingPosts = false;
    state.fetchPostsState = 'NONE';
  },
  updatePost(state, updatedPost) {
    const postIndex = state.posts.findIndex(
      (post) => post.id === updatedPost.id
    );

    if (postIndex > -1) {
      state.posts[postIndex] = { ...state.posts[postIndex], ...updatedPost };
      state.postsFound[id] = state.posts[postIndex];
    }
    state.isLoadingPosts = false;
    state.fetchPostsState = 'NONE';
  },
  failFetchPosts(state) {
    state.isLoadingPosts = false;
    state.fetchPostsState = 'FAIL';
  },
};
