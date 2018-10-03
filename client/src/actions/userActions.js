import { HttpService } from 'util/services.js'
import { USER_ACTION, CLEAR_DATA } from './types'

const httpService = HttpService();

export const userAction = reqData => dispatch =>{
  const promise = httpService.post('/movies/actions/',reqData);
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(resData =>{
    reqData.total_page = resData.page_count;
    dispatch({
      type: USER_ACTION,
      payload: reqData
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  })
}

export const clearData = () => dispatch => {
  const promise = httpService.get('/movies/clear-data/');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  }).then(resData =>{
    dispatch({
      type: CLEAR_DATA,
      payload: resData
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  })
}