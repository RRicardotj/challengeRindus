import { getById } from '../../services/postService';

export default {
  getPost(state, postId) {
    state.commit('startFetchPost', postId);
    try {
      const { data } = getById(postId);

      state.commit('fetchPostSuccess', { postId, post: data });
    } catch (e) {
      state.commit('fetchPostError', { postId, error: e });
    }
  },
};
