<template>
  <div>
    <div class="border-box">
      <div class="content-box">
        <div class="icon-box">
          <i class="fa-solid fa-user fa-2xl fa-size"></i>
          <div class="user-box">
            <div class="user-text">user: &nbsp;{{ id }}</div>
            <div class="user-text">created: &nbsp;{{ created }}</div>
            <div class="user-text">karma: &nbsp;{{ karma }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo } from '@/api/index';
export default {
  name: 'userInfo',
  data() {
    return {
      userId: '',
      created: '',
      id: '',
      karma: '',
    };
  },
  created() {
    if (this.$route.params) {
      this.userId = this.$route.params.id;
      this.getUserInfo();
    }
    // console.log(this.userId);
  },
  methods: {
    getUserInfo() {
      userInfo(this.userId).then(r => {
        // console.log(r);
        if (r.data) {
          this.$store.commit('startSpinner');
          let userInfo = r.data;
          this.created = userInfo.created;
          this.id = userInfo.id;
          this.karma = userInfo.karma;
          this.$store.commit('endSpinner');
        } else {
          alert('사용자의 정보가 없습니다.');
        }
      });
    },
  },
};
</script>

<style>
.fa-size {
  padding-top: 40px;
  font-size: 5.2rem;
}
.icon-box {
  display: flex;
  margin: 10px;
  background-color: #fff;
}
.user-box {
  padding-left: 25px;
}
.user-text {
  margin-top: 0px;
  margin-bottom: 10px;
}
</style>
