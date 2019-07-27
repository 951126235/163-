<template>
  <div id="home">
    <div id="homeMenu"  v-show="isShowMenu">
      <span class="homeMenu-header">全部频道</span>
      <i @click="isShowMenu=!isShowMenu" class="iconfont icon-jiantouxiangshang"></i>
      <ul class="homeMenu-main">
        <li :class="{active:currentIndex === index}" @click="chenage(index)" v-for="(item,index) in navListData" :key="index">{{item}}</li>
      </ul>
    </div>
    <!-- 蒙布 -->
    <div @click="isShowMenu=!isShowMenu" v-show="isShowMenu" id="mask"></div>
    <!-- 搜索 -->
    <header id="homeheader">
      <span class="logo">
        <img
          class="headerimg"
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt
        />
      </span>
      <div @click="toSearch" class="homesearch">
        <i class="iconfont icon-sousuo"></i>
        <span class="input">搜索商品，共xxx款好物</span>
      </div>
      <button class="headerbtn">登录</button>
    </header>
    <div v-show="!isShowMenu" id="homeNav">
      <div class="home-wrap"  ref="headerWrap">
        <ul class="homenav-left">
          <li :class="{active:currentIndex === index}" @click="chenage(index)" v-for="(item,index) in navListData" :key="index">{{item}}</li>
        </ul>
      </div>
      <div @click="isShowMenu=!isShowMenu" class="homenav-right">
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
    <ul id="homeDetail" v-if="homeData.kingKongModule">
      <li v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.text}}</span>
      </li>
    </ul>
    <!-- 广告 -->
    <div class="remind">
      <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt />
    </div>
    <!-- 新人 -->
    <div id="XinRen">
      <div class="XinRenheader">- 新人专享礼 -</div>
      <div class="XinrenL">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt />
      </div>
      <div class="XinrenR">
        <div class="XinrenRmain1">
          <div class="title">
            <p>福利社</p>
            <span>今日特价</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt />
        </div>
        <div class="XinrenRmain2">
          <div class="title">
            <p>新人拼团</p>
            <span>一元起包邮</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt />
        </div>
      </div>
    </div>
    <!--私人定制  -->
    <section id="personalTailor" v-if="homeData.personalShop">
      <h3>私人定制</h3>
      <div class="secondSwiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <img :src="homeData.personalShop[0].listPicUrl">
              <span>{{homeData.personalShop[0].name}}<i>¥{{homeData.personalShop[0].counterPrice}}</i></span>
            </div>
            <div>
              <img :src="homeData.personalShop[1].listPicUrl">
              <span>{{homeData.personalShop[1].name}}<i>¥{{homeData.personalShop[1].counterPrice}}</i></span>
            </div>
            <div>
              <img :src="homeData.personalShop[2].listPicUrl">
              <span>{{homeData.personalShop[2].name}}<i>¥{{homeData.personalShop[2].counterPrice}}</i></span>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img :src="homeData.personalShop[3].listPicUrl">
              <span>{{homeData.personalShop[3].name}}</i>¥{{homeData.personalShop[3].counterPrice}}</span>
            </div>
            <div>
              <img :src="homeData.personalShop[4].listPicUrl">
              <span>{{homeData.personalShop[4].name}}</i>¥{{homeData.personalShop[4].counterPrice}}</span>
            </div>
            <div>
              <img :src="homeData.personalShop[5].listPicUrl">
              <span>{{homeData.personalShop[5].name}}</i>¥{{homeData.personalShop[5].counterPrice}}</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img :src="homeData.personalShop[6].listPicUrl">
              <span>{{homeData.personalShop[6].name}}<i>¥{{homeData.personalShop[6].counterPrice}}</i></span>
            </div>
            <div>
              <img :src="homeData.personalShop[7].listPicUrl">
              <span>{{homeData.personalShop[7].name}}<i>¥{{homeData.personalShop[7].counterPrice}}</i></span>
            </div>
            <div>
              <img :src="homeData.personalShop[8].listPicUrl">
              <span>{{homeData.personalShop[8].name}}<i>¥{{homeData.personalShop[8].counterPrice}}</i></span>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img :src="homeData.personalShop[9].listPicUrl">
              <span>{{homeData.personalShop[9].name}}<i>¥{{homeData.personalShop[9].counterPrice}}</i></span>
            </div>
            <div>
              <img :src="homeData.personalShop[10].listPicUrl">
              <span>{{homeData.personalShop[10].name}}<i>¥{{homeData.personalShop[10].counterPrice}}</i></span>
            </div>
            <div>
              <img :src="homeData.personalShop[11].listPicUrl">
              <span>{{homeData.personalShop[11].name}}<i>¥{{homeData.personalShop[11].counterPrice}}</i></span>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="el2 swiper-pagination"></div>
      </div>
    </section>
    <!-- 限时购 -->
    <section id="sixWrap" v-if="homeData.flashSaleModule">
      <div class="split"></div>
      <h3>
        <span class="Left">限时购</span>
        <span class="Right">更多></span>
      </h3>
      <sixList :sixListData="homeData.flashSaleModule.itemList"/>
    </section>
     <!-- 新品首发 -->
    <section id="sixWrap">
      <div class="split"></div>
      <h3>
        <span class="Left">限时购</span>
        <span class="Right">更多></span>
      </h3>
      <newItems :newItemsData="homeData.newItemList"/>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import sixList from '../../components/sixList/sixList.vue'
