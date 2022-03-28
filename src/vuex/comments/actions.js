import { getPostComments, createComment } from '../../services/postService';

export default {
  async getCommentsByPostId(state, postId) {
    state.commit('startFetchComments', postId);
    try {
      const { data } = await getPostComments(postId);

      state.commit('fetchCommentsSuccess', { postId, comments: data });
    } catch (e) {
      state.commit('fetchCommentsError', { postId, error: e });
    }
  },
  async leaveComment(state, { postId, comment }) {
    state.commit('startAddComment', postId);
    try {
      const { data } = await createComment(postId, comment);

      state.commit('addCommentSuccess', { postId, comment: data });
    } catch (e) {
      state.commit('addCommentError', { postId, error: e });
    }
  },
};
