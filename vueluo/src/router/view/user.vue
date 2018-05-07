<template>
	<div class="app">
    <p>用户信息</p>
      {{$route.params.id}}
	</div>
</template>

<script>
    export default {
        name: 'app',
        mounted(){
          console.log(this.$route.params.id)
        }
    }
</script>

<style lang="css">

</style>
