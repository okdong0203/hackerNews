import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/news/',
});

export default {
  newsList() {
    instance.get('1.json');
  },
};
