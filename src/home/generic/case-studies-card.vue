<template>
  <span class="card" style="margin-top: 40px">
    <span class="content">
      <center>
        <font-awesome-icon :icon="icon" class="font-awesome-icon" />
        <p class="head-title">{{ title }}</p>
        <label style="font-size: 12px">Starting Price:</label>
        <p class="price">
          <b>{{ price }}</b>
        </p>
        <p class="description">{{ description }}</p>
        <p @click="redirect(links)" class="button1">Read More</p>
      </center>
    </span>
  </span>
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
  width: 100%;
}
.head-title {
  margin-top: 20px;
  height: 30px;
  color: $primary;
  font-weight: 700;
}
.description {
  height: auto;
}
.price {
  border: 0.5px solid;
  border-radius: 100px;
  background-color: $secondary;
  width: 70%; //150px
  // height: auto;
  padding: 10px;
  color: $white;
}
.button1 {
  height: 30px !important;
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
  .content {
    padding: 15px;
  }
  .description {
    height: 220px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    height: 660px !important;
  }
  .description {
    height: 320px;
  }
}
@media screen and (max-width: 425px) {
  .card {
    width: 45%;
  }
  .description {
    height: 280px;
  }
}
@media screen and (max-width: 375px) {
  .card {
    height: 630px !important;
  }
  .description {
    height: 290px;
  }
}
@media screen and (max-width: 320px) {
  .card{
    width: 80%;
    height: auto !important;
    margin: auto;
    float: unset;
  }
  .description{
    height: auto;
  }
  
}
</style>
<script>
import ROUTER from "src/router";
export default {
  props: [
    "icon",
    "title",
    "price",
    "description",
    "links",
    // "styles",
    // "hoverStyles",
  ],
  data() {
    return {};
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>
