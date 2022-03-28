import { createStore } from 'vuex';
import PostsState from './posts/state';
import PostsActions from './posts/actions';
import PostsMutations from './posts/mutations';
import UsersState from './users/state';
import UsersActions from './users/actions';
import UsersMutations from './users/mutations';

export const state = {
  loggedUser: {
    id: 1,
    name: 'User Hardcoded',
  },
  ...PostsState,
  ...UsersState,
};

export const mutations = {
  ...PostsMutations,
  ...UsersMutations,
};

export const actions = {
  ...PostsActions,
  ...UsersActions,
};

export const getters = {
  getPostById: (state) => (id) => {
    return state.posts.find((post) => post.id === id);
  },
};

export const storeBase = {
  state() {
    return state;
  },
  mutations,
  getters,
  actions,
};

export default createStore(storeBase);
