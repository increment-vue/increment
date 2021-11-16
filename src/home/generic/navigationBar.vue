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
  mounted() {},
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
  // transform: scaleX(85%);
  width: auto;
  white-space: nowrap;
  display: flex;
  justify-content: center;
}
.navbox {
  background: linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  border-radius: 10px;
  outline: none;
  display: inline-block;
  justify-content: center;
  margin: 40px 5px;
  width: 100%;
  padding: 14px 0;
  color: $white;
  text-decoration: none;
  border: 2px;
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
@media only screen and (max-width: 992px) {
  .navbox {
    padding: 14px 0;
    margin: 40px 2px;
  }
}
@media only screen and (max-width: 767px) {
  .button {
    font-size: 13px;
  }
  
}
@media only screen and (max-width: 426px) {
  button {
    font-size: 11px;
  }
}
@media only screen and (max-width: 376px) {
  button {
    font-size: 9px;
  }
}
@media only screen and (max-width: 321px) {
  button {
    font-size: 8px;
  }
}
</style>