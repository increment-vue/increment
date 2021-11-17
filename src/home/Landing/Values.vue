<template>
  <div class="cw-banner" id="our-values">
    <div class="container">
      <h2>OUR VALUES</h2>
      <p>What we at Increment Technologies Inc. believe and stand for</p>
      <div class="row">
        <span class="card-holder" v-for="(item, index) in values" :key="index">
          <div
            :class="
              index === 1 || index === 4 ? 'single-cardUp' : 'single-card'
            "
          >
            <b class="paragraph">
              <i>{{ item.desc }}</i>
            </b>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  text-align: center;
  float: left;
  width: 100%;
  padding: 50px 0 50px 0;
  background: linear-gradient(
    180deg,
    $gradientPrimary 0%,
    $gradientSecondary 100%
  );
}

.row {
  margin-top: 10vh;
}

.card-holder {
  width: 31%;
  margin: 1%;
}

.container {
  text-align: center;
  color: $white;
  padding-bottom: 15vh;
  padding-top: 15vh;
}

.single-card,
.single-cardUp {
  background: $white;
  padding: 30px;
  margin: 30px;
  height: 180px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  text-align: center;
  align-items: center;
}
.single-cardUp {
  margin-top: -10px;
}
.paragraph {
  font-size: 25px;
  color: #028170;
  text-align: center;
}
@media only screen and (max-width: 992px) {
  .cw-banner {
    width: 100%;
    padding: 50px 0 50px 0;
  }
  .container {
    margin-top: 50px;
  }
  .single-card,
  .single-cardUp {
    width: 80% !important;
    margin-left: 10% !important;
    margin-right: 10% !important;
    background-color: white;
    margin-top: 0px;
    text-align: center !important;
  }
  .card-holder {
    width: 100%;
  }
}
</style>
<script>
import COMMON from "src/common.js";
import ColorsJS from "src/assets/style/colors.js";
export default {
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
