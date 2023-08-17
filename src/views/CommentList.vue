<template>
  <div class="base">
    <div class="border-box">
      <div class="content-box">
        <div class="title">{{ title }}</div>
        <br /><br />
        <div class="content pb50" v-html="content"></div>
        <div>
          <ul class="comment-style">
            <Comment v-for="comment in comments" :comment="comment" :key="comment.id" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { askInfo } from '@/api/index';
import Comment from '@/components/Comment.vue';
export default {
  name: 'CommentList',
  components: {
    Comment,
  },
  data() {
    return {
      id: '',
      title: '',
      content: '',
      comments: [],
    };
  },
  created() {
    // console.log(this.$rote.params);
    if (this.$route.params) {
      this.id = this.$route.params.id;
      this.getAskItem();
    }
  },
  methods: {
    getAskItem() {
      askInfo(this.id)
        .then(r => {
          // console.log(r);
          if (r.status === 200) {
            let data = r.data;
            this.title = data.title;
            this.content = data.content;
            console.log(data);
            this.comments = data.comments;
          } else {
            alert('서버와 통신이 월할하지 않습니다. \n 다시 시도해 주세요.');
          }
        })
        .catch(error => {
          alert('오류가 발생했습니다. 오류내용 = ' + error);
        });
    },
  },
};
</script>

<style></style>
