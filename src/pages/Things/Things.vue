<template>
  <div id="Thingswrap">
    <Header></Header>
    <div class="center">
      <span :class="$route.path.indexOf('/find')!=-1?'active':''" @click="goTo('/things/find')">发现</span>
      <span :class="$route.path.indexOf('/zhenjia')!=-1?'active':''" @click="goTo('/things/zhenjia')">甄选家</span>
    </div>
     <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header'
  export default {
    data () {
      return {

      }
    },
    components: {
      Header
    },
    mounted () {
      // this.$store.dispatch('getclassflyListData')

    },
    methods: {
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Thingswrap
    width 100%
    height 100%
    .center
      position fixed
      left 260px
      top 15px
      z-index 10
      span
        font-size 28px
        padding-right 36px
      .active
        color #b4282d
        font-weight bold
        font-size 40px
</style>
