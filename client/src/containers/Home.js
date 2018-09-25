import React, { Component } from 'react'
import {HttpService, LocalStorageService } from 'util/services'

const httpService = HttpService();
export class Home extends Component {
  static propTypes = {

  }
  componentWillMount(){
    const data ={
      "username":"don",
      "password":"don123"
    }
    const promise = httpService.post('/token/',data);
    promise.then(res=>res.json())
    .then(resData=>{
      LocalStorageService('set','token',resData.token)
    })
    .catch(err=>{console.log(err)})
  }
  render() {
    return (
      <div>
        Home page
      </div>
    )
  }
}

export default Home
