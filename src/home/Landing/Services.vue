<template>
  <div id="our-services">
    <Curve
      :color="curveStyle1"
      :use="true"
      :stylecss="{
        backgroundColor: 'white',
      }"
    ></Curve>
    <div class="cw-banner">
      <SectionHeader
        :title="'OUR SERVICES'"
        :style="style"
        :description="'What we offer are innovative solutions'"
      ></SectionHeader>
      <div class="container">
        <div class="row">
          <span class="card" v-for="(item, index) in services" :key="index">
            <center>
              <font-awesome-icon :icon="item.class" class="font-awesome-icon" />
            </center>
            <b
              ><p class="subtitle">{{ item.title }}</p></b
            >
            <span style="font-size: 13px; color: black">{{ item.desc }}</span>
          </span>
        </div>
      </div>
    </div>
    <Curve
      :color="curveStyle2"
      :use="false"
      :stylecss="{
        backgroundColor: 'white',
      }"
    ></Curve>
  </div>
</template>

  <style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  float: left;
  width: 100%;
  background: linear-gradient(
    180deg,
    $gradientPrimary 0%,
    $gradientSecondary 100%
  );
  margin-top: -275px;
  padding: 50px 0 50px 0;
}
.container {
  text-align: center;
  color: $white;
}
.card {
  width: 23%;
  height: 400px;
  margin: 1%;
  padding: 15px;
  border-radius: 15px;
}

.font-awesome-icon {
  margin-top: 30px;
  margin-bottom: 30px;
  color: $secondary;
  font-size: 80px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: $primary;
}

img {
  margin-top: 1vh;
  width: 150px;
  height: 150px;
}

.row {
  text-align: center;
}

@media only screen and (max-width: 1200px) {
  .card {
    width: 40% !important;
    height: 370px;
    margin: 5% !important;
  }
}

@media only screen and (max-width: 992px) {
  .card {
    width: 60% !important;
    height: 340px;
    margin: 5% 20% !important;
  }
}

@media only screen and (max-width: 770px) {
  .card {
    width: 60% !important;
    height: 360px;
    margin: 5% 20% !important;
  }
}

@media only screen and (max-width: 450px) {
  .card {
    width: 60% !important;
    height: 450px;
    margin: 5% 20% !important;
  }
}
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import Curve from "src/home/generic/svgCurve.vue";
import ColorsJS from "src/assets/style/colors.js";
import SectionHeader from "src/home/generic/sectionHeader.vue";
import {
  faPalette,
  faMobileAlt,
  faDesktop,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    Curve,
    SectionHeader,
  },
  data() {
    return {
      curveStyle1: ColorsJS.gradientPrimary,
      curveStyle2: ColorsJS.gradientSecondary,
      style: {
        color: ColorsJS.white,
      },
      services: [
        {
          title: "Design",
          class: faPalette,
          desc: "We use latest editing tools like adobe photoshop, and illustrator for our designing. We also cater making landing page videos using adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.",
        },
        {
          title: "Mobile",
          class: faMobileAlt,
          desc: "The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give best solutions.",
        },
        {
          title: "Web",
          class: faDesktop,
          desc: "Our developers are contantly upgrading its capabilities to provide best and suitable solutions for your needs. Our disease to create beatiful and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.",
        },
        {
          title: "Hosting",
          class: faGlobe,
          desc: "We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.",
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
