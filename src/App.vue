<template>
  <div id="app">
    <LandingHeader></LandingHeader>
    <transition><router-view></router-view></transition>
    <LandingFooter></LandingFooter>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>

<script>
import LandingHeader from "src/home/Landing/Header.vue";
import LandingFooter from "src/home/Landing/Footer.vue";
export default {
  components: {
    LandingHeader,
    LandingFooter,
  },
  methods: {
    scrollTo() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss">
@import "~assets/style/colors.scss";
@import "~assets/style/theme.css";
#app {
  font-family:'Open Sans', sans-serif;
  color: $black;
}

.return-to-top {
  position: fixed;
  background-image: linear-gradient(180deg, $purple, $secondary);
  color: $white;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 62px;
  text-align: center;
  bottom: 10px;
  left: 10px;
}
.return-to-top:hover {
  cursor: pointer;
  color: $white;
  background-image: linear-gradient(
    180deg,
    $secondary,
    $purple
  );
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

@media screen and (max-width: 1570px) {
  h1 {
    font-size: 150% !important;
  }
  h4 {
    font-size: 100% !important;
  }
}
@media screen and (max-width: 992px) {
  h2 {
    font-size: 150% !important;
  }
  h3 {
    font-size: 120% !important;
  }
}
</style>
