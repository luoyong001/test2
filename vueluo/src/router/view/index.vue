<template>
	<div class="app">
    <p>首页信息</p>
    <router-link to="/index/user/121221">
      跳转用户
    </router-link>
	</div>
</template>

<script>
  import user from './user'
    export default {
        name: 'app',
      components:{user}
    }
</script>

<style lang="css">

</style>
