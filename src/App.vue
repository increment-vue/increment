<template>
  <div id="app">
    <!-- <Home/> -->
    <LandingHeader></LandingHeader>
    <transition>
      <router-view></router-view>
    </transition>
    <LandingFooter></LandingFooter>
  </div>
</template>

<script>
import LandingHeader from 'src/home/Landing/Header.vue'
import LandingFooter from 'src/home/Landing/Footer.vue'
export default {
  components: {
    LandingHeader,
    LandingFooter
  }
}
</script>
<style lang="scss">
@import "~assets/style/colors.scss";
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
