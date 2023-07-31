<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Spinner :loading="loading" />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Header,
    Spinner,
  },
  computed: {
    loading() {
      return this.$store.getters.getLoding;
    },
  },
};
</script>
<style></style>
