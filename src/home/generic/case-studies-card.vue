<template>
  <span class="card" style="margin-top: 40px;">
    <span class="content">
      <center>
        <font-awesome-icon :icon="icon" class="font-awesome-icon" />
        <p class="head-title">{{ title }}</p>
        <label style="font-size: 10px">Starting Price:</label>
        <p class="price">
          <b>{{ price }}</b>
        </p>
        <p>{{ description }}</p>
        <p  @click="redirect(links)" class="button1">
          Read More
        </p>
      </center>
    </span>
  </span>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.card {
  width: 24%; //20%
  margin: 0.5%; //2.5%
  height: 490px;
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
  display: inline-block;
}
.head-title {
  margin-top: 20px;
  color: $primary;
  font-weight: 700;
}

.price {
  border: 0.5px solid;
  border-radius: 100px;
  background-color: $secondary;
  width: 150px;
  height: auto;
  padding: 10px;
  color: $white;
}
.button1 {
  height: 20px;
  color: $green;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
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
    "styles",
    "hoverStyles",
  ],
  data() {
    return {};
  },
  methods: {
    redirect(parameter) {
        ROUTER.push(parameter);
    },
  }
};
</script>
