<template>
  <div>
    <BreadCrumbs :title="'BE PART OF US'" />
    <div class="container">
      <p>
        If you're looking for an internship, then this is the sign! 😉 We’re
        currently looking for Marketing, Business Development, and Software
        Development Interns to be part of our growing team. To apply, send your
        cover letter and updated resume to hr@incrementtechnologies.com.
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
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
export default {
  components: {
    BreadCrumbs,
  },
};
</script>
