<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h1 class="title">TECHNOLOGIES</h1>
      <h3 class="desc">Innovating your business and integrating it with these technologies will create opportunities for the organization to grow.</h3>
      <div class="row no-gutters">
        <!-- list for Systems admin & UI/UX -->
        <span class="first-row" v-for="(item, index) in list1" :key="index">  
          <center class="single-card ">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <!-- End list for Systems admin & UI/UX -->
        <!-- Lower Level Programming -->
        <!-- <span class="col-md-5" v-for="(item, index) in list2" :key="index">    
          <center class="single-card low-lev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span> -->
        <!-- End of Lower Level Programming -->
        <div class="softdev-gif"></div>
        <!-- Mobile Development-->
        <!-- <span class="col-md-1" v-for="(item, index) in list3" :key="index">    
          <center class="single-card mob-dev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span> -->
        <!-- End of Mobile Development -->
        <!-- Web Development -->
        <!-- <span class="col-md-4" v-for="(item, index) in list4" :key="index">    
          <center class="single-card web-dev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span> -->
        <!-- End of Web Development -->
      </div>
    </div>  
      <div class="button" style="margin-bottom: 100px;">
        <button @click="redirect('technologies')" id="btn">
          View More 
          <i class="fa fa-angle-right right" style="padding-left: 5px;"></i>
          <i class="fa fa-angle-double-right right"></i>
        </button>
      </div>
    </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: $white;
  float: left;
  width: 100%;
}
.title {
  font-weight: 800;
  font-size: 50px;
  color: $primary;
}
.desc{
  margin-top: 3vh;
  font-size: 16px;
  color: $black;
  font-weight: normal;
  text-align: center;
}
h3{
  margin-top: 30px;
  font-size: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: $primary;
}
p {
  color: $black;
  margin-top: 20px;
  width: 300px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.row{
  margin-top: 10vh;
  text-align: center;
}
.single-card{
  margin: 20px 20px 0 50px;
  width: 320px;
  height: 324px;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient($white, $white), linear-gradient(132.58deg, $gradientPrimary 0%, $gradientSecondary 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.single-card:hover{
  background-image: linear-gradient(132.58deg, $gradientPrimary, $gradientSecondary);
  border-radius: 10px;
  p{
    color: $white;
  }
  h3{
    color: $white;
  }
  .font-awesome-icon{
    color: $white;
  }
}
.softdev-gif{
  position: relative;
  right: 17%;
  background-image: url("../../assets/img/software-development-gif.gif");
  background-size: cover;
  margin: 30px auto;
  width: 400px;
  height: 300px;
}
// .low-lev{
//   position: relative;
//   margin: auto;
//   right: 230px;
// }
// .mob-dev{
//   position: relative;
//   margin: auto;
//   right: 80px;
// }
.web-dev{
  position: relative;
  width: 1162px;
  height: 324px;
  right: 230px;
  p{
    width: 1124px;
  }
}
.container {
  padding-top: 10vh;
  padding-bottom: 10vh;
  text-align: center;
  color: $white;
}
.font-awesome-icon{
  margin-top: 40px;
  font-size: 100px;
  color: $secondary;
}
#btn {
  background-color: $white;
  color: $green;
  border-radius: 50px;
  padding: 10px 30px;
  font-weight: 700;
  border: 1px solid $green;
  position: relative;
  float: right;
  margin-right: 10%;
  margin-left: 10px;
  font-size: 16px;
    .right{
    font-size: 26px;
    font-weight: 700;
    position: relative;
    top: 2px;
    left: 8px;
  }
}
#btn:hover{
  color: $purple;
  background: $white;
  border: 1px solid $purple;
}
#btn i:nth-child(2) {
  display: none;
}
#btn:hover i:nth-child(1){
  display: none;
}
#btn:hover i:nth-child(2){
  display: inline-block;
}
// tablet mode //
@media only screen and (max-width: 992px){
  .font-awesome-icon{
    margin-top: 5vh;
    font-size: 100px;
    color: $secondary;
    display: block;
    background: linear-gradient(132.58deg, $gradientPrimary, $gradientSecondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
//title and background
@media only screen and (max-width: 992px) {
  .title{
    color: $primary;
  }
  .desc{
    color: $black;
  }
}
// boxes
@media only screen and (max-width: 992px) {
  .row {
    display: block;
    width: 100%;
    margin: unset;
    margin-top: 90px;
  }
  .sys-ui{
    position: relative;
    left: 105px;
  }
  .softdev-gif{
    display: none;
  }
  .low-lev{
    position: relative;
    left: 10px;
  }
  .mob-dev{
    position: relative;
    margin-top: 20px;
    left: 10px;
  }
  .web-dev{
    position: relative;
    width: 338px;
    height: 520px;
    left: 105px;
    p{
      width: 300px;
    }
  }
  .font-awesome-icon {
  font-size: 100px;
  color: $secondary;
  display: block;
  }
}
@media only screen and (max-width: 992px){
  #btn{
    position: relative;
    left: -300px;
    top: -20px;
  }
  #btn i:nth-child(2) {
    display: none;
  }
  #btn:hover i:nth-child(1){
    display: none;
  }
  #btn:hover i:nth-child(2){
    display: inline-block;
  }
}
@media only screen and (max-width: 991px) {
  .sys-ui{
    position: relative;
    left: -15px;
  }
  .web-dev{
    left: -15px;
  }
   #btn{
    left: -310px;
    top: -10px;
  }
}
//boxes ipad
@media only screen and (max-width: 768px) {

  .sys-ui{
    position: relative;
    left: -15px;
  }
  .softdev-gif{
    display: none;
  }
  .web-dev{
    position: relative;
    width: 338px;
    height: 520px;
    left: -15px;
    p{
      width: 300px;
    }
  }
  // button
  #btn{
    left: -230px;
    top: -10px;
  }
}
@media only screen and (max-width: 760px) {

  .sys-ui{
    position: relative;
    left: -105px;
  }
  .softdev-gif{
    display: none;
  }
  .web-dev{
    position: relative;
    width: 338px;
    height: 520px;
    left: -105px;
    p{
      width: 300px;
    }
  }
  // button
  #btn{
    left: -230px;
    top: -10px;
  }
}
// end of ipad
//boxes phone
@media only screen and (max-width: 540px) {
  .title{
    font-size: 43px;
  }
  .desc{
    font-size: 16px;
    padding-right: 30px;
  }
  .sys-ui{
    left: -105px;
  }
  .web-dev{
    left: -105px;
  }
  // button
  #btn{
    top: -20px;
    left: -140px;
  }
}
@media only screen and (max-width: 425px) {
  .title{
    font-size: 43px;
  }
  .desc{
    font-size: 15px;
  }
  .sys-ui{
    position: relative;
    left: -180px;
  }
  .softdev-gif{
    display: none;
  }
  .low-lev{
    position: relative;
    left: -7px;
  }
  .mob-dev{
    position: relative;
    left: -7px;
  }
  .web-dev{
    position: relative;
    left: -180px;
  }
  // button
  #btn{
    position: relative;
    left: -90px;
  }
}
@media only screen and (max-width: 414px) {
  .title{
    font-size: 43px;
  }
  .desc{
    font-size: 15px;
  }
  .sys-ui{
    position: relative;
    left: -180px;
  }
  .softdev-gif{
    display: none;
  }
  .low-lev{
    position: relative;
    left: -3px;
  }
  .mob-dev{
    position: relative;
    left: -3px;
  }
  .web-dev{
    position: relative;
    left: -180px;
  }
  // button
  #btn{
    position: relative;
    left: -90px;
  }
}
@media only screen and (max-width: 375px) {
  .title{
    font-size: 38px;
  }
  .desc{
    font-size: 13px;
  }
  p{
    font-size: 15px;
    padding-right: 15px;
  }
  .sys-ui{
    width: 290px;
    position: relative;
    left: -170px;
  }
  .low-lev{
    width: 290px;
    left: 0px;
  }
  .mob-dev{
    width: 290px;
    left: 0px;
  }
  .web-dev{
    width: 290px;
    position: relative;
    left: -170px;
  }
  // button
  #btn{
    top: -20px;
    left: -70px;
  }
}
@media only screen and (max-width: 360px) {
  .sys-ui{
    position: relative;
    left: -180px;
  }
  .web-dev{
    left: -180px;
  }
  // button
  #btn{
    left: -65px;
  }
}
@media only screen and (max-width: 320px) {
  .title{
    font-size: 33px;
  }
  .desc{
    font-size: 13px;
  }
  .sys-ui{
    width: 280px;
    left: -195px;
    p{
      padding-right: 25px;
      font-size: 12px;
    }
  }
  .low-lev{
    left: 0px;
  }
  .mob-dev{
    left: 0px;
  }
  .web-dev{
    left: -200px;
  }

  // button
  #btn{
    top: -20px;
    left: -50px;
  }
}
//end of phone
// end of responsiveness mode //
</style>
<script>
import ROUTER from "src/router";
import { faMobile, faLaptopCode, faCode, faServer, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
export default {
  data() {
    return {
        list: [
        {
          title: "SYSTEM ADMINISTRATOR",
          desc:
            "CentOS, Linux, AWS, CPANEL, Google Cloud, GoDaddy, SiteGround, Dedicated Server and Related Task",
          src: faServer,
        },
        {
          title: "UI/UX Designs",
          desc: "Adobe Tools (PS, Indesign, After Effects, XD), Figma",
          src: faObjectGroup,
        },
        {
          title: "LOWER LEVEL PROGRAMMING",
          desc: "Assembly, C-Language, C++, and IVHDL",
          src: faCode,
        },
        {
          title: "MOBILE DEVELOPMENT",
          desc: "Java, Objective-C, React-Native, Android Development",
          src: faMobile,
        }
      ],
      list1: [
        {
          title: "SYSTEM ADMINISTRATOR",
          desc:
            "CentOS, Linux, AWS, CPANEL, Google Cloud, GoDaddy, SiteGround, Dedicated Server and Related Task",
          src: faServer,
        },
        {
          title: "UI/UX Designs",
          desc: "Adobe Tools (PS, Indesign, After Effects, XD), Figma",
          src: faObjectGroup,
        }    
      ],
      list2: [
         {
          title: "LOWER LEVEL PROGRAMMING",
          desc: "Assembly, C-Language, C++, and IVHDL",
          src: faCode,
        }
      ],
      list3: [
        {
          title: "MOBILE DEVELOPMENT",
          desc: "Java, Objective-C, React-Native, Android Development",
          src: faMobile,
        }
      ],
      list4: [
          {
          title: "WEB DEVELOPMENT",
          desc: "Laravel, Vuejs, Javascript, Nodejs, ReactJS, React Native, API Integrations, Bootstrap, Android Development, iOS Development, Java, Wordpress, Shopify Storefront + API, PHP, CodeIgniter, HTML5, CSS3, Xampp, Wampp, MySQL, Woocommerce Integration, Alibaba Dropshipping, Amazon Dropshipping, Shopify, Paypal API Integration, Stripe API Integration, Instagram API Integration, Google API Integration, Facebook API Integration, Messaging  ",
          src: faLaptopCode,
        }
      ],
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>