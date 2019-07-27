<template>
  <div>
   <h1>个人中心懒得写</h1>
   <h2>{{userInfo}}</h2>
   <button @click="toLogout">退出登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['userInfo']),
    },
    methods: {
      toLogout () {
        this.$store.dispatch('logout',() => {
          this.$router.replace('/login')
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
