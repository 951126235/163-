<template>
  <div id="app">
    <router-view />
    <Footer v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from './components/Footer/Footer'
  export default {
    name: "App",
    data () {
      return {
        msg: 'App Component'
      }
    },
    components: {
      Footer
    },
    mounted () {
      this.$store.dispatch('getHomeData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height 100%
</style>
