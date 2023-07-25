import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/',
});
// https://hacker-news.firebaseio.com/v0/user/{user-id} . https://hacker-news.firebaseio.com/v0/
function newsList(param) {
  return instance.get(param);
}
function userInfo(param) {
  return instance.get(`user/${param}/json`);
}
export { newsList, userInfo };
