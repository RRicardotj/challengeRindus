import { getPostComments } from '../../services/postService';

export default {
  async getComments(state, postId) {
    state.commit('startFetchComments', postId);
    try {
      const { data } = await getPostComments(postId);

      state.commit('fetchCommentsSuccess', { postId, comments: data });
    } catch (e) {
      state.commit('fetchCommentsError', { postId, error: e });
    }
  },
};
