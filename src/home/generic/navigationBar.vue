<template>
  <div class="databox">
    <button
      v-on:click="onClick()"
      @click="activeCount = index"
      v-for="(item, index) in navbar"
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
      activeCount: 0,
      data: this.navbar,
    };
  },
  methods: {
    onClick(){
       
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.databox {
  max-width: fit-content;
  display: flex;
  justify-content: center;
}
.navbox {
  background: linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  width: 22%;
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
</style>