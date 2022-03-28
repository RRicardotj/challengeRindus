import { getPostComments } from '../../services/postService';

export default {
  getComments(state, postId) {
    state.commit('startFetchComments', postId);
    try {
      const { data } = getPostComments(postId);

      state.commit('fetchCommentsSuccess', { postId, comments: data });
    } catch (e) {
      state.commit('fetchCommentsError', { postId, error: e });
    }
  },
};
