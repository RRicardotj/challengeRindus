import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/template.vue';
import CreatePostsView from '../views/CreatePosts/template.vue';
import EditPostView from '../views/EditPost/template.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create-post',
      name: 'createPost',
      component: CreatePostsView,
    },
    {
      path: '/edit-post/:id',
      name: 'editPost',
      component: EditPostView,
    },
  ],
});

export default router;
