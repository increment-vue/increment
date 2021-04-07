<template>
  <div class="body">
    <LandingBanner />
    <LandingWhoWeAre />
    <LandingOurServices />
    <LandingHowWeWork />
    <LandingOurProjects />
    <LandingCaseStudies />
    <LandingOurValues />
    <LandingTechnologies />
    <LandingWhatTheySayAboutUs />
    <span class="return-to-top" @click="scrollTo()">
      <i class="fas fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.body {
  margin: 0px;
}
.return-to-top {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $white;
  color: primary;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 62px;
  text-align: center;
}

.fa-angle-up {
  color: $primary !important;
}
.return-to-top:hover {
  cursor: pointer;
  color: $primary;
}
</style>

<script>
import ROUTER from "src/router";
import Jquery from "jquery";
import LandingBanner from "src/home/Landing/Banner.vue";
import LandingWhoWeAre from "src/home/Landing/WhoWeAre.vue";
import LandingOurServices from "src/home/Landing/Services.vue";
import LandingHowWeWork from "src/home/Landing/HowWeWork.vue";
import LandingOurProjects from "src/home/Landing/Projects.vue";
import LandingCaseStudies from "src/home/Landing/CaseStudies.vue";
import LandingOurValues from "src/home/Landing/Values.vue";
import LandingTechnologies from "src/home/Landing/Technologies.vue";
import LandingWhatTheySayAboutUs from "src/home/Landing/Testimonials.vue";
export default {
  components: {
    LandingBanner,
    LandingWhoWeAre,
    LandingOurServices,
    LandingHowWeWork,
    LandingOurProjects,
    LandingCaseStudies,
    LandingOurValues,
    LandingTechnologies,
    LandingWhatTheySayAboutUs,
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery("#header").offset().top,
        },
        500
      );
    },
  },
};
</script>

