<template>
  <div>
    <BreadCrumbs :title="'RFID SYSTEM'" />
    <div class="container">
      <p>
        RFID Systems are used in many industries and in a wide variety of
        applications. Imagine yourself being able to immediately locate
        everything you have misplaced or lost? This is what RFID technology can
        do. Most businesses invest in an RFID system to increase their
        employees’ productivity wherein they don’t have to be within line of
        sight of an item or asset to locate it. It is also one of the most
        effective solutions used in business to organize systems by eliminating
        manual procedures, along with increased inventory and asset visibility,
        and most especially it enables the elimination of human error.
      </p>
      <CaseImage :price="'15,000'" :bg="'rfid.jpg'" />
      <p>
        Increment Technologies can take your business into a higher level of
        management. We can definitely develop and create a RFID system
        exclusively for your organization. Creating opportunities for your
        company to minimize resources, human error, and increase your efficiency
        in the processes. This means that we will design a centralized system,
        so that you can streamline your processes.
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
