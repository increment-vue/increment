<template>
  <div class="incre-row">
    <div class="cw-banner bg-primary">
      <div class="item-holder">
        <h1 class="text-white text-center title">
          <b>WE WANT YOU TO SUCCEED</b>
        </h1>
        <h3>
          We create beautiful and secured websites, and mobile applications.<br />
          Just relax and we will give solutions to your needs. Got something<br />
          awesome for us to work on?
        </h3>
        <button class="button">Contact Us</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.button {
  background: #00e68a;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-right: 42%;
  margin-top: 10%;
}
.item-holder {
  position: absolute;
  width: 62%;
  height: 70%;
  background-color: #3f0050;
  top: 65%;
}
h3 {
  font-size: 20px;
  margin-left: 10%;
  margin-right: 5%;
  color: white;
}
button {
  margin-left: 10%;
  margin-top: 5%;
  border-radius: 20%;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
}
//
.title {
  height: 100px;
  line-height: 100px;
  margin-top: 10%;
}
.app {
  cursor: pointer;
}
.custom-btn {
  height: 50px !important;
  border-radius: 5px !important;
  width: 200px !important;
  margin-top: 25px;
}
.bg-primary {
  background-image: url("../../assets/img/IncrementBanner.jpg");
}
.bg-black {
  background-color: #000;
  margin-top: 10px !important;
}
.cw-banner {
  width: 100%;
  float: left;
  height: 100vh;
}
.text {
  width: 45%;
  float: left;
  margin-left: 5%;
  margin-top: 100px;
  position: relative;
  z-index: 1000;
}
.text .title {
  width: 100%;
  float: left;
}
.title h1 {
  font-size: 50px;
}
.text .description {
  margin-top: 25px;
  width: 100%;
  float: left;
  text-align: justify;
}
.image {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  right: 0;
  z-index: 0;
}
@media screen and (max-width: 992px) {
  .text {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title {
    text-align: center;
  }
  .title h1 {
    font-size: 300%;
  }
  .description h4 {
    font-size: 120%;
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .image {
    position: relative;
    max-height: 100%;
    width: inherit;
    margin-top: 50px;
  }
  .custom-btn {
    width: 100% !important;
    margin-top: 10px !important;
  }
}
</style>
<script>
import ROUTER from "src/router";
export default {
  mounted() {},
  data() {
    return {};
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    externalLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>