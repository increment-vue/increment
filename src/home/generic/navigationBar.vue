<template>
  <!-- <span>
    <ul class="nav">
      <li class="navbox">
        <a href="#">{{ title }}</a>
      </li>
    </ul>
  </span> -->
      <button class="navbox" v-on:click="actived">{{ status }}</button>
</template>
<script>
export default {
  components: {},
  mounted() {},
  props: ["status"],    
  data() {
    return {};
  },
};

</script>

<style scoped lang="scss">
@import "~assets/style/colors.scss";

.navbox{
  background: linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 40px 5px;
  padding: 14px 90px;
  color: $white;
  text-decoration: none;
  border: 2px;
  white-space: nowrap;
}

.navbox:focus {
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