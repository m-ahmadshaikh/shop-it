import axios from 'axios';

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: 'GET',
    params: params,
  }).then((res) => res.data);
}

function postFetch(url, data = {}) {
  return axios({
    url: url,
    method: 'POST',
    data: data,
  }).then((res) => res.data);
}
