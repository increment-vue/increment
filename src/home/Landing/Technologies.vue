<template>
  <div class="body" id="technologies">
    <div class="section-container">
      <h2>TECHNOLOGIES</h2>
      <p>
        Innovating your business and integrating it with these technologies will
        create opportunities for the organization to grow.
      </p>
      <span
        class="card"
        v-for="(item, index) in list"
        :key="index"
        :class="{ hide: !item.displayFlag }"
      >
        <span class="content">
          <center style="padding: 25px">
            <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
          </center>
          <p class="head-title">{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </span>
      </span>
      <div class="image-container">
        <img
          src="../../assets/gif/software-development-gif.gif"
          class="softdev-gif"
        />
      </div>
      <span class="card web-card" v-for="(item, index) in web" :key="index">
        <span class="content">
          <center style="padding: 25px">
            <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
          </center>
          <p class="head-title">{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </span>
      </span>

      <roundBtn
        :text="'View More'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon="'fa fa-angle-right'"
        :route="'/technologies'"
        :styles="{
          float: 'right',
          backgroundColor: colors.white,
          marginBottom: '100px !important',
          color: colors.green,
          borderColor: colors.green,
        }"
        :hoverStyles="{
          float: 'right',
          marginBottom: '100px !important',
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

.body {
  background-color: $white !important;
  float: left !important;
  max-width: 100% !important;
}

.section-container {
  width: 90% !important;
  margin-left: 5% !important;
  margin-right: 5% !important;
  min-height: 100vh !important;
  padding-top: 20vh;
  padding-bottom: 20vh;
  text-align: center;
}

h2 {
  color: $primary;
}

.card {
  width: 20%;
  margin: 2.5%;
  height: 325px;
  float: left;
  border: double 2px transparent;
  border-radius: 10px;
  background-image: linear-gradient($white, $white),
    linear-gradient(132.58deg, $gradientPrimary 0%, $gradientSecondary 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.card:hover,
.web-card:hover {
  background-image: linear-gradient(
    132.58deg,
    $gradientPrimary,
    $gradientSecondary
  );
  border-radius: 10px;
  p,
  .font-awesome-icon {
    color: $white;
  }
}

// .content {
//   padding: 10px;
// }

.font-awesome-icon {
  font-size: 80px;
  color: $secondary;
}

.hide {
  visibility: hidden;
}

.head-title {
  color: $primary;
  font-weight: 700;
}

.image-container{
  width: 100%;
  // margin: auto;
}

.softdev-gif {
  margin-top: -340px;
  width: 40% !important;
  height: auto;
}
.web-card {
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  height: auto;
}
@media screen and (max-width: 992px) {
  .hide,
  .softdev-gif {
    display: none;
  }
  .card {
    float: unset;
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .content {
    padding: 10px;
  }
  .web-card {
    height: auto;
  }
  button.btn {
    float: unset !important;
    margin-top: 30px !important;
  }
}
@media screen and (max-width: 400px) {
  h2 {
    font-size: 30px !important;
  }
}
@media screen and (max-width: 320px) {
  .card{
    width: 60%;
  }
}
</style>
<script>
import ROUTER from "src/router";
import roundBtn from "src/home/generic/roundBtn.vue";
import COLORS from "src/assets/style/colors.js";
import {
  faMobile,
  faLaptopCode,
  faCode,
  faServer,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
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
          mobileClass: "show",
          displayFlag: false,
        },
        {
          block: 1,
          title: "SYSTEM ADMINISTRATOR",
          description:
            "CentOS, Linux, AWS, CPANEL, Google Cloud, GoDaddy, SiteGround, Dedicated Server and Related Task",
          icon: faServer,
          mobileClass: "show",
          displayFlag: true,
        },
        {
          block: 1,
          title: "UI/UX Designs",
          description: "Adobe Tools (PS, Indesign, After Effects, XD), Figma",
          icon: faObjectGroup,
          mobileClass: "show",
          displayFlag: true,
        },
        {
          block: 1,
          title: "",
          description: "",
          icon: "",
          mobileClass: "show",
          displayFlag: false,
        },
        {
          block: 1,
          title: "LOWER LEVEL PROGRAMMING",
          description: "Assembly, C-Language, C++, and IVHDL",
          icon: faCode,
          mobileClass: "show",
          displayFlag: true,
        },
        {
          block: 1,
          title: "",
          description: "",
          icon: "",
          mobileClass: "show",
          displayFlag: false,
        },
        {
          block: 1,
          title: "",
          description: "",
          icon: "",
          mobileClass: "show",
          displayFlag: false,
        },
        {
          block: 1,
          title: "MOBILE DEVELOPMENT",
          description: "Java, Objective-C, React-Native, Android Development",
          icon: faMobile,
          mobileClass: "show",
          displayFlag: true,
        },
      ],
      web: [
        {
          block: 1,
          title: "WEB DEVELOPMENT",
          description:
            "Laravel, Vuejs, Javascript, Nodejs, ReactJS, React Native, API Integrations, Bootstrap, Android Development, iOS Development, Java, Wordpress, Shopify Storefront + API, PHP, CodeIgniter, HTML5, CSS3, Xampp, Wampp, MySQL, Woocommerce Integration, Alibaba Dropshipping, Amazon Dropshipping, Shopify, Paypal API Integration, Stripe API Integration, Instagram API Integration, Google API Integration, Facebook API Integration, Messaging  ",
          icon: faLaptopCode,
          displayFlag: true,
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