<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h2>TECHNOLOGIES</h2>
      <h4>Innovating your business and integrating it with these technologies will create opportunities for the organization to grow.</h4>
      <div class="row no-gutters">
        <span v-for="(item, index) in list1" :key="index">  
          <center class="single-card first-row">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <p class="head-title">{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <span v-for="(item, index) in list2" :key="index">  
          <center class="single-card second-row">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <p class="head-title">{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <span v-for="(item, index) in list3" :key="index">  
          <center class="single-card second-row1">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <p class="head-title">{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </center>
        </span>
        <div class="softdev-gif"></div><!-- CENTER GIF -->
        <span v-for="(item, index) in list4" :key="index" style="margin-bottom: -400px;">    
          <center class="single-card web-dev">
            <font-awesome-icon :icon="item.src"  class="font-awesome-icon"/>
            <p class="head-title">{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </center>
        </span>
      </div>
    </div>  
    <roundBtn
        :text="'View More'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon ="'fa fa-angle-right'"
        :route="'/technologies'"
        :styles="{
          backgroundColor: colors.white,
          color: colors.green,
          borderColor: colors.green,
        }"
        :hoverStyles="{
          backgroundColor: colors.white,
          color: colors.purple,
          borderColor: colors.purple,
        }"
      />
    </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: $white;
  float: left;
  width: 100%;
}
h2 {
  color: $primary;
}
h4{
  margin-top: 3vh;
  color: $black;
}
h3{
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  color: $primary;
}
.head-title{
  margin: 20px;
  color: $primary;
  font-weight: 700;
}
p {
  color: $black;
}
.row{
  margin-top: 10vh;
  text-align: center;
}
.single-card{
  width: 280px;
  min-height: 290px;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient($white, $white), linear-gradient(132.58deg, $gradientPrimary 0%, $gradientSecondary 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.single-card:hover{
  background-image: linear-gradient(132.58deg, $gradientPrimary, $gradientSecondary);
  border-radius: 10px;
  p, .font-awesome-icon{
    color: $white;
  }
}
.first-row{
   position: relative;
  left: 230px;
  margin: 20px 20px;
}
.second-row{
  position: relative;
  left: -170px;
  top: -110px;
  margin: 100px;
}
.second-row1{
    position: relative;
    left: 410px;
    top: -5px;
  }
.softdev-gif{
  position: relative;
  top: -460px;
  left: 360px;
  background-image: url("../../assets/img/software-development-gif.gif");
  background-size: cover;
  width: 35%;
  min-height: 280px;
}
.web-dev{
  position: relative;
  top: -425px;
  left: -25px;
  width: 100%;
  min-height: 324px;
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
</style>
<script>
import ROUTER from "src/router";
import roundBtn from "src/home/generic/roundBtn.vue";
import COLORS from "src/assets/style/colors.js";
import { faMobile, faLaptopCode, faCode, faServer, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
export default {
   components: {
    roundBtn,
  },
  data() {
    return {
      colors: COLORS,
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