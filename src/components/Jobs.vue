<template>
  <div class="base">
    <div class="border-box">
      <div class="content-box">
        <ul>
          <li v-for="(item, index) in jobsList" :key="index">
            <span class="rank">{{ (page - 1) * 30 + index + 1 }}. </span>
            <a class="url" :href="item.url"
              >{{ item.title }}
              <p class="urlC">({{ item.domain }})</p>
            </a>
            <p class="sup-item">{{ item.time_ago }}</p>
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
import { jobsList } from '@/api/index';
export default {
  data() {
    return {
      jobsList: [],
      page: 1,
    };
  },
  created() {
    this.getJobsList('jobs/' + this.page + '.json');
  },
  methods: {
    getJobsList(param) {
      jobsList(param)
        .then(r => {
          // console.log(r);
          if (r.status === 200) {
            this.jobsList = r.data;
            console.log(this.jobsList);
          } else {
            alert('서버와 통신이 월할하지 않습니다. \n 다시 시도해 주세요.');
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    userInfo(user) {
      this.$router.push({ name: 'UserInfoView', params: { id: user } });
    },
    moreList(page) {
      if (page === this.page) {
        this.page++;
        this.getJobsList('jobs/' + this.page + '.json');
      } else {
        this.getJobsList('jobs/' + this.page + '.json');
      }
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
