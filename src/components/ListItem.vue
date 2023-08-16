<template>
  <div class="base">
    <div class="border-box">
      <div class="content-box">
        <ul>
          <li v-for="(item, index) in newsList" :key="index">
            <span class="rank">{{ (page - 1) * 30 + index + 1 }}. </span>
            <a class="url" :href="item.url"
              >{{ item.title }}
              <p class="urlC">({{ item.domain }})</p></a
            >
            <p class="sup-item">
              {{ item.points }} points by <a class="link-text" href="javacript:void(0)" @click="userInfo(item.user)">{{ item.user }}</a> {{ item.time_ago }} |
              <span class="user" v-show="item.comments_count !== 0" @click="comment(item.id)"> {{ item.comments_count }} comment</span>
            </p>
          </li>
        </ul>
        <div class="btn-container">
          <button class="btn-1" @click="moreList(page)">
            MORE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newsList } from '@/api/index';

export default {
  name: 'ListItem',
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
      rank: 0,
      page: 1,
      comments_check: true,
      comments_list: [],
    };
  },
  created() {
    this.getNewsList('news/' + this.page + '.json');
  },
  methods: {
    getNewsList(param) {
      newsList(param)
        .then(r => {
          if (r.status === 200) {
            this.newsList = r.data;
            console.log(this.newsList);
          } else {
            alert('서버와 통신이 원할하지 않습니다. \n 다시 시도해 주세요.');
          }
        })
        .catch(error => {
          alert('오류가 발생했습니다. 오류내용 =' + error);
        });
    },
    userInfo(user) {
      this.$router.push({ name: 'UserInfoView', params: { id: user } });
    },
    moreList(page) {
      if (page === this.page) {
        this.page++;
        this.getNewsList('news/' + this.page + '.json');
      } else {
        this.getNewsList('news/' + this.page + '.json');
      }
      window.scrollTo(0, 0);
    },
    comment(id) {
      this.$router.push({ name: 'CommentList', params: { id: id } });
    },
  },
};
</script>

<style></style>
