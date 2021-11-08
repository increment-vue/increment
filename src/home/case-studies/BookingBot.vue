<template>
  <div>
    <BreadCrumbs :title="'BOOKING BOT'" />
    <div class="container">
      <p>
        According to Colleen Egan from Squareup, 52% of the consumers discovered
        new businesses on Facebook. Based on the survey from Statista, as of
        January 2020, there are 96% of the local population in the Philippines
        that have accessed Facebook. With this data, Facebook has proven that
        they are one of the most powerful marketing tools for start-up
        businesses.
      </p>
      <CaseImage />
      <p>
        Start-up businesses always create facebook pages for updates on their
        services and products, that’s why Increment Technologies develop an
        application built-in to your Facebook pages, called Chatbot. Chatbot is
        an automated chat system technically built to Facebook pages so that
        business owners would have less hassle in replying to bulk orders or to
        plenty of customer inquiries. This is an advantage to business owners of
        not losing their potential customers just because of neglected orders.
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
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
import CaseImage from "src/home/generic/case-image.vue";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    BreadCrumbs,
    CaseImage,
  },
};
</script>