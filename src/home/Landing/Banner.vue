<template>
  <div class="incre-row">
    <div class="cw-banner bg-primary">
      <div class="item-holder">
        <h1 class="title">
          <b>WE WANT YOU TO SUCCEED</b>
        </h1>
        <h3>
          We create beautiful and secured websites, and mobile applications.<br />
          Just relax and we will give solutions to your needs. Got something<br />
          awesome for us to work on?
        </h3>
        <a href="https://calendly.com/incrementtech2020/services-offered" target="_blank"><button>Contact Us</button></a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
button {
  margin-top: 5%;
  background-color: #00e68a;
  color: white;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: none;
  padding: 15px 60px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  outline-color: #3f0050;
}
.item-holder {
  position: absolute;
  width: 60%;
  background-color: #3f0050;
  top: 65%;
  padding: 5%;
}
h3 {
  font-size: 20px;
  margin-bottom: 5%;
  color: white;
}
.bg-primary {
  background-image: url("../../assets/img/IncrementBanner.jpg");
}
.cw-banner {
  width: 100%;
  float: left;
  height: 100vh;
}
.title {
  margin-top: 10%;
  margin-bottom: 10%;
  color: white;
  font-size: 40px;
}
.incre-row {
  height: 900px;
}
@media only screen and (max-width: 1024px) {
.item-holder {
  top: 55%;
}
.cw-banner {
  height: 75vh;
}
}
@media only screen and (max-width: 540px) {
button {
  padding: 10px 30px;
  font-size: 20px;
  margin-bottom: 15%;
}
.item-holder {
  top: 40%;
}
}
@media only screen and (max-width: 485px) {
.item-holder {
  top: 30%;
}
}
@media only screen and (max-width: 414px) {
.item-holder {
  top: 40%;
}
}
@media only screen and (max-width: 411px) {
.item-holder {
  top: 45%;
}
}
@media only screen and (max-width: 375px) {
.item-holder {
  top: 50%;
}
.title{
  font-size: 30px;
}
}
@media only screen and (max-width: 360px) {
.title {
  font-size: 30px;
}
}
@media only screen and (max-width: 320px) {
.item-holder {
  top: 50%;
}
.title{
  font-size: 30px;
}
button {
  padding: 10px 20px;
  font-size: 15px;
  margin-bottom: 15%;
}
}
@media only screen and (max-width: 280px) {
.title {
  font-size: 30px;
  margin-bottom: 15%;
}
h3 {
  font-size: 15px;
}
button {
  padding: 5px 20px;
  font-size: 20px;
  margin-bottom: 15%;
  font-size: 15px;
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