<template>
  <div>
    <BreadCrumbs :title="'INVENTORY MANAGEMENT'" />
    <div class="container">
      <p>
        Inventory Management System is a very important tool whether you are an
        established company or a start-up. This solution is a tool used by
        business owners to manage, track, and optimize their warehouse or
        inventory at the same time. It benefits your company by providing
        accurate purchase records, barcode identification, reports and sales
        history, sales forecast, and more.
      </p>
      <CaseImage :price="'15,000'" :bg="'inventory.jpg'" />
      <p>
        Increment Technologies, create opportunities to achieve efficiency in
        your processes. Through Inventory Management, we can help you organize
        your warehouse management, tracking system, sales history, or with any
        qualifications you want to build in your own Inventory system, we can
        make it happen here at Increment. With our company’s skills and
        expertise, we ought to develop software that is fit for your needs.
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
