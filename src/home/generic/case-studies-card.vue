<template>
  <div class="container">
    <span
      class="card"
      style="margin-top: 40px"
      v-for="(item, index) in data"
      :key="index"
    >
      <span class="content">
        <center>
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
.container {
  width: 100%;
}
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
  padding: 8px;
}
.head-title {
  margin-top: 20px;
  height: 30px;
  color: $primary;
  font-weight: 700;
}
.description {
  height: auto;
  padding: unset;
  width: 100%;
  margin: unset;
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
  .container {
    width: 80%;
  }
  .card {
    width: 40%;
    margin: 5%;
    margin-bottom: 2%;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
  .description {
    padding: 10px;
  }
}
@media screen and (max-width: 540px) {
  .card {
    width: 70%;
    height: auto;
    float: unset;
    margin: auto;
  }
}
</style>
<script>
import ROUTER from "src/router";
export default {
  props: ["cases"],
  data() {
    return {
      data: this.cases,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>