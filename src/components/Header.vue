<template>
  <div class="head-container">
    <div class="header">
      <span><router-link class="logo" to="/news">HackerNews </router-link>|</span>
      <span><router-link class="logo2" to="/ask"> Ask </router-link>|</span>
      <span><router-link to="/jobs"> Jobs</router-link></span>
    </div>
  </div>
</template>

<script></script>

<style>
.head-container {
  margin: 10px 15px;
  padding: 15px 15px;
  background-color: orange;
}

.logo {
  font-weight: 700;
  font-size: 15px;
  color: black;
}

.header .router-link-exact-active {
  color: #ffffff;
  font-size: 15px;
}

.header a {
  color: black;
  font-size: 13px;
}
</style>
