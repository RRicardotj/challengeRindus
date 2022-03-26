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
  async createPost(state, { title, content }) {
    try {
      await create({ title, content });

      state.commit('addPost', { title, content });
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
  async updatePost(state, { id, title, content }) {
    try {
      await update(id, { title, content });

      state.commit('updatePost', { id, title, content });
    } catch (e) {
      console.log('updatePost failed');
    }
  },
};
