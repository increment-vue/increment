<template>
  <div class="cw-banner" id="our-values">
    <div>
      <SectionHeader
        :title="'OUR VALUES'"
        :style="style"
        :description="'What we at Increment Technologies Inc. believe and stand for.'"
      ></SectionHeader>
    </div>
    <center>
      <div class="container">
        <div class="row">
          <div class="card-holder" v-for="(item, index) in values" :key="index">
            <div
              :class="
                index === 1 || index === 4 ? 'single-cardUp' : 'single-card'
              "
            >
              <h3 class="content">
                <b>{{ item.desc }}</b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  float: left;
  width: 100%;
  padding: 50px 0 50px 0;
  background: linear-gradient(
    180deg,
    $gradientPrimary 0%,
    $gradientSecondary 100%
  );
}
.card-holder {
  width: 31%;
  margin: 1%;
}
.single-card,
.single-cardUp {
  background: $white;
  padding: 30px;
  margin: 20px;
  height: 180px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.single-cardUp {
  margin-top: -10px;
}
.content {
  font-style: italic;
  color: $secondary;
}
@media (max-width: 992px) {
  .cw-banner {
    width: 100%;
    padding: 50px 0 50px 0;
  }
  .container {
    margin-top: 50px;
  }
  .single-card,
  .single-cardUp {
    margin-top: 20px;
    float: unset;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .card-holder {
    width: 100%;
  }
}
</style>
<script>
import COMMON from "src/common.js";
import SectionHeader from "src/home/generic/sectionHeader.vue";
import ColorsJS from "src/assets/style/colors.js";
export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      curveStyle: ColorsJS.secondary,
      style: {
        color: ColorsJS.white,
      },
      values: [
        {
          num: "1",
          desc: "We do the right thing. Always.",
          firstCard: true,
        },
        {
          num: "2",
          desc: "We provide what is best.",
          firstCard: false,
        },
        {
          num: "3",
          desc: "We are committed to everything we do.",
          firstCard: false,
        },
        {
          num: "4",
          desc: "We deliver success to our customers.",
          firstCard: true,
        },
        {
          num: "5",
          desc: "Communication is our tool for excellence.",
          firstCard: false,
        },
        {
          num: "6",
          desc: "We always help everyone.",
          firstCard: false,
        },
      ],
    };
  },
  mounted() {},
  datas() {
    return {
      common: COMMON,
    };
  },
};
</script>
