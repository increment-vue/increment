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
export default {
  components: {},
  mounted() {
    console.log('[navigation bar]', this.navbar)
    // this.onClick(this.status);
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
  margin: 40px 5px;
  padding: 14px 90px;
  color: $white;
  text-decoration: none;
  border: 2px;
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
    linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
@media only screen and (max-width: 1200px) {
  .navbox {
    width: 20%;
  }
}
@media only screen and (max-width: 992px) {
  .navbox {
    padding: 14px 60px;
    margin: 40px 1.5px;
  }
}
@media only screen and (max-width: 767px) {
  .card {
    text-align: center;
    height: 400px !important;
  }
}
@media only screen and (max-width: 426px) {
  .navbox {
    white-space: unset;
    padding: 0 48px;
    padding-top: 10px;
    padding-bottom: 5x;
    max-height: 60px;
    margin: 0 1px;
  }
  button {
    font-size: 14px;
  }
}
@media only screen and (max-width: 376px) {
  .navbox {
    white-space: unset;
    padding: 0 35px;
    padding-top: 10px;
    padding-bottom: 5px;
    max-height: 60px;
    margin: 0 1px;
  }
  button {
    font-size: 10px;
  }
}
</style>