<template>
  <div>
    <BreadCrumbs :title="'LEARNING SYSTEM'" />
    <div class="container">
      <p>
        A learning system is an essential platform for a school to provide for
        its students. Amidst the pandemic, students must continue to learn and
        keep building their knowledge even through online platforms. Giving
        opportunities to students, learning without being physically present in
        school and still enjoying a high-quality education they deserve.
      </p>
      <CaseImage :price="'5000'" :bg="'learning.jpg'" />
      <p>
        Increment Technologies can help make these opportunities possible by
        building a software exclusively for your organization. A software where
        it organizes an eLearning content in one location, providing an
        unlimited access to eLearning materials, easily tracks progress and
        performance of the students, reduces learning and development costs, and
        detects misconduct such as cheating. We believe that Increment
        Technologies is the trusted company that can help your organization meet
        its goals.
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
