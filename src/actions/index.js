import service from '../service';

export const getPosts = () => async (dispatch, getState) => {
  const data = await service.getPost();
  console.log(service.getPost());
  //   dispatch({
  //     type: 'GET_POSTS',
  //     payload: data,
  //   });
};
