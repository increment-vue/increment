<template>
  <div>
    <BreadCrumbs :title="'PAYROLL SYSTEM'" />
    <div class="container">
      <p>
        A Payroll System is one of the top necessities of a company. It is an
        important software that calculates payroll accurately in compliance with
        taxing authority. The very main purpose of a payroll system is to
        prepare a detailed salary record of all the employees in an
        organization, making sure that it has the accurate computation of the
        working hours.
      </p>
      <CaseImage :price="'15,000'" :bg="'payroll.jpg'" />
      <p>
        Increment Technologies can and will achieve this system that accurately
        computes the salaries of the employees, can handle multi company
        transactions, provide detailed reports from payment transactions, and
        maintain employee profiles. We believe that Increment Technologies is
        the right software company that will surely provide you the solutions
        you need in your business.
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
