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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
