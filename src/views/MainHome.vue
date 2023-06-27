<template>
  <div>
    <Header></Header>
    <div>
      <h1>newsList</h1>
      <ol>
        <li v-for="(item, index) in newsList" :key="index">
          {{ item.title }} ({{ item.domain }})
          <p>
            {{ item.points }} points by {{ item.user }} {{ item.time_ago }} <span v-show="comments_check">| {{ item.comments }}comment</span>
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
// import { newsList } from '@/api/index';
import axios from 'axios';
export default {
  components: {
    Header,
  },
  data() {
    return {
      newsList: [],
      comments_count: 0,
      title: '',
      domain: '',
      time_ago: '',
      type: '',
      url: '',
      user: '',
      comments_check: false,
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios
        .get('https://api.hnpwa.com/v0/news/1.json')
        .then(r => {
          let data = r.data;
          this.newsList = data;
          console.log(this.newsList);
          if (r.status === 200) {
            for (let i = 0; i < this.newsList; i++) {
              this.newsList.comments_count = this.comments_count;
              this.newsList.title = this.title;
              this.newsList.domain = this.domain;
              this.newsList.time_ago = this.time_ago;
              this.newsList.url = this.url;
              this.newsList.user = this.user;
              this.comments_check = this.comments_count > 0 ? false : true;
            }
          } else {
            alert('서버와 통신이 원활하지 않습니다. \n 다시 시도해주세요.');
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // getNewsList() {
    //   newsList
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style></style>
