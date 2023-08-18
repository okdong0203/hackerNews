<template>
  <li v-if="comment">
    <p class="text-gray fs12 pt10">
      <b class="user" @click="userInfo(comment.user)">{{ comment.user }}</b> {{ comment.time_ago }}
      <a @click="toggle" class="toggle">
        {{ open ? '[-]' : `[+${children}]` }}
      </a>
    </p>
    <div v-show="open">
      <div v-html="comment.content" class="content"></div>
      <ul class="comment-style" :class="{ child: children > 0 }">
        <comment v-for="comment in comment.comments" :comment="comment" :key="comment.id" />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      open: true,
    };
  },
  computed: {
    children() {
      return this.comment.comments.length ? this.comment.comments.length : '';
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    userInfo(user) {
      this.$router.push({ name: 'UserInfoView', params: { id: user } });
    },
  },
};
</script>

<style>
.child {
  padding-left: 40px;
}
</style>
