import { createStore } from 'vuex';
import PostsState from './posts/state';
import PostsActions from './posts/actions';
import PostsMutations from './posts/mutations';

export const state = {
  ...PostsState,
};

export const mutations = {
  ...PostsMutations,
};

export const actions = {
  ...PostsActions,
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
