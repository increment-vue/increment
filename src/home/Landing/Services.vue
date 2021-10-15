<template>
  <div id="our-services">
    <div class="curve-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 114">
        <path
          fill="#00B89F"
          fill-opacity="1"
          d="M0 114.359H1919V72.1293C1919 72.1293 1818.31 6.27769e-05 1627.8 0C1437.3 -6.27764e-05 1257.73 110.599 1072.05 110.599C999.157 110.599 927.457 94.1749 858.089 72.9421C765.056 44.4665 654.178 0 557.849 0C461.521 0 409.984 67.5828 308.769 72.9421C185.042 79.4935 0 0 0 0V114.359Z"
        ></path>
      </svg>
    </div>
    <div class="cw-banner">
      <div class="container">
        <h1 class="title">OUR SERVICES</h1>
        <h6>What we offer are innovative solutions</h6>
        <div class="row">
          <span class="col-md-3" v-for="(item, index) in services" :key="index">
            <center class="icon-container">
              <font-awesome-icon :icon="item.class" class="font-awesome-icon" />
              <h4 class="subtitle">{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </center>
          </span>
        </div>
      </div>
    </div>
    <div class="curve-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 114">
        <path
          fill="#8F00B5"
          fill-opacity="1"
          d="M1919 0H0V43.2333C0 43.2333 99.234 79.8683 165.681 90.3369C316.558 114.108 422.004 30.1656 553.944 43.2333C678.534 55.5728 741.733 95.7704 866.339 107.944C1005.3 121.52 1083.76 110.657 1222.8 97.9025C1382.48 83.2545 1469.45 47.1908 1629.76 43.2333C1742.83 40.4416 1859.81 58.2952 1919 58.2952V0Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import {
  faPalette,
  faMobileAlt,
  faDesktop,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      services: [
        {
          title: "Design",
          class: faPalette,
          desc: "We use latest editing tools like adobe photoshop, and illustrator for our designing. We also cater making landing page videos using adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.",
        },
        {
          title: "Mobile",
          class: faMobileAlt,
          desc: "The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give best solutions.",
        },
        {
          title: "Web",
          class: faDesktop,
          desc: "Our developers are contantly upgrading its capabilities to provide best and suitable solutions for your needs. Our disease to create beatiful and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.",
        },
        {
          title: "Hosting",
          class: faGlobe,
          desc: "We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.",
        },
      ],
      common: COMMON,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/style/colors.scss";

@media only screen and (max-width: 992px) {
  .row {
    display: flex;
    flex-direction: column; 
    
  }
  .icon-container {
    margin-bottom: 10vh;
    width: 69vh;
    position: relative;
    left: 75%;
  }
}

@media only screen and (max-width: 767px) {
  .row {
    display: flex;
    flex-direction: column; 
  }
  .icon-container {
    margin-bottom: 10vh;
    width: 100%;
    left: 4%;
  }
}

//animation scroll into view
// @keyframes animateService {
//     0%   { left:0px; top:500px;}
//     25%  { left:0px; top:0px;}
//     50%  { left:0px; top:0px;}
//     75%  { left:0px; top:0px;}
//     100% { left:0px; top:0px;}
// } 
// @media only screen and (max-width: 992px) {
//   h1.title {
//     animation-name: animateService;
//     animation-duration: 3s;
//     position: relative;
//   }
// }
// @media only screen and (max-width: 992px) {
//   h6 {
//     animation-name: animateService;
//     animation-duration: 3s;
//     position: relative;
//   }
// }
// @media only screen and (max-width: 992px) {
//   center.icon-container {
//     animation-name: animateService;
//     animation-duration: 3s;
//     position: relative;
//   }
// }


.curve {
  width:100%;
  float: left;
  overflow: visible;
  margin-bottom: -6vh;
}

.curve-bottom {
  top: -1vh;
  height: 200px;
  margin-bottom: 6vh;
}

.font-awesome-icon {
  margin-top: 30px;
  margin-bottom: 30px;
  color: $secondary;
  font-size: 80px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #3F0050; 
}

//container for the services
.icon-container {
  background: white;
  height: 340px;
  box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.25);
  border-radius: 10px;    
}

.cw-banner {
  float: left;
  // background: $secondary;
  width: 100%;
  background: linear-gradient(180deg, #00B89F 0%, #8F00B5 100%);

}

.title {
  font-weight: 700;
  font-size: 50px;
}

img {
  margin-top: 1vh;
  width: 150px;
  height: 150px;
}

.container {
  text-align: center;
  color: white;
}
.row {
  margin-top: 8vh;
  text-align: center;
}

p {
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 70%;
  color: black;
}
#our-services{
  height: 100vh;
}
</style>

