<template>
  <div class="holder" :style="bgImg">
    <div class="btm-content">
      <span class="left">
        <h3>Starting price is ${{ price }}.</h3>
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
  margin-bottom: 3vh;
  margin-top: 3vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.btm-content {
  width: 100%;
  height: 100px;
  padding: 20px;
  margin-top: -100px;
  background: rgba(255, 255, 255, 0.7);
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

@media screen and (max-width: 992px) {
  .holder {
    height: 60vh !important;
  }

  .left {
    width: 50% !important;
    margin-top: 23px !important;
  }

  .right {
    width: 50% !important;
  }
}

@media screen and (max-width: 767px) {
  .holder {
    height: 50vh !important;
  }
}

@media screen and (max-width: 490px) {
  .holder {
    margin-bottom: 6vh !important;
  }

  .holder {
    height: 40vh !important;
  }

  .btm-content {
    height: 80px !important;
  }
  .left {
    margin: unset !important;
  }

  .left,
  .right {
    width: 100% !important;
    text-align: center !important;
  }
}
</style>
<script>
import roundBtn from "src/home/generic/roundBtn.vue";
import COLORS from "src/assets/style/colors.js";
export default {
  props: ["price", "bg"],
  components: {
    roundBtn,
  },
  data() {
    return {
      colors: COLORS,
      bgImg: {
        backgroundImage: `url(${require('@/assets/img/case_studies/'+this.bg)})`
      }
    };
  },
};
</script>