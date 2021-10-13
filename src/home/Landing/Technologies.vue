<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h1 class="title">TECHNOLOGIES</h1>
      <h3 class="desc">Innovating your business and integrating it with these technologies will create opportunities for the organization to grow.</h3>
      <div class="row no-gutters">
        <!-- list for Systems admin & UI/UX -->
        <span class="col-md-4" v-for="(item, index) in list1" :key="index">  
          <center class="single-card">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <!-- End list for Systems admin & UI/UX -->
        <!-- Lower Level Programming -->
        <span class="col-md-5" v-for="(item, index) in list2" :key="index">    
          <center class="single-card low-lev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <!-- End of Lower Level Programming -->
     <div class="softdev-gif"></div>
        <!-- Mobile Development-->
        <span class="col-md-1" v-for="(item, index) in list3" :key="index">    
          <center class="single-card mob-dev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <!-- End of Mobile Development -->
        <!-- Web Development -->
        <span class="col-md-4" v-for="(item, index) in list4" :key="index">    
          <center class="single-card web-dev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <h3 class="head-title">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <!-- End of Web Development -->
      </div>
    </div>  
      <div class="button" style="margin-bottom: 100px;">
        <button @click="redirect('technologies')" id="btn">
          View More 
          <i class="fa fa-angle-right right" style=""></i>
          <i class="fa fa-angle-double-right right"></i>
        </button>
      </div>
    </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: #ffff;
  float: left;
  width: 100%;
}
.title {
  font-weight: 800;
  font-size: 50px;
  color: #3F0050;
}
.desc{
  margin-top: 3vh;
  font-size: 16px;
  color: #000000;
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
  color: #3F0050;
}
p {
  color: #000000;
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
  margin: 20px 200px;
  width: 338px;
  height: 324px;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient(white, white), linear-gradient(132.58deg, #00B89F 0%, #8F00B5 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.single-card:hover{
  background-image: linear-gradient(132.58deg, #00B89F, #8F00B5);
  border-radius: 10px;
  p{
    color: #FFFFFF;
  }
  h3{
    color: #FFFFFF;
  }
  .font-awesome-icon{
    color: #FFFFFF;
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
.low-lev{
  position: relative;
  margin: auto;
  right: 230px;
}
.mob-dev{
  position: relative;
  margin: auto;
  right: 80px;
}
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
  color: white;
}
.font-awesome-icon{
  margin-top: 40px;
  font-size: 100px;
  color: #00B89F;
}
#btn {
  background-color: #FFFFFF;
  color: #028170;
  border-radius: 50px;
  padding: 10px 30px;
  text-align: center;
  font-weight: 700;
  border: 1px solid #028170;
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
  color: #8F00B5;
  background: #FFFFFF;
  border-radius: 50px;
  border: 1px solid#8F00B5;
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
    color: #00B89F;
    display: block;
    background: -webkit-linear-gradient(132.58deg, #00B89F, #8F00B5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
// boxes
@media only screen and (max-width: 992px){
  .single-card{
    margin: 15px 170px;
    width: 280px;
    height: 324px;
    border: double 3px transparent;
    border-radius: 10px;
    background-image: linear-gradient(white, white), linear-gradient(132.58deg, #00B89F 0%, #8F00B5 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
 }
 p{
   text-align: center;
   padding-right: 35px;
 }
 .softdev-gif{
   background-size: cover;
   right: 170px;
   width: 380px;
   height: 300px
 }
 .low-lev{
   right: 190px;
 }
 .mob-dev{
   right: 380px;
 }
 .web-dev{
  position: relative;
  width: 800px;
  height: 324px;
  right: 100px;
    p{
      text-align: center;
      padding-right: 335px;
    }
  }
}
// button
@media only screen and (max-width: 992px){
  #btn{
    position: relative;
    left: 80px;
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
// end of tablet mode //

</style>
<script>
import ROUTER from "src/router";
import { faMobile, faLaptopCode, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
export default {
  data() {
    return {
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
          src: faLaptopCode,
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