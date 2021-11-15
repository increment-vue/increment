<template>
  <div class="holder">
    <span class="card" v-for="(item, index) in data" :key="index">
      <span class="content">
        <center>
          <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
          <p class="head-title">{{ item.title }}</p>
          <label>Starting Price:</label>
          <h3>{{ item.price }}</h3>
          <p class="description">
            {{ item.description }}<br /><u @click="redirect(item.links)"
              >Read More</u
            >
          </p>
        </center>
      </span>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.holder {
  margin-top: 3vh;
  text-align: center;
  float: left;
  width: 100%;
  margin-bottom: 3vh;
}

.card {
  width: 23%;
  margin: 1%; 
  height: 520px;
  float: left;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient($white, $white),
    linear-gradient(112.58deg, $gradientSecondary, $gradientPrimary);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.card:hover {
  border: double 5px transparent;
  h3 {
    background-color: $purple;
  }
  .font-awesome-icon {
    color: $secondary;
  }
}

.font-awesome-icon {
  color: $purple;
  font-size: 100px;
  margin: 50px;
}

.head-title {
  color: $primary;
  font-weight: 750;
  padding-left: 11px !important;
  padding-right: 11px !important;
}

label {
  font-size: 10px;
}

h3 {
  font-weight: bold !important;
  border-radius: 25px;
  background-color: $secondary;
  width: 200px; //150px
  height: auto;
  color: $white;
  padding-top: 11px;
  padding-bottom: 11px;
}

.description {
  font-size: 14px !important;
  padding: 11px !important;
  height: 120px !important;
}

u {
  color: $secondary;
  font-weight: bold;
  cursor: pointer;
}


// 2 cards layout
@media screen and (max-width: 1321px){
  .card {
     width: 48% !important;
  }
}

//1 card layout
@media screen and (max-width: 633px){
  .card {
     width: 80% !important;
     margin: unset;
     margin-left: 10% !important;
     margin-right: 10% !important;
     margin-bottom: 3% !important;
  }
}
</style>
<script>
import ROUTER from "src/router";
export default {
  props: ["cases"],
  data() {
    return {
      data: this.cases,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>
