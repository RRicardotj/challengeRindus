import { create, deletePost, update, getAll } from '../../services/postService';

export default {
  async getAllPosts(state) {
    try {
      const { data } = await getAll();

      state.commit('setPosts', data);
    } catch (e) {
      state.commit('setPosts');
    }
  },
  async createPost(state, { title, body }) {
    try {
      const { data } = await create({ title, body });

      state.commit('addPost', {
        title,
        body,
        id: data.id,
        userId: state.loggedUser?.id,
      });
    } catch (e) {
      console.log('createPost failed');
    }
  },
  async deletePost(state, id) {
    if (!id) return;

    try {
      await deletePost(id);

      state.commit('removePost', id);
    } catch {
      console.log('deletePost failed');
    }
  },
  async updatePost(state, { id, title, body }) {
    try {
      await update(id, { title, body });

      state.commit('updatePost', { id, title, body });
    } catch (e) {
      console.log('updatePost failed');
    }
  },
};
