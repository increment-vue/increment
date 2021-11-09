<template>
  <div class="header" >
    <h1>{{title}}</h1>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.header{
  width: 100%;
  float: left;
  background-image: linear-gradient(90deg, $secondary, $purple);
  text-align: center;
  height: 35vh;
  color: $white;
}

h1{
  margin-top: 20vh;
  font-weight: 700 !important;
}
</style>
<script>
export default {
  props: ['title']
};
</script>