export default {
  startFetchPost(state, postId) {
    state.postsFound[postId] = {
      isLoading: true,
      error: null,
    };
  },
  fetchPostSuccess(state, { postId, post }) {
    state.postsFound[postId] = { ...post, date: '2022-03-23' };
  },
  fetchPostError(state, { postId, error }) {
    state.postsFound[postId] = {
      isLoading: false,
      error,
    };
  },
};
