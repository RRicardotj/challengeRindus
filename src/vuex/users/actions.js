import { getUserDetails } from '../../services/userService';

export default {
  getUser(state, postId) {
    state.commit('startFetchUser', postId);
    try {
      const { data } = getUserDetails(postId);

      state.commit('fetchUserSuccess', { userId, user: data });
    } catch (e) {
      state.commit('fetchUserError', { userId, error: e });
    }
  },
};
