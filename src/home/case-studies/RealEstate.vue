<template>
  <div>
    <BreadCrumbs :title="'REAL ESTATE'" />
    <div class="container">
      <p>
        Company profiling is very important especially when your goal for your
        business is to increase your online presence. In the Real Estate
        Industry, a company website is a must; considering this modernized era,
        a modern real estate firm should also adapt to the modern way of
        commercializing properties. According to G.B. Davis from LendingHome,
        from house flipping to wholesaling, commercial investing to rental
        investing, the best real estate investment software options target one
        niche and excel within it - Marketing. Valuing this investment, a real
        estate software can help you plugin rent and income data to come up with
        approximate property valuation.
      </p>
      <CaseImage :price="'15,000'" :bg="'real_estate.jpg'" />
      <p>
        Increment Technologies can help you not just in company profiling but as
        well as organizing the inflow of information within your website, such
        as income data, rent data, appointment setting, and we can also add
        features such as online rent collection, allowing tenants to pay by
        electronic transfer that can automatically track all your income and as
        well tracking tenants who have not paid on their due date. You can even
        add features you’d like exclusively for your own real estate software.
        This will create an opportunity for you to save more when it comes to
        manpower and document storage. We, at Increment Technologies will help
        you succeed in your business.
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
