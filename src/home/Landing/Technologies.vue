<template>
  <div class="banner" id="technologies">
    <div class="container">
      <h1 class="title">Technologies</h1>
      <div
        class="row"
        id="single-card"
        v-for="(item, index) in list"
        :key="index"
      >
        <span class="col-md-9" style="text-align: left">
          <h3 class="tech">{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </span>
        <span class="col-md-3" style="text-align: right">
          <img :src="item.src" class="img" />
        </span>
      </div>
      <div class="button">
        <button @click="redirect('technologies')" id="btn">
          View More <i class="fa fa-arrow-right" style="margin-left: 10px;font-size: 16px;"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: white;
  min-height: 100vh;
  float: left;
  width: 100%;
}

.title {
  font-weight: 700;
  font-size: 50px;
}

.tech {
  font-weight: 700;
}

.tech::after {
  content: " ";
  margin-top: 5px;
  position: absolute;
  display: block;
  width: 100px;
  height: 2px;
  background: #8f00b5;
}
.row {
  margin-top: 10vh;
}

.img {
  height: 120px;
  width: 120px;
}

#single-card {
  padding: 10px;
  min-height: 150px;
}
.container {
  padding-top: 20vh;
  padding-bottom: 20vh;
  text-align: center;
  color: black;
}

p {
  margin-top: 2vh;
}

#btn {
  background-color: $secondary;
  color: white;
  border-radius: 10px;
  border: none;
  padding: 15px 30px;
  text-align: center;
  margin-top: 12vh;
  font-weight: 700;
  outline-color: white;
  box-shadow: 0px 0px 15px rgba(0, 184, 159, 0.25);
}
</style>
<script>
import ROUTER from "src/router";
export default {
  data() {
    return {
      list: [
        {
          title: "WEB DEVELOPMENT",
          desc:
            "Laravel, Vuejs, Javascript, Nodejs, ReactJS, React Native, API Integrations, Bootstrap, Android Development, iOS Development, Java, Wordpress, Shopify Storefront + API, PHP, CodeIgniter, HTML5, CSS3, Xampp, Wampp, MySQL, Woocommerce Integration, Alibaba Dropshipping, Amazon Dropshipping, Shopify, Paypal API Integration, Stripe API Integration, Instagram API Integration, Google API Integration, Facebook API Integration, Messaging  ",
          src: require("assets/img/WebDevelopment.png"),
        },
        {
          title: "MOBILE DEVELOPMENT",
          desc: "Java, Objective-C, React-Native, Android Development",
          src: require("assets/img/MobileDevelopment.png"),
        },
        {
          title: "UI/UX Designs",
          desc: "Adobe Tools (PS, Indesign, After Effects, XD), Figma",
          src: require("assets/img/UI_UXDesign.png"),
        },
        {
          title: "SYSTEM ADMINISTRATOR",
          desc:
            "CentOS, Linux, AWS, CPANEL, Google Cloud, GodDaddy, SiteGround, Dedicated Server and Related Task",
          src: require("assets/img/SystemAdministrator.png"),
        },
        {
          title: "LOWER LEVEL PROGRAMMING",
          desc: "Assembly, C-Language, C++, and IVHDL",
          src: require("assets/img/LowerLevelProgramming.png"),
        },
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