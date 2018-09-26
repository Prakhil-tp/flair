import { HttpService } from 'util/services.js'
import { USER_ACTION} from './types'

const httpService = HttpService();

export const userAction = reqData => dispatch =>{
  const promise = httpService.post('/movies/actions/',reqData);
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(() =>
    dispatch({
      type: USER_ACTION,
      payload: reqData
    })
  )
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  })
}