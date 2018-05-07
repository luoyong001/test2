import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name:'index',
      meta:{title:'首页'},
      component:(resolve=>require(['./view/index.vue'],resolve))
    },
    {
      path: '/file',
      name:'file',
      meta:{title:'电影'},
      component:(resolve=>require(['./view/file.vue'],resolve))
    },
    {
      path: '/news',
      name:'news',
      meta:{title:'新闻'},
      component:(resolve=>require(['./view/news.vue'],resolve))
    },
    {
      path: '/tvfile',
      name:'tvfile',
      component:(resolve=>require(['./view/tvfile.vue'],resolve))
    },
    {
      path: '/index/user/:id',
      name:'user',
      component:(resolve=>require(['./view/user.vue'],resolve))
    },
    {
      path: '/entertainment',
      component:(resolve=>require(['./view/entertainment.vue'],resolve))
    },
    {//当访问的路径不存在是返回的某个页面（index）
      path:'*',
      redirect:'/index'
    }

  ]
})
