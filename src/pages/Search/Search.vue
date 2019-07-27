<template>
  <div class="bg">
    <div class="search">
      <div class="hd">
        <div class="inner">
          <div class="ipt">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="夏季清凉 防晒必备" v-model="searchContent" @input="search" />
            <i class="clear" @click="handleClear" v-show="searchContent">X</i>
          </div>
          <span @click="goTo('/home')">取消</span>
        </div>
      </div>
      <div class="keyshow" v-show="searchContent">
        <ul>
          <li class="showList" v-for="(item,index) in reqkeyword" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="cnt" v-show="!searchContent">
        <header class="hd">
          <h3>热门搜索</h3>
        </header>
        <ul class="list">
          <li
            class="item"
            v-for="(item,index) in searchInitialData.hotKeywordVOList"
            :key="index"
          >{{item.keyword}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapState } from "vuex";
import { reqThingsSearch } from "../../api/index";
export default {
  data() {
    return {
      searchContent: "",
      reqkeyword: [],
      flag:false
    };
  },
  mounted() {
    this.$store.dispatch("getSearchInitialData");
  },
  computed: {
    ...mapState(["searchInitialData"])
  },
  methods: {
    async search() {
      //发请求获取搜索关键字对应的内容
      if (this.flag) {
        return;
      }
      const result = await reqThingsSearch(this.searchContent);
        this.flag = true
        if (result.code * 1 === 200) {
          this.reqkeyword = result.data;
          console.log(this.reqkeyword);
        }
      setTimeout(() => {
        this.flag = false
      }, 300);


      // if(this.time){
      //   return
      // }
      // this.time = setTimeout(async()=>{
      //     const result = await reqThingsSearch(this.searchContent)
      //     console.log(result)
      //     if(result.code*1 === 200){
      //         this.reqkeyword = result.data
      //         console.log(this.reqkeyword)
      //     }
      //     this.time=''
      // },500)
    },
    goTo(path) {
      this.$router.replace(path);
    },
    handleClear() {
      this.searchContent = "";
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.bg {
  width: 100%;
  height: 100%;
  background: #eeeeee;

  .search {
    width: 750px;
    background: white;

    .hd {
      width: 100%;
      height: 87px;

      .inner {
        width: 100%;
        height: 88px;
        color: rgba(0, 0, 0, 0.8);
        background: transparent;
        padding: 0 30px;
        line-height: 88px;

        .ipt {
          width: 564px;
          height: 56px;
          background: #eee;
          padding: 0 20px;
          line-height: 56px;
          margin-top: 20px;
          margin-right: 30px;
          display: inline-block;

          input {
            font-size: 28px;
            clear: #eee;
            padding-left: 15px;
            background: #eee;
            outline: none;
          }

          .clear {
            width: 50px;
            height: 50px;
            float: right;
            display: inline-block;
            // margin-left 125px
          }
        }

        span {
          font-size: 28px;
          color: black;
        }
      }
    }

    .keyshow {
      width: 100%;
      padding: 30px 20px;
      background: #ffffff;
      box-sizing: border-box;

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;

        li {
          padding: 5px 10px;
          margin-right: 15px;
          margin-bottom: 15px;
          color: #666;
          font-size: 28px;
        }
      }
    }

    .cnt {
      width: 690px;
      height: 100%;
      padding: 0 10px 0px 20px;

      .hd {
        width: 690px;
        height: 90px;
        font-size: 28px;
        color: #999;
        line-height: 90px;
      }

      .list {
        display: flex;
        flex-wrap: wrap;

        .item {
          padding: 0 15px;
          border: 1px solid #999;
          color: black;
          font-size: 24px;
          height: 45px;
          line-height: 45px;
          margin: 0 32px 32px 0;
        }
      }
    }
  }
}
</style>
