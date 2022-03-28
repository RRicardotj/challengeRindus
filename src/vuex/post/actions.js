import { getById } from '../../services/postService';

export default {
  async getPost(state, postId) {
    state.commit('startFetchPost', postId);
    try {
      const { data } = await getById(postId);

      state.commit('fetchPostSuccess', { postId, post: data });
    } catch (e) {
      state.commit('fetchPostError', { postId, error: e });
    }
  },
};
