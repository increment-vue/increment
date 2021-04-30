<template>
  <div class="cw-banner" id="our-services">
    <div class="container">
      <h1 class="title">Our Services</h1>
      <div class="row no-gutters">
        <span class="col-md-3" v-for="(item, index) in services" :key="index">
          <center>
            <img :src="item.src" />
            <p>{{ item.desc }}</p>
          </center>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
export default {
  data() {
    return {
      services: [
        {
          src: require("assets/img/design.png"),
          desc:
            "We use latest editing tools like adobe photoshop, and illustrator for our designing. We also cater making landing page videos using adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.",
        },
        {
          src: require("assets/img/apps.png"),
          desc:
            "The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give best solutions.",
        },
        {
          src: require("assets/img/websites.png"),
          desc:
            "Our developers are contantly upgrading its capabilities to provide best and suitable solutions for your needs. Our disease to create beatiful and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.",
        },
        {
          src: require("assets/img/hosting.png"),
          desc:
            "We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.",
        },
      ],
      common: COMMON,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  float: left;
  background: $secondary;
  min-height: 70vh;
  width: 100%;
}

.title {
  font-weight: 700;
  font-size: 50px;
}

img {
  margin-top: 1vh;
  width: 150px;
  height: 150px;
}

.container {
  padding-top: 12vh;
  padding-bottom: 14vh;
  text-align: center;
  color: white;
}

.row {
  margin-top: 10vh;
  text-align: center;
}

p {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>

