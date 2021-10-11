<template>
  <div class="incre-row">
    <div class="cw-banner bg-primary" id="home-banner"></div>
    <div class="item-holder bg-gradient">
      <div class="title-holder">
        <h1 class="title">
          <b>WE WANT YOU TO SUCCEED</b>
        </h1>
        <h3>
          We create beautiful and secured websites, and mobile applications.
          Just relax and we will give solutions to your needs. Got something
          awesome for us to work on?
        </h3>
        <a
          href="https://calendly.com/incrementtech2020/services-offered"
          target="_blank"
          ><button>Contact Us</button></a
        >
      </div>
    </div>
    <div class="white-box">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
button {
  margin-top: 3%;
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
  width: 58%;
  height: 100vh;
  padding-left: 8vh;
  padding-right: 5vh;
}
h3{
  margin-top: 2vh;
  font-weight: normal;
  font-size: 20px;
  line-height: 27.24px;
  color: #FFFFFF;
  padding-right: 35vh;
  // overflow-wrap: break-word;

}
.title {
  margin-top: 45vh;
  color: #FFFFFF;
  font-size: 40px;
}
.title b{
  color: #FFFFFF;
  margin-top: 30%;
  line-height: 68px;
  font-weight: 800;
  font-size: 50px;
}
// text animation //
.title-holder{
  position: relative;
  animation-name: text-animation;
  animation-duration: 1s;  
  animation-fill-mode: forwards;
}
@keyframes text-animation {
  from {left: -50px;}
  to {left: 0px;}
}
// end of text animation //

.bg-gradient{
  background-image: linear-gradient(228.21deg, rgba(143, 0, 181, 0.90) -0.03%, rgba(0, 184, 159, 0.93) 100%),
  url("../../assets/img/gif-banner.gif"),
  url("../../assets/img/Increment_office.jpeg");
  background-size: cover,70vh,cover;
  background-position: center,right,center;
  background-repeat: no-repeat,no-repeat,no-repeat;
}
.white-box{
  background: #FFFFFF 25%;
  position: absolute;
  width: 92%;
  height: 10%;
  margin-left: 5%;
  margin-right: 5%;
  left: 7.5vh;
  top: 90.3vh;
}
.bg-primary {
  background-image: url("../../assets/img/Banner-Meridian.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.cw-banner {
  width: 42%;
  float: left;
  height: 100vh;
}
.incre-row {
  height: 900px;
}
// tablet mode //
@media only screen and (max-width: 992px) {
  .item-holder {
    width: 80%;
    top: 60%;
  }
  .cw-banner {
    height: 75vh;
  }
  .title-holder{
    position: relative;
    animation-name: text-animation;
    animation-duration: 1s;  
    animation-fill-mode: forwards;
  }
  @keyframes text-animation {
    from {left: -50px;}
    to {left: 0px;}
  }
}
@media only screen and (max-width: 992px){
    .white-box{
      background: #FFFFFF 25%;
      position: absolute;
      width: 92%;
      height: 10%;
      margin-left: 5%;
      margin-right: 5%;
      left: 7.5vh;
      top: 352.8vh;
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
}
@media only screen and (max-width: 992px) {
  .item-holder {
    top: 30%;
  }
  .bg-gradient{
    background-position: top center;
    background-size: cover,634px,cover;
    width: 992px;
    height: 1190px; 
  }
}
@media only screen and (max-width: 992px) {
  .item-holder {
    top: 45%;
  }
    .title{
    margin-top: 55%;
    font-size: 50px;
    margin-bottom: 5%;
    color: black;
  }
   h3{
    font-size: 20px;
    line-height: 27px;
    text-align: center;
  }
}
// end of tablet mode //
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