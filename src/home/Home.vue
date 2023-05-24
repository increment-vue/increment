<template>
  <div class="body">
    <LandingBanner/>
    <LandingWhoWeAre/>
    <LandingOurServices />
    <LandingAd/>
    <LandingJiphAd/>
    <LandingHowWeWork />
    <LandingOurProjects />
    <LandingCaseStudies />
    <LandingOurValues />
    <LandingTechnologies />
    <LandingWhatTheySayAboutUs />
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";
</style>

<script>
import LandingBanner from "src/home/Landing/Banner.vue";
import LandingAd from "src/home/Landing/PayhiramAd.vue";
import LandingJiphAd from "src/home/Landing/JiphAd.vue";
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
    LandingAd,
    LandingJiphAd,
    LandingWhoWeAre,
    LandingOurServices,
    LandingHowWeWork,
    LandingOurProjects,
    LandingCaseStudies,
    LandingOurValues,
    LandingTechnologies,
    LandingWhatTheySayAboutUs,
  },
};
</script>

