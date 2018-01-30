<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>newsTitle:{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
  export default{
    name:'hi',
    data(){
      return{
        msg:"params pages"
      }
    },
    //模板中的钩子函数
    beforeRouteEnter:(to, from, next)=>{
      console.log("准备进入params路由模板");
      next();
  },
    beforeRouteLeave:(to, from, next)=>{
      console.log("准备离开params模板");
      next();
  }

  }
</script>

<style scoped>

</style>
