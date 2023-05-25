<template>
  <div>
    <BreadCrumbs :title="'ONLINE ENROLLMENT'" />
    <div class="container">
      <p>
        The Enrollment System generates an inflow of customers, technically
        referred to as, “students”. It has always been one of the most
        impressive factors of a school adapting to technological advancements
        such as getting easier access to enrollment, with hassle-free
        transactions.
      </p>
      <CaseImage :price="'15,000'" :bg="'enrollment.jpg'" />
      <p>
        Increment Technologies Inc., offers an enrollment system to schools
        exclusively for the organization’s enrollment transactions. Where
        students and teachers will have their own accounts that they can freely
        view their class schedules, activities and test scores, e-library, and
        assignments. We will also add a parent's portal so that parents may
        monitor their child's progress in school activities, and be reminded by
        important announcements and meetings organized by the school.
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
