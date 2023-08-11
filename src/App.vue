<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Spinner :loading="$store.state.LoadingStatus" />
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
};
</script>
<style></style>
