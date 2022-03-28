import { createStore } from 'vuex';
import PostsState from './posts/state';
import PostsActions from './posts/actions';
import PostsMutations from './posts/mutations';
import UsersState from './users/state';
import UsersActions from './users/actions';
import UsersMutations from './users/mutations';
import PostFoundState from './post/state';
import PostFoundActions from './post/actions';
import PostFoundMutations from './post/mutations';
import CommentsState from './comments/state';
import CommentsActions from './comments/actions';
import CommentsMutations from './comments/mutations';

export const state = {
  loggedUser: {
    id: 1,
    name: 'User Hardcoded',
  },
  ...PostsState,
  ...UsersState,
  ...PostFoundState,
  ...CommentsState,
};

export const mutations = {
  ...PostsMutations,
  ...UsersMutations,
  ...PostFoundMutations,
  ...CommentsMutations,
};

export const actions = {
  ...PostsActions,
  ...UsersActions,
  ...PostFoundActions,
  ...CommentsActions,
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
