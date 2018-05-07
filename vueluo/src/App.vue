<template>
  <div id="app">
    <header>
      <router-link to="/index" tag="a">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/file">电影</router-link>
      <router-link to="/tvfile">电视剧</router-link>
      <router-link to="/entertainment">娱乐</router-link>
    </header>
    <router-view></router-view>

  </div>
</template>

<script>
import index from './router/view/index'
import file from './router/view/file.vue'
import news from './router/view/news.vue'
import tvfile from './router/view/tvfile.vue'
import entertainment from './router/view/entertainment.vue'
export default {
  name : 'App',
  components:{index,file,news,tvfile,entertainment}
}

</script>

<style>
  header a{display: inline-block;width: 100px;height: 35px;line-height: 35px;text-align: center;font-size: 14px;border: 1px solid red;color: #000;}
  header{font-size: 0px;}
.router-link-active{color:royalblue }
</style>
