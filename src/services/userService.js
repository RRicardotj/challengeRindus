import Http from './Http';
import Service from './Service';
import { ENDPOINTS } from '../constants';

const userService = new Service(ENDPOINTS.USERS, Http);

export const getUserDetails = (id) => userService.get(`/${id}`);

export default userService;
