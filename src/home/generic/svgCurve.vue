<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      v-if="use"
      class="curve-top"
      :style="stylecss"
    >
      <path
        :fill="color"
        fill-opacity="1"
        d="M0 114.359H1919V72.1293C1919 72.1293 1818.31 6.27769e-05 1627.8 0C1437.3 -6.27764e-05 1257.73 110.599 1072.05 110.599C999.157 110.599 927.457 94.1749 858.089 72.9421C765.056 44.4665 654.178 0 557.849 0C461.521 0 409.984 67.5828 308.769 72.9421C185.042 79.4935 0 0 0 0V114.359Z"
      ></path>
    </svg>
    <svg
      v-else
      class="curve-bottom"
      :style="stylecss"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        :fill="color"
        fill-opacity="1"
        d="M1919 0H0V43.2333C0 43.2333 99.234 79.8683 165.681 90.3369C316.558 114.108 422.004 30.1656 553.944 43.2333C678.534 55.5728 741.733 95.7704 866.339 107.944C1005.3 121.52 1083.76 110.657 1222.8 97.9025C1382.48 83.2545 1469.45 47.1908 1629.76 43.2333C1742.83 40.4416 1859.81 58.2952 1919 58.2952V0Z"
      ></path>
    </svg>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
@import "~assets/style/theme.css";
.curve-top {
  width: 100%;
  float: left;
  background-color: $white;
}
</style>
<script>
export default {
  props: ["color", "use", "stylecss"],
  data() {
    return {
      // use: true
    };
  },
};
</script>