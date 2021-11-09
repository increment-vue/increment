<template>
  <div>
    <BreadCrumbs :title="'LOGBOOK SYSTEM'" />
    <div class="container">
      <p>
        A Logbook System works as a daily record for business transactions. It
        is applicable to all businesses most especially with logistics,
        manufacturing, healthcare, hotels, schools, and many more. One of the
        things that most businesses aim, is the elimination of a manual system.
        Technically, there is no harm in applying a manual logbook system, since
        start-up companies always begin with that. Nowadays, a lot of industries
        are slowly shifting to software innovation; aiming for minimal resource
        consumption, such as hiring people to man for logbook monitoring, and
        thinking, why not handle it in one sitting, with just having a
        centralized software where you can manage all the monitoring at once.
      </p>
      <CaseImage :price="'5000'" :bg="'logbook.jpg'" />
      <p>
        Increment Technologies, aims to give opportunities to business owners
        towards increasing their efficiency and productivity while minimizing
        their resource consumption. Considering having a team of expert
        developers and extensive experience when it comes to software
        development, we can guarantee you a software that will exceed your
        expectations.
      </p>
      <p class="back-return" @click="redirect('/case-studies')">
        &lt;&lt;Back to Case Studies
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container {
  text-align: justify;
  min-height: 100vh;
  background-color: $white;
  padding-top: 40vh;
  padding-bottom: 10vh;
}

.back-return {
  font-weight: bold;
  color: $primary;
  margin-top: 5vh;
}

.back-return:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
import CaseImage from "src/home/generic/case-image.vue";
import ROUTER from "src/router";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    BreadCrumbs,
    CaseImage,
  },
  methods: {
    redirect(param) {
      ROUTER.push(param);
    },
  },
};
</script>
