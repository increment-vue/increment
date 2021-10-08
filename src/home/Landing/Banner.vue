<template>
  <div class="incre-row">
    <br><br><br>
    <div class="cw-banner bg-primary"></div>
    <div class="item-holder bg-gradient">
      <h1 class="title">
      <b>WE WANT YOU TO SUCCEED</b>
      </h1>
      <p>
        We create beautiful and secured websites, and mobile applications.<br />
        Just relax and we will give solutions to your needs. Got something<br />
        awesome for us to work on?
      </p>
      <a
        href="https://calendly.com/incrementtech2020/services-offered"
        target="_blank"
        ><button>Contact Us</button></a
      >
    </div>
    <div class="white-box"></div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
button {
  margin-top: 5%;
  border-radius: 50px;
  border: 1px solid;
  box-shadow: 0px 0px 1px #FFFFFF;
  width: 250px;
  height: 80px;
  color: #028170;
  background-color: white;
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
}
button:hover {
  background: #00E68A;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px #FFFFFF;
  border-radius: 50px;
}
a button:hover{
  color: white;
}
.item-holder {
  float:left;
  width: 1111px;
  height: 1080px;
  top: 65%;
  padding: 5%;
}
.bg-gradient{
  background-image: linear-gradient(228.21deg, rgba(143, 0, 181, 0.90) -0.03%, rgba(0, 184, 159, 0.93) 100%),
  url("../../assets/img/gif-banner.gif"),
  url("../../assets/img/Increment_office.jpeg");
  background-size: cover,634px,cover;
  background-position: center,right,center;
  background-repeat: no-repeat,no-repeat,no-repeat;
}
.white-box{
  background: #FFFFFF 25%;
  position: absolute;
  width: 1800px;
  height: 79px;
  left: 59px;
  top: 1001px;
  margin-top: 72px;
  }
p {
  font-size: 20px;
  line-height: 27.24px;
  color: white;
}
.bg-primary {
  background-image: url("../../assets/img/Banner-Meridian.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.cw-banner {
  width: 807px;
  float: left;
  height: 1080px;
}
.title {
  margin-top: 501px;
  color: white;
  font-size: 40px;
}
.title b{
  margin-top: 30%;
  line-height: 68px;
  font-size: 50px;
}
.incre-row {
  height: 900px;
}
@media only screen and (max-width: 992px) {
  .item-holder {
    width: 80%;
    top: 60%;
  }
  .cw-banner {
    height: 75vh;
  }
}
@media only screen and (max-width: 992px) {
  button {
    padding: 10px 30px;
    font-size: 20px;
    margin-bottom: 15%;
    background: #FFFFFF;
    border: 1px solid #028170;
    box-sizing: border-box;
    box-shadow: 0px 0px 1px #FFFFFF;
    border-radius: 50px;
  }
  .item-holder {
    text-align: center !important;
    width: 100%;
  }
  .bg-primary{
    display: none;
  }
  .white-box{
    display: none;
  }
}
@media only screen and (max-width: 992px) {
  .item-holder {
    top: 30%;
  }
  .bg-gradient{
    background-position: top center;
    background-size: cover,634px,cover;
  }
}
@media only screen and (max-width: 992px) {
  p{
    font-size: 20px;
    line-height: 27px;
    text-align: center;
  }
}
@media only screen and (max-width: 992px) {
  .item-holder {
    top: 45%;
  }
}

@media only screen and (max-width: 992px) {
  .title {
    font-size: 50px;
    margin-bottom: 5%;
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