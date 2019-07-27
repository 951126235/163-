<template>
  <header>
    <i class="iconfont icon-home" @click="goto('/home')"></i>
    </div>
    <div class="right">
      <i class="iconfont icon-sousuo" @click="goto('/search')"></i>
      <i class="iconfont icon-shop" @click="goto('/shop')"></i>
    </div>
  </header>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    clearFix()
    background-color #fafafa
    height 88px
    width 750px
    line-height 88px
    position fixed
    left 0
    top 0
    z-index 10
    padding 0 24px
    border-bottom 2px solid #ececec
    .right
      float right
      padding-right 40px
      .icon-sousuo
        margin-left 50px
        margin-right 20px
      i
        font-size 51px
    .icon-home
      float left
      font-size 60px

</style>
