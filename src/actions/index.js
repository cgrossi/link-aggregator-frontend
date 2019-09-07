import postDB from '../apis/postDB'

export const fetchPosts = () => async (dispatch) => {
  //get url will need to be changed
  const response = await postDB.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}