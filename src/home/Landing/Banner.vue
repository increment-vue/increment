<template>
  <div class="incre-row" id="home-banner">
    <div class="cw-banner bg-primary" ></div>
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
    <!-- <div class="whitebox"></div> -->
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.incre-row {
  // height: 100vh;
  width: 100%;
}
button {
  margin-top: 3%;
  border-radius: 50px;
  border: 1px solid;
  box-shadow: 0px 0px 1px $white;
  width: 28vh;
  height: 9vh;
  color: $green;
  background-color: $white;
  font-weight: bold;
  font-size: 2.5vh;
}
button:hover {
  background: $success;
  border: 1px solid $white;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px $white;
  border-radius: 50px;
}
a button:hover{
  color: $white;
}
//left side container
.cw-banner {
  width: 42%;
  float: left;
  height: 100vh;
}
// end of left side container
//leftside side background
.bg-primary {
  background-image: url("../../assets/img/Banner-Meridian.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
//end of left side background
//right side container
.item-holder {
  float:left;
  width: 58%;
  height: 100vh;
  padding-left: 8vh;
  padding-right: 5vh;
}
// end of right side container
//right side background
.bg-gradient{
  background-image: linear-gradient(228.21deg, rgba(143, 0, 181, 0.90) -0.03%, rgba(0, 184, 159, 0.93) 100%),
  url("../../assets/img/gif-banner.gif"),
  url("../../assets/img/Increment_office.jpeg");
  background-size: cover,75vh,cover;
  background-position: center,right,center;
  background-repeat: no-repeat,no-repeat,no-repeat;
}
//end of right side background
h3{
  font-weight: normal;
  font-size: 20px;
  line-height: 4.26vh;
  color: $white;
  padding-right: 35vh;
}
.title {
  margin-top: 45vh;
  color: $white;
}
.title b{
  color: $white;
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
.whitebox{
  background: $white;
  margin-left: 5%;
  margin-right: 3%;
  top: 93%;
  width: 90%;
  height: 7%;
  position: absolute;
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
  .whitebox{    
    position: absolute;
    width: 92%;
    height: 10%;
    margin-left: 4%;
    margin-right: 4%;
    top: 1143px;
  }
  //buttons
  button {
    font-size: 15px;
  }
  .item-holder {
    text-align: center !important;
    width: 100%;
  }
  .bg-primary{
    display: none;
  }
  //boxes
  .bg-gradient{
    background-position: top center;
    background-size: cover,634px,cover;
    width: 992px;
    height: 1190px; 
  }
  .title{
    margin-top: 55%;
    font-size: 50px;
    margin-bottom: 5%;
  }
   h3{
    font-size: 20px;
    line-height: 27px; 
    padding-right: 130px;
    padding-left: 130px; 
  }
}
//ipad mode
@media only screen and (max-width: 768px) {
  .bg-gradient{
    background-position: top center;
    background-size: cover,634px,cover;
    width: 768px;
    height: 1190px; 
  }
  .title b{
    font-size: 40px;
  }
   h3{
    margin-top: 30px;
    font-size: 20px;
    line-height: 27px; 
    padding-right: 10px;
    padding-left: 10px; 
  }
  button{
    margin-top: 40px;
  }
}
@media only screen and (max-width: 540px) {
  .bg-gradient{
    background-position: top center;
    background-size: cover,634px,cover;
    width: 540px;
    height: 1190px; 
  }
}
//phone mode
@media only screen and (max-width: 375px) {
  .whitebox{
    top: 1110.5px !important;
  }

}
@media only screen and (max-width: 414px) {
  .bg-gradient{
    background-position: top center;
    background-size: cover,500px,cover;
    width: 100%;
    height: 1190px; 
  }
    .title{
    margin-top: 130%;
    font-size: 50px;
    margin-bottom: 5%;
    color: $black;
  }
   h3{
    font-size: 20px;
    line-height: 27px; 
    padding-right: 5px;
    padding-left: 5px; 
  }
    .whitebox{
    top: 1117.5px;
  }
}
@media only screen and (max-width: 375px) {
  .bg-gradient{
    background-position: top center;
    background-size: cover,500px,cover;
    width: 375px;
    height: 1190px; 
  }
  .whitebox{
    top: 1124px !important;
  }
}
@media only screen and (max-width: 320px) {
  .bg-gradient{
    background-position: top center;
    background-size: cover,500px,cover;
    width: 100%;
    height: 1190px; 
  }
  .whitebox{
    top: 1133.8px !important;
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