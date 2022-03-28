import { getUserDetails } from '../../services/userService';

export default {
  async fetchUser(state, userId) {
    state.commit('startFetchUser', userId);
    try {
      const { data } = await getUserDetails(userId);

      console.log('data', data);

      state.commit('fetchUserSuccess', { userId, user: data });
    } catch (e) {
      state.commit('fetchUserError', { userId, error: e });
    }
  },
};
