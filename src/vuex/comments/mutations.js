export default {
  startFetchComments(state, postId) {
    state.commentsByPostId[postId] = {
      isLoading: true,
      error: null,
      comments: [],
    };
  },
  fetchCommentsSuccess(state, { postId, comments }) {
    state.commentsByPostId[postId] = {
      isLoading: false,
      comments,
    };
  },
  fetchCommentsError(state, { postId, error }) {
    state.commentsByPostId[postId] = {
      isLoading: false,
      error,
      comments: [],
    };
  },
  startAddComment(state, postId) {
    state.commentsByPostId[postId] = {
      ...state.commentsByPostId[postId],
      isAdding: true,
    };
  },
  addCommentSuccess(state, { postId, comment }) {
    state.commentsByPostId[postId] = {
      ...state.commentsByPostId[postId],
      isAdding: false,
      comments: [...state.commentsByPostId[postId].comments, comment],
    };
  },
  addCommentError(state, { postId, error }) {
    state.commentsByPostId[postId] = {
      ...state.commentsByPostId[postId],
      isAdding: false,
      error,
    };
  },
};
