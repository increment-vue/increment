<template>
  <div class="databox">
    <button
      v-on:click="onClick(data[index].status)"
      @click="activeCount = index"
      v-for="(item, index) in data"
      :key="index"
      :class="{ active: index == activeCount }"
      class="navbox"
    >
      {{ item.name }}
    </button>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  components: {},
  mounted() {
    console.log("[navigation bar]", this.navbar);
    $(".navbox").attr(
      "style",
      "width: " + 100 / this.navbar.length + "% !important"
    );
  },
  props: ["navbar"],
  data() {
    return {
      status: "all",
      activeCount: 0,
      data: this.navbar,
    };
  },
  methods: {
    onClick(param) {
      this.status = param;
      this.$emit("status", param);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.databox {
  max-width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}
.navbox {
  background: linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  border-radius: 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 60px;
  font-weight: 500;
  color: $white;
  text-decoration: none;
  border: 1px solid $white;
  white-space: nowrap;
  float: left;
}
.active {
  position: relative;
  background: $white;
  outline: none;
  color: $black;
  border: double 2px transparent;
  background-image: linear-gradient($white, $white),
    linear-gradient(264.22deg, $purple 0%, $secondary 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

@media only screen and (max-width: 767px) {
  .navbox {
    font-size: 65% !important;
    height: 50px !important;
  }
}

@media only screen and (max-width: 500px) {
  .navbox {
    font-size: 50% !important;
    height: 40px !important;
  }
}

@media only screen and (max-width: 350px) {
  .navbox {
    font-size: 40% !important;
  }
}
</style>