<template>
  <div id="app">
    <LandingHeader></LandingHeader>
    <transition><router-view></router-view></transition>
    <LandingFooter></LandingFooter>
  </div>
</template>

<script>
import LandingHeader from "src/home/Landing/Header.vue";
// import LandingFooter from "src/home/Landing/Footer.vue";
export default {
  components: {
    LandingHeader,
    // LandingFooter,
  },
};
</script>
<style lang="scss">
@import "~assets/style/colors.scss";
#app {
  font-family: "Open Sans", sans-serif;
}

h1 {
  font-size: 50px !important;
  font-weight: 900 !important;
}

h2 {
  font-size: 40px !important;
  font-weight: 800 !important;
}

h3 {
  font-size: 28px !important;
  font-weight: 700 !important;
}

h4 {
  font-size: 20px !important;
}

p {
  font-size: 16px !important;
}

.section-container {
  width: 90% !important;
  margin-left: 5% !important;
  margin-right: 5% !important;
  min-height: 100vh !important;
  padding-top: 20vh;
  padding-bottom: 20vh;
}
.body {
  margin: 0px !important;
  width: 100% !important;
}

 @media screen and (max-width: 1570px) {
  h1{
    font-size: 150% !important;
  }
  h4 {
    font-size: 100% !important;
  }
}
// @media screen and (max-width: 992px) {
//   h1{
//     font-size: 30px !important;
//   }
// }
</style>
