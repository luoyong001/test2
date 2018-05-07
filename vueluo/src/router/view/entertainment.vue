<template>
	<div id="app">
      <ul>
        <li v-for="item in musicdata"></li>
      </ul>
	</div>
</template>

<script>
    export default {
        name: 'app',
      data(){
          return{
            musicdata:[]
          }
      },
      created(){
          this.getMusic();
      },
      methods:{
          getMusic(){
            var _this=this,url='/search-ajaxsearch-searchall?kw=流行&pi=1&pz=10'
            _this.$api.get(url,{},function (msg) {
                console.log(msg)
            })
          }

      }
    }
</script>

<style lang="css">

</style>
