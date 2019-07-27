<template>
  <section id="sixWrap">
      <ul>
        <li v-for="(newItem,index) in newItemsData" :key="newItem.id">
          <img :src="newItem.listPicUrl" alt="">
          <div>
            <span class="now">{{newItem.name}}</span>
          <i class="current">¥{{newItem.counterPrice}}</i>
          </div>
        </li>
      </ul>
    </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      newItemsData:Array
     }
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
          display flex
          flex-direction column
          flex-wrap: nowrap
          text-align center
          span
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            color #7f7f7f
          i
            color red



</style>
