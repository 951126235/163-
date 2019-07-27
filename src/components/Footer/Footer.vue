<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')"><!-- 什么时候用对象语法: 类名确定, 但不确定有没有 -->
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-guizi"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/things/find'||$route.path==='/things/zhenjia'}" @click="goTo('/things/find')">
      <span class="item_icon">
        <i class="iconfont icon-wuping"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/shop'}" @click="goTo('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-shop"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on: $route.path==='/profile'}" @click="goTo(userInfo ? 'profile' : 'login')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    name: 'Footer',
    methods: {
      goTo (path) {
        // 编程式路由导航
        this.$router.replace(path)
      }
    },
    computed: {
      ...mapState(['userInfo']),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin-top 16px
      color #999999
      &.on
        color red
      span
        font-size 24px
        // margin-top 2px
        // margin-bottom 2px
        .iconfont
          font-size 36px
</style>
