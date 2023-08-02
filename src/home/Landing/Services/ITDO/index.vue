<template>
    <div class="body">
      <Banner/>
      <Core/>
      <Pricing/>
    </div>
  </template>
  
  <style lang="scss" scoped>
  @import "~assets/style/colors.scss";
  </style>
  
  <script>
  import Banner from "src/home/Landing/Services/ITDO/Banner.vue";
  import Core from "src/home/Landing/Services/ITDO/Core.vue";
  import Pricing from "src/home/Landing/Services/ITDO/Pricing.vue";

  export default {
    components: {
        Banner,
        Core,
        Pricing
    },
  };
  </script>
  
  