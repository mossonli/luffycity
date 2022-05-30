<template>
  <h1>首页</h1>
  <div class="home">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

// 测试CORS的跨域配置是否有问题
import axios from 'axios';
const http = axios.create();

// 测试服务端的跨域是否配置成功
http.get('http://api.luffy.cn:8000/home/test').then((response) => {
  console.log(response.data);
});
</script>

<style scoped></style>
