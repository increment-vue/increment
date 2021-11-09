<template>
  <div>
    <BreadCrumbs :title="'TRANSLATION SYSTEM'" />
    <div class="container">
      <p>
        One of the ways to help people understand other countries with different
        languages is to understand their dialect first. A translation software
        helps people understand in depth of what other people are trying to
        communicate. It not just helps the community but could focus on molding
        a child’s knowledge towards understanding a language. This can be
        applied in schools for teaching the mother tongue based multilingual
        education.
      </p>
      <CaseImage :price="'5000'" :bg="'translation.jpg'" />
      <p>
        Increment Technologies is not new to this kind of software, we have
        built Talk Fluent Spanish, a spanish learning system that allows users
        to understand, pronounce, and memorize Spanish the easiest way possible.
        Knowing that not all people are Polyglot, a person who knows several
        languages, a translation learning system is a guide for the person to
        learn and understand the meaning of a dialect.
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
