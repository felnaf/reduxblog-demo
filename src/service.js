import typicode from './api/typicode';

 const getPost = () => {
  return typicode.get('posts');
};

const getUserDetail = (id) => {
  return typicode.get(`users/${id}`);
};
export default {
  getPost,
  getUserDetail,
};
