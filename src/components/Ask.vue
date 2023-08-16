<template>
  <div class="base">
    <div class="border-box">
      <div class="content-box">
        <ul>
          <li v-for="(item, index) in askList" :key="index">
            <span class="rank">{{ (page - 1) * 30 + index + 1 }}. </span>
            <!-- <router-link :to="`item/${item.id}`"></router-link> -->
            <a class="url" href="javasript:void(0)" @click="askItem(item.id)">{{ item.title }}</a>
            <p class="sup-item">
              {{ item.points }} points by <a class="link-text" href="javacript:void(0)" @click="userInfo(item.user)">{{ item.user }}</a> {{ item.time_ago }} |
              <span class="user" @click="askItem(item.id)" v-show="item.comments_count !== 0"> {{ item.comments_count }} comment</span>
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
import { askList } from '@/api/index';
export default {
  created() {
    this.getAskList('ask/' + this.page + '.json');
  },
  data() {
    return {
      askList: [],
      page: 1,
      comments_check: false,
    };
  },
  methods: {
    getAskList(param) {
      askList(param)
        .then(r => {
          if (r.status === 200) {
            this.askList = r.data;
            console.log(this.askList);
          } else {
            alert('서버와 통신이 월할하지 않습니다. \n 다시 시도해 주세요.');
          }
        })
        .catch(error => {
          alert('오류가 발생했습니다. 오류내용 = ' + error);
        });
    },
    askItem(id) {
      this.$router.push({ name: 'CommentList', params: { id: id } });
    },
    userInfo(user) {
      this.$router.push({ name: 'UserInfoView', params: { id: user } });
    },
    moreList(page) {
      if (page === this.page) {
        this.page++;
        this.getAskList('ask/' + this.page + '.json');
      } else {
        this.getAskList('ask/' + this.page + '.json');
      }
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
