<template>
  <section id="Classfly">
    <header class="Classflyheader">
      <div class="Classflysearch">
        <i class="iconfont icon-sousuo"></i>
        <span class="input">搜索商品，共xxx款好物</span>
      </div>
    </header>
    <div class="ClassflyWrap">
      <!-- 左侧滑动 -->
      <section class="leftNav" ref="wrapper" v-if="classflyData.categoryL1List">
        <ul class="navList">
          <li @click="chenage(index)" :class="{active:clickIndex === index}" v-for="(item,index) in classflyData.categoryL1List" :key="item.id">{{item.name}}</li>
        </ul>
      </section>
      <!-- 右侧滑动 -->
      <section class="rightMain" ref="wrapper2" v-if="classflyData.categoryL1List">
        <div class="rightMainWarp">
          <img :src="classflyData.categoryL1List[clickIndex].wapBannerUrl" alt="">
          <ul>
            <li v-for="(item2) in classflyData.categoryL1List[clickIndex].subCateList" :key="item2.id">
              <img :src="item2.wapBannerUrl" alt="">
              <span>{{item2.name}}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import { reqClassflydata } from '../../api'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        clickIndex:0
      }
    },
    methods: {
       chenage(index){
        this.clickIndex=index
      },
    },
    mounted() {
      //给分发事件事先准备一个回调函数用于处理等待异步数据回来前better-scorll不能滚动的问题
      this.$store.dispatch('getClassflydata',()=>{
          this.$nextTick(()=>{
            const leftScroll = new BScroll(this.$refs.wrapper, {
              probeType: 1,
              click: true,
              scrollY: true,
              // eventPassthrough: "vertical"
          })
          const rightScroll = new BScroll(this.$refs.wrapper2, {
              probeType: 1,
              click: true,
              scrollY: true,
              // eventPassthrough: "vertical"
          })
        })
      })
    },
    computed: {
      ...mapState(['classflyData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Classfly
    .Classflyheader
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 99;
        display: flex;
        width: 100%;
        height: 88px;
        padding: 16px 30px;
        background-color: #fff;
        .Classflysearch
          display: flex;
          justify-content center
          width: 100%;
          height: 56px;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          .input
            line-height: 56px;
            padding-left: 20px;
            display: block;
            text-align: center;
            font-size: 28px;
            color: #999;

          .iconfont
            padding-left: 20px;
            line-height: 56px;
            vertical-align: bottom;
            color: #999;
            font-size: 28px;


    .ClassflyWrap
      clearFix()
      width 100%
      height 1228px
      padding-top 88px
      .leftNav
        height 1140px
        float left
        .navList
          width 162px
          li
            text-align center
            line-height 50px
            width 100%
            height 50px
            color #7f7f7f
            font-size 26px
            margin-top 40px
            &:nth-child(1)
              margin-top 0px
            &.active
              color #b4282d
              border-left 6px solid red
      .rightMain
        float left
        width 588px
        height 1140px
        .rightMainWarp
            padding 0px 30px 100px 30px
            img
              width 100%
              height 192px
            ul
              clearFix()
              width 528px
              height 1080px
              margin-top 20px

              li
                float left
                width 144px
                height 216px
                margin-right 32px
                img
                  width 144px
                  height 144px
                span
                  width 144px
                  height 144px
                  font-size 28px

</style>
