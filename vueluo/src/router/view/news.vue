<template>
	<div class="app">
      <ul>
        <li v-for="item in newlist">
          <a :href="item.link">
            <img v-if="item.picInfo.length!=0" :src="item.picInfo[0].url" alt="">
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
	</div>
</template>

<script>
    export default {
        name: 'app',
        data(){
          return{
            newlist:[{
              link: "https://3g.163.com/all/article/DH5P0E8N00018M4D.html?rec=i.exc",

              picInfo: [
                {height: null, ref: null, url: '111111'}
              ],
              title:
                "给孩子起怪名，中国家长是怎么想的",

            }],//新闻列表
            //imgurl:'http://cms-bucket.nosdn.127.net/0c0a595c7ccb4b1c8ffb23797a77cf7920180507071902.png'
          }
        },
      created(){
        this.getNewsList();
      },
      mounted(){

      },
      computed:{
          getimgurl(item){
            console.log(item)
             /* return imgurl=item.picInfo.forEach(function (it) {
                    it.url
              })*/
          }
      },
      methods:{
        getNewsList:function () {
          var _this=this;
          //http://3g.163.com
          var url='/touch/jsonp/sy/recommend/10-10.html?hasad=1&miss=57&refresh=A&offset=0&size=10&callback=json'
          _this.$api.get(url,{},function(msg) {
           var  listArry=msg.data.split('json(')[1].split(')')[0];
            listArry=JSON.parse(listArry);
            listArry.list.forEach(function (it) {
              return _this.newlist.push(it)
            })
          })
        }
      }

    }
</script>

<style lang="css">
li{margin-top: 15px;list-style: none}
li img{width: 200px;height: 100px;vertical-align: middle}
li span{vertical-align: middle}
</style>
