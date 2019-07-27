<template>
  <div id="Findwrap">
    <nav ref="navWrap">
      <ul class="navList">
        <li v-for="(thing) in thingsNav" :key="thing.tabId">{{thing.tabName}}</li>
      </ul>
    </nav>
    <div class="mainWrap">
      <section class="mainWrapcontent" v-for="(items,index) in thingsData" :key="index">
        <div class="mainWrapcontentList" v-for="(item,index) in items.topics" :key="index">
          <div class="style1" v-if="item.style===1">
            <div class="split"></div>
            <section class="wrap">
              <h3>
                <div>
                  <img :src="item.avatar" alt="">
                </div>
                <span>{{item.nickname}}</span>
              </h3>
              <p>{{item.title}}</p>
              <div class="bigImg">
                <img :src="item.picUrl" alt="">
              </div>
              <footer>
                <i class="iconfont icon-yanjing"></i>
                <span>{{item.readCount}}人看过</span>
              </footer>
            </section>
          </div>
          <div class="style2" v-if="item.style===2">
            <div class="split"></div>
            <section class="wrap">
              <div class="left">
                <h3>
                  <div><img :src="item.avatar" alt=""></div>
                  <span>{{item.nickname}}</span>
                </h3>
                <p class="big">{{item.title}}</p>
                <p class="small">{{item.subTitle}}</p>
                <section>
                  <i class="iconfont icon-yanjing"></i>
                  <span>{{item.readCount}}人看过</span>
                </section>
              </div>
              <div class="right">
                <img :src="item.picUrl" alt="">
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState } from 'vuex';

  export default {
    data () {
      return {

      }
    },
    created(){
      this.$nextTick(()=>{
          const topScroll = new BScroll(this.$refs.navWrap, {
            startX: 0,
            probeType: 1,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
        })
      })
    },
    mounted () {
      this.$store.dispatch('getThingsNav')
      this.$store.dispatch('reqThingsData')
    },
    computed: {
      ...mapState(['thingsNav','thingsData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Findwrap
    nav
      width 100%
      height 75px
      position fixed
      top 88px
      left 0px
      overflow hidden
      background white
      .navList
        clearFix()
        width 980px
        height 75px
        li
          height 100%
          line-height 75px
          text-align center
          float left
          font-size 28px
          color #7f7f7f
          padding 0px 8px
          margin 0px 20px
    .mainWrap
      width 750px
      overflow hidden
      padding-bottom 100px
      margin-top 163px
      .mainWrapcontent
        width 100%
        .mainWrapcontentList
          width 100%
          .style1
            width 100%
            .split
              width 750px
              height 20px
              background #f4f4f4
            .wrap
              padding 32px 30px
              h3
                display flex
                width 100%
                height 54px
                margin-bottom 24px
                line-height 54px
                div
                  width 54px
                  height 54px
                  margin-right 14px
                  img
                    border-radius 27px
              p
                width 100%
                height 84px
                font-size 32px
                margin-bottom 16px
              .bigImg
                width 100%
                img
                  border-radius 10px
              footer
                display flex
                color #999
                margin-top 10px
                font-size 28px
                i
                  width 30px
                  height 30px
                  margin-right 10px
          .style2
             width 100%
            .split
              width 750px
              height 20px
              background #f4f4f4
            .wrap
              overflow hidden
              padding 32px 30px
              .left
                float left
                display flex
                flex-direction column
                width 400px
                h3
                  display flex
                  width 100%
                  height 54px
                  line-height 54px
                  div
                    width 54px
                    height 54px
                    margin-right 10px
                    img
                      border-radius 27px
                  span
                    font-size 28px
                .big
                  color: #333;
                  font-size 35px
                  padding-top 32px
                  letter-spacing 1px
                .small
                  padding-top 8px
                  color #7f7f7f
                  font-size 28px
                section
                  margin-top 18px
                  color #999
              .right
                float right
                width 272px
                height 272px
                img
                  width 100%
                  height 100%
                  border-radius 10px
</style>
