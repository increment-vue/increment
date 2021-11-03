<template>
  <div class="header" >
    <h2>{{title}}</h2>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.header{
  width: 100%;
  float: left;
  background-image: linear-gradient(90deg, $secondary, $purple);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  color: $white;
}

h2{
  margin-top: 120px;
}

</style>
<script>
export default {
  components: {},
  mounted() {},
  props: ['title'],
  data() {
    return {};
  }
};
</script>