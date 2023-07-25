<template>
  <div class="base">
    <Header></Header>
    <div class="border-box">
      <div class="content-box">
        <ul>
          <li v-for="(item, index) in newsList" :key="index">
            <span class="rank">{{ (page - 1) * 30 + index + 1 }}. </span>
            <a class="url" :href="item.url">{{ item.title }} ({{ item.domain }})</a>
            <p class="sup-item">
              {{ item.points }} points by <a class="userInfo" href="#" @click="clickUser(item.user)">{{ item.user }}</a> {{ item.time_ago }}
              <span v-show="comments_check">| {{ item.comments_count }} comment</span>
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
import Header from '@/components/Header.vue';
import { newsList } from '@/api/index';

export default {
  name: 'ListItem',
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
      rank: 0,
      page: 1,
      comments_check: false,
    };
  },
  created() {
    this.getNewsList('news/' + this.page + '.json');
  },
  methods: {
    getNewsList(param) {
      newsList(param)
        .then(r => {
          this.newsList = r.data;
          console.log(this.newsList);
          if (r.status === 200) {
            for (let i = 0; i < this.newsList.length; i++) {
              this.newsList.comments_count = this.comments_count;
              this.newsList.title = this.title;
              this.newsList.domain = this.domain;
              this.newsList.time_ago = this.time_ago;
              this.newsList.url = this.url;
              this.newsList.user = this.user;
              this.comments_check = this.comments_count > 0 ? false : true;
            }
          } else {
            alert('서버와 통신이 원할하지 않습니다. \n 다시 시도해주세요.');
          }
        })
        .catch(error => {
          alert('오류가 발생했습니다. 오류코드 =' + error);
        });
    },
    clickUser(user) {
      if (user) {
        this.$router.push({ name: 'userInfoView', params: { data: user } });
      } else {
        alert('사용자의 정보가 없습니다.');
      }
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
  },
};
</script>

<style>
.border-box {
  background-color: #fff;
  box-sizing: content-box;
}
.content-box {
  padding: 30px;
}
.rank {
  color: #666666;
}
.url {
  color: black;
}
.url:hover {
  color: blue;
}
.url:visited {
  color: #999999;
}
.sup-item {
  color: #d3d3d3;
}
.userInfo {
  color: #d3d3d3;
}
.userInfo:hover {
  color: blue;
}
.btn-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.btn-1 {
  width: 79px;
  height: 40px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.btn-1:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
