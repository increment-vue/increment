<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h2>TECHNOLOGIES</h2>
      <p>Innovating your business and integrating it with these technologies will create opportunities for the organization to grow.</p>
      <span v-for="(item, index) in list" :key="index" :class="{ hide: !item.displayFlag }">  
        <center class="single-card list-item"> 
          <font-awesome-icon :icon="item.icon"  class="font-awesome-icon"/>
          <p class="head-title">{{ item.title }}</p>
          <p>{{ item.description }}</p>          
        </center> 
      </span>
      <div class="softdev-gif"></div>
      <span v-for="(item, index) in web" :key="index">  
        <center class="single-card web-item">
          <font-awesome-icon :icon="item.icon"  class="font-awesome-icon"/>
          <p class="head-title">{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </center>
      </span>
      <roundBtn
        :text="'View More'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon ="'fa fa-angle-right'"
        :route="'/technologies'"
        :styles="{
          float: 'right',
          marginTop: '430px',
          backgroundColor: colors.white,
          color: colors.green,
          borderColor: colors.green,
        }"
        :hoverStyles="{
          float: 'right',
          marginTop: '430px',
          backgroundColor: colors.white + '!important',
          color: colors.purple,
          borderColor: colors.purple,
        }"
      />
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
.container {
  padding-right: 0;
  padding-left: 10px;
  text-align: center;
  max-width: 90%;
  color: $white;
}
h2 {
  color: $primary;
}
.head-title{
  margin: 25px;
  font-size: 18px !important;
  line-height: 20px;
  color: $primary;
  font-weight: 700;
}
p {
  color: $black;
  margin-bottom: 80px;
}
.single-card{
  width: 24%;
  height: 325px;
  float: left;
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
.list-item{
  margin-right: 12px;
}
//gif
.softdev-gif{
  position: relative;
  top: 350px;
  left: 360px;
  background-image: url("../../assets/img/software-development-gif.gif");
  background-size: cover;
  width: 38%;
  min-height: 330px;
}
.web-item{
  margin-top: 50px;
  position: relative;
  left: 110px;
  width: 80%;
  height: 324px;
}
.font-awesome-icon{
  margin-top: 40px;
  font-size: 90px;
  color: $secondary;
}
//hides items if displayFlag = false
.hide{
  visibility: hidden;
}
@media screen and (max-width: 992px) {
  .container{
    width: 100%;
  }
  .single-card{
    float: unset;
    width: 40%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
  .web-item{
    left: 0px;
    min-height: 520px !important;
  }
  .softdev-gif{
    display: none;
  }
  .hide{
    display: none;
  }
  button.btn{
    float: unset !important;
    margin-top: 50px !important,
  }
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
      list: [
      {
        block: 1,
        title: "",
        description: "",
        icon: "",
        mobileClass: 'show',
        displayFlag: false
      },
      {
        block: 1,
        title: "SYSTEM ADMINISTRATOR",
        description: "CentOS, Linux, AWS, CPANEL, Google Cloud, GoDaddy, SiteGround, Dedicated Server and Related Task",
        icon: faServer,
        mobileClass: 'show',
        displayFlag: true
      },
      {
        block: 1,
        title: "UI/UX Designs",
        description: "Adobe Tools (PS, Indesign, After Effects, XD), Figma",
        icon: faObjectGroup,
        mobileClass: 'show',
        displayFlag: true
      },
      {
        block: 1,
        title: "",
        description: "",
        icon: "",
        mobileClass: 'show',
        displayFlag: false
      },
      {
        block: 1,
        title: "LOWER LEVEL PROGRAMMING",
        description: "Assembly, C-Language, C++, and IVHDL",
        icon: faCode,
        mobileClass: 'show',
        displayFlag: true
      },
      {
        block: 1,
        title: "",
        description: "",
        icon: "",
        mobileClass: 'show',
        displayFlag: false
      },  {
        block: 1,
        title: "",
        description: "",
        icon: "",
        mobileClass: 'show',
        displayFlag: false
      },
      {
        block: 1,
        title: "MOBILE DEVELOPMENT",
        description: "Java, Objective-C, React-Native, Android Development",
        icon: faMobile,
        mobileClass: 'show',
        displayFlag: true
      },
      ],
      web: [
          {
          block: 1,
          title: "WEB DEVELOPMENT",
          description: "Laravel, Vuejs, Javascript, Nodejs, ReactJS, React Native, API Integrations, Bootstrap, Android Development, iOS Development, Java, Wordpress, Shopify Storefront + API, PHP, CodeIgniter, HTML5, CSS3, Xampp, Wampp, MySQL, Woocommerce Integration, Alibaba Dropshipping, Amazon Dropshipping, Shopify, Paypal API Integration, Stripe API Integration, Instagram API Integration, Google API Integration, Facebook API Integration, Messaging  ",
          icon: faLaptopCode,
          displayFlag: true
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