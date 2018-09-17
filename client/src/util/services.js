// localstorage service function
function LocalStorageService(method, key, value) {
    switch (method) {
      case 'get':
        return JSON.parse(localStorage.getItem(key));
      case 'set':
        localStorage.setItem(key, JSON.stringify(value));
        if (JSON.parse(localStorage.getItem(key))) return true;
        return false;
      case 'clear':
        return localStorage.clear();
      default: return false;
    }
  }
  
  // http service function
  const HttpService = function httpService() {

    const baseURL = 'http://localhost:8000';
  
    const x = {};
  
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
    };
  
    function clone(obj) {
      return Object.assign({}, obj);
    }
  
    function addAuthHeaders() {
      const tokenString = `JWT ${LocalStorageService('get', 'token')}`;
      if (!tokenString && Object.prototype.hasOwnProperty.call(headers, 'Authorization')) {
        delete headers.Authorization;
      } else {
        headers.Authorization = tokenString;
      }
    }
  
    function doRestOperation(url, data, method) {
      addAuthHeaders();
      if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
        return fetch(`${baseURL}${url}`, {
          method,
          headers,
          body: data ? JSON.stringify(data) : null,
  
        });
      } else if (method === 'GET') {
        let params = '';
        if (data != null && typeof data === 'object') {
          params = '?';
          for (const key in data) {
            params += `${key}=${data[key]}&`;
          }
          params = params.slice(0, -1);
        }
        return fetch(`${baseURL}${url}${params}`, {
          method,
          headers,
        });
      }
      return Promise.reject({ status: false, statusCode: 405, data: 'Method not supported' });
    }
  
    x.get = async function get(url, params) {
      return doRestOperation(url, params, 'GET');
    };
  
    x.post = async function post(url, data) {
      return doRestOperation(url, clone(data), 'POST');
    };
  
    x.put = async function put(url, data) {
      return doRestOperation(url, clone(data), 'PUT');
    };
    x.delete = async function del(url, data) {
      return doRestOperation(url, clone(data), 'DELETE');
    };
  
    return x;
  };
  
  //jwt parsing function
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  
  // check user is logged in or not
  function isLoggedIn() {
    if (localStorage.getItem('token') === null) return false;
  
    const parsedToken = parseJwt(localStorage.getItem('token'));
    console.log('loggedin - user:', parsedToken);
    if (parsedToken.exp < Date.now() / 1000) {
      localStorage.clear();
      return false;
    }
    return true;
  }
  
  
  export { HttpService, LocalStorageService, isLoggedIn };