import generateFakeAvatar from '../../utils/generateFakeAvatar';

export default {
  startFetchUser(state, userId) {
    state.usersFound[userId] = {
      isLoading: true,
      error: null,
    };
  },
  fetchUserSuccess(state, { userId, user }) {
    state.usersFound[userId] = { ...user, avatar: generateFakeAvatar() };
  },
  fetchUserError(state, { userId, error }) {
    state.usersFound[userId] = {
      isLoading: false,
      error,
    };
  },
};
