<template>
  <div class="holder">
    <div class="card" v-for="(item, index) in list" :key="index">
      <center>
        <img :src="item.src" />
        <p class="title">{{ item.title }}</p>
        <p class="country">{{ item.location }}</p>
        <p class="desc">{{ item.description }}</p>
      </center>
      <div v-if="item.withButton == true">
        <a :href="item.link" target="_blank"
          ><button class="button1">Visit</button></a
        >
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  components: {},
  mounted() {
    $(".card").attr("style", "height: " + this.height + "px !important");
  },
  props: ["data", "navbar", "height"],
  data() {
    return {
      list: this.data,
    };
  },
};
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder {
  width: 100%;
  text-align: center;
  float: left;
}

.card {
  width: 24%;
  margin: 0.5%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  float: left;
  height: 450!important

}

img {
  width: 150px;
  height: 150px;
  margin: 20px;
}

.title {
  font-size: 16px;
  color: $green;
  font-weight: bold;
}

.country {
  font-size: 16px;
  color: $black;
  font-weight: bold;
  margin-top: -16px;
}

.desc {
  font-size: 14px !important;
  width: 90%;
  font-weight: 400;
}

.button1 {
  background: linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  border: none;
  color: $white !important;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
  padding: 10px;
  width: 50%;
  font-size: 81%;
  outline: none;
  margin-bottom: 10px;
}

//3 cards
@media only screen and (max-width: 1199px) {
  .card {
    width: 32.33% !important;
  }
}

//2 cards
@media only screen and (max-width: 991px) {
  .card {
    width: 49% !important;
  }
}

//1 card
@media only screen and (max-width: 510px) {
  .card {
    width: 90% !important;
    margin: unset;
    margin-left: 5% !important;
    margin-right: 5% !important;
    margin-bottom: 3% !important;
  }
}
</style>