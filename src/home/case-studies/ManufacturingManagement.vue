<template>
  <div>
    <BreadCrumbs :title="'MANUFACTURING MANAGEMENT'" />
    <div class="container">
      <p>
        Manufacturing Management is one of the solutions to effectively execute
        tasks by streamlining processes to be able to reduce cost. One of the
        most common tools in Manufacturing Management is to invest in an ERP
        (Enterprise Resource Planning) Software, that is used to manage
        day-to-day business activities such as accounting, procurement, project
        management, risk management and compliance, and supply chain operations.
      </p>
      <CaseImage :price="'15,000'" :bg="'manufacture.jpg'" />
      <p>
        Increment Technologies can help create opportunities for your business
        when it comes to cost reduction, streamlining processes, increase in
        efficiency, risk reduction, automating efficiencies, maximizing
        workflow, minimizing disruptions, ensuring production meets required
        deadlines, scheduling, and many more. A software can effectively help
        you perform sets of activities that would minimize cost, risks, and
        effort; and we believe that Increment Technologies is the right software
        company who can help you achieve these.
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
