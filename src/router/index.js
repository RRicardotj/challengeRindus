import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/template.vue';
import CreatePostsView from '../views/CreatePosts/template.vue';

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
  ],
});

export default router;
