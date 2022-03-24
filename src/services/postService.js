import Http from './Http';
import Service from './Service';
import { ENDPOINTS } from '../constants';

const postService = new Service(ENDPOINTS.POSTS, Http);

export const getById = (id) => postService.get(`/${id}`);
export const create = (data) => postService.post('/', data);
export const getAll = () => postService.get('/');
export const update = (id, data) => postService.put(`/${id}`, data);
export const deletePost = (id) => postService.delete(`/${id}`);
export const getPostComments = (id) => postService.get(`/${id}/comments`);
export const createComment = (id) => postService.post(`/${id}/comments`);

export default postService;
