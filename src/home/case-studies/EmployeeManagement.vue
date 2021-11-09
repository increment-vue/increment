<template>
  <div>
    <BreadCrumbs :title="'EMPLOYEE MANAGEMENT'" />
    <div class="container">
      <p>
        The Employee Management System maintains the professional and personal
        details of the employees as well as the company itself, in an organized
        manner. It’s importance to the company is that it manages and lowers the
        burden or even pressure on the Human Resource Department and Business
        Managers. This does not just benefit the established companies, but also
        those who are managing their business alone, with a starting number of
        workforce; since start-up business needs to be taken care and monitored
        in order for it to expand.
      </p>
      <CaseImage :price="'7000'" :bg="'employee.jpg'" />
      <p>
        Increment Technologies, exclusively develops a software for Employee
        Management that would benefit the company in terms of the following:
        employee monitoring, fewer compliance risk, minimizing manual errors,
        higher productivity, lower cost, and monitoring of working hours. As a
        business, your number one asset is your employees, thus making sure that
        they are properly managed especially when they are increasing, having a
        proper software or system would definitely ease the stress.
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