import newItems from '../../components/newItems/newItems.vue'

import BScroll from 'better-scroll'
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import { reqHomedata } from '../../api'
import {mapState} from 'vuex'
export default {
  components: {
    sixList,
    newItems
  },
  data() {
    return {
      isShowMenu: false,
      currentIndex:0,
      navListData: ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']// 导航的数据
    }
  },
  methods: {
    chenage(index){
      this.currentIndex=index
    },
    toSearch(){
      this.$router.push('/search')
    }
  },
  created(){
      this.$nextTick(()=>{
          const topScroll = new BScroll(this.$refs.headerWrap, {
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

    computed: {
      ...mapState(['homeData']),
    },

  async mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }

    })
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
#home
  padding-top: 148px;
  padding-bottom: 105px;
  position relative
  // 蒙布
  #mask
    position absolute
    top 200px
    left 0px
    z-index 50
    width 100%
    height 100%
    background rgba(0,0,0,0.5)
  /* 菜单 */
  #homeMenu
    clearFix()
    position absolute
    z-index 51
    left 0px
    top 88px
    width 750px
    height 372px
    background white
    span
      float left
      width 275px
      height 60px
      padding-left 30px
      line-height 60px
      font-size 30px
    i
      display inline-block
      float right
      height 60px
      text-align center
      line-height 60px
      font-size 30px
      width 100px
    .homeMenu-main
      clearFix()
      float left
      width 100%
      height 372px
      li
        float left
        width 150px
        height 56px
        margin-left 30px
        margin-bottom 40px
        background #FAFAFA
        text-align center
        line-height 56px
        border 1px solid #E3E3E3
        &.active

          color #b4282d
          border 2px solid #b4282d

  /* 头部 */
  #homeheader
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 99;
    display: flex;
    width: 100%;
    height: 88px;
    padding: 25px;
    background-color: #fff;

    .logo
      .headerimg
        width: 134px;
        height: 40px;
        margin-right: 10px;

    .homesearch
      display: flex;
      width: 466px;
      height: 56px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-top: -10px;

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
    .headerbtn
      font-size: 14px;
      width: 80px;
      height: 40px;
      margin-left: 10px;
      color: #b4282d;
      background: #fff;
      border-radius: 10px;
      border: 2px solid #b4282d;
  /* 导航 */
  #homeNav
    display none
    position: fixed;
    left: 0px;
    top: 88px;
    z-index: 50;
    display: flex;
    width: 100%;
    height: 60px;
    background white
    .home-wrap
      width 675px
      height: 66px;
      overflow hidden
      .homenav-left
        clearFix();
        width: 1080px;
        height: 66px;
        overflow hidden
        padding-bottom 8px
        li
          float: left;
          width: 112px;
          height: 100%;
          margin: 0 20px;
          font-size: 30px;
          text-align: center;
          line-height: 66px;
          &.active
            box-sizing border-box
            color #b4282d
            border-bottom 6px solid #b4282d
    .homenav-right
      float right
      overflow: hidden;
      width: 100px;
      height: 100%;
      // background: skyblue;
      line-height: 66px;
      text-align center
      .iconfont
        width: 100px;
        height: 66px;
        font-size: 32px;
  // 轮播图
  #swiper-container
    width: 100%;
    height: 100%;
    .swiper-wrapper
      width: 100%;
      height: 100%;
      background white
      .swiper-slide
        width: 100%;
        height: 400px;
        img
          width: 100%;
          height: 400px;
  /* 网易 */
  #homeWy
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 72px;
    li
      display: flex;
      justify-content: space-around;
      align-items: center;
      i
        width: 32px;
        height: 32px;
        background-size: 100%;
      .homeWy-Left
        background-image: url('http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');
      .homeWy-center
        background-image: url('http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');
      .homeWy-center
        background-image: url('http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');
  /* 详情八个图 */
  #homeDetail
    overflow: hidden;
    width: 100%;
    height: 350px;
    // background #f4f4f4
    padding-bottom: 20px;

    li
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 20px;
      width: 110px;
      height: 156px;

      img
        margin-bottom: 10px;
  /* 新人 */
  #XinRen
    overflow: hidden;
    width: 100%;
    height: 500px;
    padding: 0 30px;
    .XinRenheader
      width: 100%;
      height: 90px;
      line-height: 90px;
      font-size: 32px;
      text-align: center;
    .XinrenL
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 342px;
      height: 410px;
      background: #F9E9CF;
      margin-right: 5px;
      span
        width: 342px;
        height: 42px;
        text-align: center;
        line-height: 42px;
        margin-top: 30px;
        font-size: 30px;
      img, display block
        width: 258px;
        height: 257px;
        margin: 20px 42px;
    .XinrenR
      clearFix();
      width: 342px;
      height: 410px;
      float: right;
      .XinrenRmain1
        width: 100%;
        clearFix();
        float: left;
        background: #FBE2D3;
        .title
          float: left;
          p
            font-size: 30px;
          span
            color: #999;
        img
          display: block;
          float: left;
          width: 200;
          height: 200px;
      .XinrenRmain2
        margin-top: 10px;
        width: 100%;
        clearFix();
        float: left;
        background: #FBE2D3;
        .title
          float: left;
          p
            font-size: 30px;
          span
            color: #999;
        img
          display: block;
          float: left;
          width: 200;
          height: 200px;
  /* 私人订制 */
  #personalTailor
    overflow hidden
    margin-bottom 30px
    h3
      height 100px
      line-height 100px
      font-size 32px
      padding-left 30px
      text-align center
    .swiper-container
      width: 100%
      height: 380px
      .swiper-wrapper
        width: 100%
        height: 100%
        background white
        .swiper-slide
          clearFix()
          width: 100%
          height: 311px
          div
            margin-left 20px
            width 216px
            height 311px
            float left
            img
              background-color #f5f5f5
              height 216px
              width 216px
              margin-bottom 12px
/* 限时购 */
  #sixWrap
    width 100%
    height 776px
    .split
      width 100%
      height 20px
      background #f4f4f4
    h3
      margin-top 20px
      padding 0 40px
      clearFix()
      display block
      width 100%
      height 100px
      text-align center
      line-height 100px
      .Left
        float left
        font-size 32px
      .Right
        float right
        font-size 32px
</style>
