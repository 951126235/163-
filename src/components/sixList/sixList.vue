<template>
  <section id="sixWrap">
      <ul>
        <li v-for="(item,index) in sixListData" :key="index">
          <img :src="item.picUrl" alt="">
          <div>
            <span>${{item.activityPrice}}</span>
            <del>${{item.originPrice}}</del>
          </div>
        </li>
      </ul>
    </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{ sixListData:Array }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #sixWrap
    margin-bottom 20px
    ul
      clearbox()
      padding-left 25px
      width 100%
      height 636px
      li
        float left
        margin-right 25px
        width 216px
        height 318px
        img
          width 216px
          height 216px
          background #f4f4f4
        div
          text-align center
          line-height 100px
          width 100%
          height 100px
          span
            color red
            margin-right 10px
          del
            color #7f7f7f



</style>
