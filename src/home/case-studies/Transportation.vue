<template>
  <div>
    <BreadCrumbs :title="'TRANSPORTATION SYSTEM'" />
    <div class="container">
      <p>
        What can a Software Development Company do with transportation? It can
        develop a high-quality fleet management system that could store
        information for public transportation, RFID system, and more. A fleet
        management system allows businesses to effectively organize and
        coordinate work vehicles to improve efficiency, reduce costs, and
        provide compliance with government’s standards and regulations.
      </p>
      <CaseImage :price="'7000'" :bg="'transportation.jpg'" />
      <p>
        Increment Technologies can offer a variety of services, such as RFID
        system, ticketing system, payment, inventory, store passenger
        information, booking system, scheduling, or even contact tracing. We are
        capable of developing services based on your qualifications and we
        believe that this can create opportunities for you to increase your
        efficiency and reduce cost when it comes to manpower, convenience and
        effort.
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
