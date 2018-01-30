<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航 ：
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi页面</router-link>|
      <router-link :to="{ name:'hi1', params:{username:'fang',id:'888'} }">-Hi页面1</router-link>|
      <router-link to="/hi/hi2">-Hi页面2</router-link>|
      <router-link to="/change">交换hi和hi2</router-link>|
      <br/>
      <hr/>
      <br/>
      <router-link to="/params/198/jspang website id very good!"> params</router-link>|
      <router-link to="/gohome"> GoHome</router-link>|
      <router-link to="/fang"> fang</router-link>|
      <router-link to="/fdsa"> 404页面</router-link>|
      <br/>
      <button @click="goback">后退</button>
    </p>
    <p>
      {{ $route.name }}
    </p>
    <router-view/>
    <transition name="fade" modal="out-in">
      <router-view name="left" style="float:left;width:50%;height:100px;background-color:#ccc;" ></router-view>
      <router-view name="right" style="float:left;width:50%;height:100px;background-color:#c0c;"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade:enter{
    opacity:0;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave{
    oacity:1;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
