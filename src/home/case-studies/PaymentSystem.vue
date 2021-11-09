<template>
  <div>
    <BreadCrumbs :title="'PAYMENT SYSTEM'" />
    <div class="container">
      <p>
        Payment system is the most essential part of a business. This needs to
        be accurate and secured to prevent risks in the future. One of the ways
        to prevent risks, is to secure a payment system in your own business
        wherein this is considered as an essential investment to meet your
        long-term goals.
      </p>
      <CaseImage :price="'7000'" :bg="'payment.jpg'" />
      <p>
        Increment Technologies can help you create opportunities in your payment
        system by ensuring your payment transactions are secured and are based
        on the agreed terms. We can develop a software that can serve as a
        channel between an e-commerce and a bank that is robustly fraud
        protected and is a centralized software created exclusively for your
        organization. We, at Increment technologies, believed that we are the
        right company that could cater to your needs in finding software
        solutions for your business.
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
