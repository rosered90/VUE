<template>
  <div class="error">
    <h1>{{msg}}</h1>
    <h1>此页面不存在</h1>
    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:"Error!"
      }
    }
  }
</script>

<style scoped>

</style>
