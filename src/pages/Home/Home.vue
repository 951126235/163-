<template>
  <div id="home">
    <header id="homeheader">
      <span class="logo">
        <img class="headerimg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </span>
      <div class="homesearch">
        <i class="iconfont icon-sousuo"></i>
        <span class="input">搜索商品，共xxx款好物</span>
      </div>
      <button class="headerbtn">登录</button>
    </header>
    <div id="homeNav">
      <ul class="homenav-left">
        <li>推荐</li>
        <li>居家</li>
        <li>服饰</li>
        <li>美食</li>
        <li>个护</li>
      </ul>
      <div class="homenav-right">
        <i class="iconfont icon-jiantouxiangxia"></i>
      </div>
    </div>
    <!-- swiper -->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 网易 -->
    <ul id="homeWy">
      <li>
        <i class="homeWy-Left"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="homeWy-center"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="homeWy-right"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- 八个 -->
    <ul id="homeDetail">
      <li>
        <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
        <span>居家生活</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
        <span>居家生活</span>
      </li>
    </ul>
    <!-- 广告 -->
    <div class="remind">
      <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
    </div>
    <!-- 新人 -->
    <div id="XinRen">
      <div class="XinRenheader">- 新人专享礼 -</div>
      <div class="XinrenL">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="XinrenR">
          <div class="XinrenRmain1">
            <div class="title">
              <p>福利社</p>
              <span>今日特价</span>
            </div>
            <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="">
          </div>
          <div class="XinrenRmain2">
            <div class="title">
              <p>新人拼团</p>
              <span>一元起包邮</span>
            </div>
            <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="">
          </div>
      </div>
     </div>
    <!--私人定制  -->
    <div id="personal">
      <span>私人定制</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
  export default {
    data () {
      return {

      }
    },
    mounted () {
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

      })

      //  var mySwiperPersonal = new Swiper ('.personalSwiper', {
      //   loop: true, // 循环模式选项
      //   // 如果需要分页器
      //   pagination: {
      //     el: '.swiper-pagination2',
      //   },
      // })
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  #home
    padding-top 148px
    padding-bottom 210px
    #homeheader
      position fixed
      left 0px
      top 0px
      z-index 50
      display flex
      width 100%
      height 88px
      padding 25px
      background-color #fff
      .logo
        .headerimg
          width 134px
          height 40px
          margin-right 10px
      .homesearch
        display flex
        width 466px
        height 56px
        background-color: rgba(0,0,0,0.1)
        border-radius 10px
        margin-top -10px
        .input
          line-height 56px
          padding-left 20px
          display block
          text-align center
          font-size 28px
          color #999
        .iconfont
          padding-left 20px
          line-height 56px
          vertical-align bottom
          color #999
          font-size 28px
      .headerbtn
        font-size 14px
        width 80px
        height 40px
        margin-left 10px
        color #b4282d
        background #fff
        border-radius 10px
        border 2px solid #b4282d

    #homeNav
      position fixed
      left 0px
      top 88px
      z-index 50
      display flex
      width 100%
      height 60px
      background pink
      .homenav-left
        clearFix()
        width 675px
        height 60px
        li
          float left
          width 80px
          height 100%
          margin 0 20px
          font-size 30px
          text-align center
          line-height 60px
      .homenav-right
        overflow hidden
        width 100px
        height 100%
        background skyblue
        text-align center
        line-height 60px
        .iconfont
          width 30px
          height 30px
          // background red
          font-size 40px
    //轮播图
    #swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 400px
            img
              width 100%
              height 400px
    #homeWy
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 72px
      li
        display flex
        justify-content space-around
        align-items center
        i
          width 32px
          height 32px
          background-size 100%
        .homeWy-Left
          background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
        .homeWy-center
          background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
        .homeWy-center
          background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
    #homeDetail
      overflow hidden
      width 100%
      height 350px
      // background #f4f4f4
      padding-bottom 20px
      li
        float left
        display flex
        flex-direction column
        align-items center
        margin 0px 20px
        width 110px
        height 156px
        img
          margin-bottom 10px

    #XinRen
      overflow hidden
      width 100%
      height 500px
      padding 0 30px
      .XinRenheader
        width 100%
        height 90px
        line-height 90px
        font-size 32px
        text-align center
      .XinrenL
        float left
        display flex
        flex-direction column
        align-items center
        width 342px
        height 410px
        background #F9E9CF
        margin-right 5px
        span
          width 342px
          height 42px
          text-align center
          line-height 42px
          margin-top 30px
          font-size 30px
        img
        display block
          width 258px
          height 257px
          margin 20px 42px
      .XinrenR
        clearbox()
        width 342px
        height 410px
        float right
        .XinrenRmain1
          width 100%
          clearbox()
          float left
          background #FBE2D3
          .title
            float left
            p
              font-size 30px
            span
              color #999
          img
            display block
            float left
            width 200
            height 200px

        .XinrenRmain2
          margin-top 10px
          width 100%
          clearbox()
          float left
          background #FBE2D3
          .title
            float left
            p
              font-size 30px
            span
              color #999
          img
            display block
            float left
            width 200
            height 200px

    #personal
      width 750px
      height 380px
      span
        display block
        width 100%
        height 100px
        padding-left 30px
        font-size 40px
        line-height 100px





















</style>
