import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/',
});
function newsList(param) {
  return instance.get(param);
}
function userInfo(param) {
  return instance.get(`user/${param}/json`);
}
function askList(param) {
  return instance.get(param);
}
function askInfo(param) {
  return instance.get(`item/${param}/json`);
}
function jobsList(param) {
  return instance.get(param);
}
export { newsList, userInfo, askList, askInfo, jobsList };
