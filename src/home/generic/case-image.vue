<template>
  <div class="holder">
    <div class="btm-content">
      <span class="left">
        <h3>Starting price is $1000.</h3>
      </span>
      <span class="right">
        <roundBtn
          :text="'Inquire Now'"
          :changeIcon="'fa fa-angle-double-right'"
          :icon="'fa fa-angle-right'"
          :target="'_blank'"
          :route="'https://calendly.com/incrementtech2020/services-offered'"
          :styles="{
            backgroundColor: colors.white,
            color: colors.green,
            borderColor: colors.green,
          }"
          :hoverStyles="{
            backgroundColor: colors.success,
            color: colors.white,
            borderColor: colors.white,
            cursor: 'pointer',
          }"
        />
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.holder {
  width: 100%;
  height: 70vh;
  border: 1px solid #e0e0e0;
  margin-bottom: 5vh;
  margin-top: 5vh;
  background-image: url("../../assets/img/case_studies/booking_bot.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.btm-content {
  width: 100%;
  height: 100px;
  padding: 20px;
  margin-top: -100px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
}

h3 {
  color: $purple;
  font-style: italic;
}

.left {
  width: 70%;
  float: left;
  margin-top: 15px;
}

.right {
  width: 30%;
  float: left;
  text-align: right;
}

// @media screen and (max-width: 992px) {
//   .holder {
//     width: 90% !important;
//     margin-right: 5% !important;
//     margin-left: 5% !important;
//     height: 50vh !important;
//   }
// }
</style>
<script>
import roundBtn from "src/home/generic/roundBtn.vue";
import COLORS from "src/assets/style/colors.js";
export default {
  components: {
    roundBtn,
  },
  data() {
    return {
      colors: COLORS,
    };
  },
};
</script>