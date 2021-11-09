<template>
<div>
  <span class="card" style="margin-top: 40px" v-for="(item, index) in data" :key="index">
    <span class="content">
      <center >
        <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
        <p class="head-title">{{ item.title }}</p>
        <label style="font-size: 12px">Starting Price:</label>
        <p class="price">
          <b>{{ item.price }}</b>
        </p>
        <p class="description">{{ item.description }}</p>
        <p @click="redirect(item.links)" class="button1">Read More</p>
      </center>
    </span>
  </span>
</div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.card {
  width: 22%; //24% // 20%
  margin: 1.5%; //0.5% // 2.5%
  height: 500px;
  float: left;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient($white, $white),
    linear-gradient(112.58deg, $gradientSecondary, $gradientPrimary);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.content {
  margin-top: 20px;
  padding: 18px;
}
.head-title {
  margin-top: 20px;
  height: 30px;
  color: $primary;
  font-weight: 700;
}
.description {
  // text-align: justify;
  height: auto;
  padding: unset;
  width: 100%;
  border: 2px solid red;
  margin: unset;
  // padding: 10px;
}
.price {
  border: 0.5px solid;
  border-radius: 100px;
  background-color: $secondary;
  width: 70%; //150px
  padding: 10px;
  color: $white;
}
.button1 {  
  color: $green !important;
  font-weight: 600 !important;
  text-decoration: underline !important;
  cursor: pointer !important;
}
.font-awesome-icon {
  font-size: 80px;
  color: $purple;
}
.card:hover {
  border: double 5px transparent;
  .button1 {
    color: $purple;
  }
  .price {
    background-color: $purple;
  }
  .font-awesome-icon {
    color: $secondary;
  }
}
@media screen and (max-width: 1024px) {
  .card {
    height: 570px !important;
  }
}
@media screen and (max-width: 992px) {
  .description{
    // padding-bottom: 10px;
    // font-size: 15px !important;
    height: auto;
  }
}
// @media screen and (max-width: 768px) {
//   .card {
//     height: 660px !important;
//   }
//   .description {
//     height: 320px;
//   }
// }
// @media screen and (max-width: 425px) {
//   .card {
//     width: 45%;
//   }
//   .description {
//     height: 280px;
//   }
// }
// @media screen and (max-width: 375px) {
//   .card {
//     height: 630px !important;
//   }
//   .description {
//     height: 290px;
//   }
// }
// @media screen and (max-width: 320px) {
//   .card{
//     width: 80%;
//     height: auto !important;
//     margin: auto;
//     float: unset;
//   }
//   .description{
//     height: auto;
//   }
// }
</style>
<script>
import ROUTER from "src/router";
export default {
  props: [
    "cases",
    // "styles",
    // "hoverStyles",
  ],
  data() {
    return {
      data: this.cases
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>
