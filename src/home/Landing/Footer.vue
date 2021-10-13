<template>
  <div>
    <div class="curve" style="background: black">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00B89F"
          fill-opacity="1"
          d="M1919 0H0V43.2333C0 43.2333 99.234 79.8683 165.681 90.3369C316.558 114.108 422.004 30.1656 553.944 43.2333C678.534 55.5728 741.733 95.7704 866.339 107.944C1005.3 121.52 1083.76 110.657 1222.8 97.9025C1382.48 83.2545 1469.45 47.1908 1629.76 43.2333C1742.83 40.4416 1859.81 58.2952 1919 58.2952V0Z"
        ></path>
      </svg>
    </div>
    <div class="row">
      <div class="col-sm">
        <div v-for="(item, index) in common.footer1_contents" :key="index">
          <label class="title-name"><b>{{ item.name }}</b></label>
          <p>
            <a class="font-url" :href="item.url">{{ item.title }}</a>
          </p>
          <ul v-if="item.subMenu.length > 0" class="sub-menu">
            <li v-for="(sItem, sIndex) in item.subMenu" :key="sIndex">
              <font-awesome-icon class="fontawesome-icon" :icon="sItem.icon" />&nbsp;&nbsp;&nbsp; {{ sItem.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm">
        <div v-for="(item, index) in common.footer2_contents" :key="index">
          <b class="title-name">{{ item.name }}</b>
          <p><a class="font-url" :href="item.url">{{ item.title }}</a></p>
        </div>
      </div>
      <div class="col-sm">
        <div v-for="(item, index) in common.footer3_contents" :key="index">
          <label class="title-name"><b>{{ item.name }}</b></label>
          <p>
            <a class="font-url" :href="item.url">{{ item.title }}</a>
          </p>
          <ul v-if="item.subMenu.length > 0" class="sub-menu">
            <li v-for="(sItem, sIndex) in item.subMenu" :key="sIndex">
              <font-awesome-icon class="fontawesome-icon" :icon="sItem.icon" />&nbsp; {{ sItem.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- <p class="copyright">
          Copyright @{{ common.APP_COPYRIGHT }}. A proud product of
          <b class="action-link">{{ common.APP_DEVELOPER }}</b
          >.
        </p> -->
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.row {
  padding-left: 10%;
  padding-right: 10%;
  background-color: $black;
}
.curve {
  width: 100%;
  float: left;
  height: 200px;
}
.font-url {
  line-height: 0px;
  color: $white;
}
.font-url1 {
  line-height: 0px;
  color: $white;
  margin-top: 2%;
}
.fontawesome-icon{
  font-size: 30px;
  color: $white;
}
.title-name{
  font-size: 20px;
  color: $white;
}
li{
  list-style: none;
  color: $white;
}
// @media screen and (max-width: 992px) {
//   .footer-content {
//     width: 90%;
//     margin-left: 5%;
//     margin-right: 5%;
//     margin-top: 0%;
//   }
// }
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import {
  faCopyright,
  faEnvelope,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      common: COMMON,
      faCopyright: faCopyright,
      faEnvelope: faEnvelope,
      faMapMarker: faMapMarker,
      faPhoneAlt: faPhoneAlt,
      information: [
        {
          name: "Who We Are",
          directory: "/case-studies/company-profiling",
        },
        {
          name: "Our Services",
          directory: "/our-services",
        },
        {
          name: "How We Work",
          directory: "/how-we-work",
        },
        {
          name: "Our Projects",
          directory: "/our-projects",
        },
        {
          name: "Case Studies",
          directory: "/case-studies",
        },
        {
          name: "Technologies",
          directory: "/technologies",
        },
        {
          name: "Send Request",
          directory: "/send-request",
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

