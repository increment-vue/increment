<template>
  <div>
    <BreadCrumbs :title="'COMPANY PROFILING'" />
    <div class="container">
      <p>
        Company profiling is the very first step towards building your brand and
        presence to your target market. It allows a quick look into a company,
        allowing varied groups of people getting a general idea of what the
        company’s products or services are. One of the solutions to easily
        execute and build your company profile is through a website.
      </p>
      <CaseImage :price="'700'" :bg="'company_profiling.jpg'" />
      <p>
        Increment Technologies Inc., masters the field of building websites for
        a company allowing it to integrate and suggest navigation as well as the
        contents on what to put specifically for their website. Offering various
        options, we cater to showcase product or service features, blog posts,
        portfolio or accomplished projects, call to action, newsletter, and
        more. We always make sure to hear out our client’s requests by making
        their vision into reality.
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
