<template>
  <div class="row no-gutters">
    <div class="card">
      <center>
        <div class="box">
          <img :src="src" />
        </div>
        <span class="p1">{{ title }}</span>
        <p class="p2">{{ location }}</p>
        <p class="p3">{{ description }}</p>
      </center>
      <div v-if="status == true">
        <a :href="link" target="_blank"
          ><button class="button1">Visit</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {},
  props: ["src", "title", "location", "description", "link", "status"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.row {
  display: inline-block; //changes
  margin: 1% 2%;
}
.p1 {
  color: $green;
  font-size: 16px !important;
}
.p3 {
  font-size: 14px !important;
}
.card {
  width: 100%; //changes
  height: 390px;
  margin: 1%;
  padding: 5px;
  border-radius: 15px;
  text-align: center; 
}
img {
  width: auto;
  height: 220px;
  padding: 15%;
}
.button1 {
  background: linear-gradient(264.22deg, #00b89f 0%, #8f00b5 100%);
  border: none;
  color: $white !important;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
  padding: 10px;
  width: 50%;
  font-size: 81%;
  outline: none;
}

.title {
  font-size: 50px;
  font-weight: 800;
  padding-right: 10%;
  padding-left: 10%;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 40px;
    font-weight: 800;
    padding-right: 10%;
    padding-left: 10%;
  }
}
</style>