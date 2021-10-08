<template>

  <div class="cw-banner" id="our-services">
    <div class="wave"><br><br><br></div>
    <div class="container"> 
      <h1 class="title">OUR SERVICES</h1>
      <h6>What we offer are innovative solutions</h6>
      <div class="row">
        <span class="col-md-3" v-for="(item, index) in services" :key="index">
          <center class="icon-container">
            <font-awesome-icon :icon="item.class"  class="font-awesome-icon"/>
            <h4 class="subtitle">{{item.title}}</h4>
            <p>{{ item.desc }}</p>
          </center>
        </span>
      </div>
    </div>
  </div>
 
</template>

<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import {faPalette, faMobileAlt, faDesktop, faGlobe} from '@fortawesome/free-solid-svg-icons';
export default {
  data() {

    return {
      services: [
        {
          title: 'Design',
          class: faPalette,
          desc:
            "We use latest editing tools like adobe photoshop, and illustrator for our designing. We also cater making landing page videos using adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.",
        },
        {
          title:'Mobile',
          class: faMobileAlt,
          desc:
            "The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give best solutions.",
        },
        {
          title: 'Web',
          class: faDesktop,
          desc:
            "Our developers are contantly upgrading its capabilities to provide best and suitable solutions for your needs. Our disease to create beatiful and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.",
        },
        {
          title: 'Hosting',
          class: faGlobe,
          desc:
            "We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.",
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
    padding-left: 28%;
    justify-content: space-evenly;
  }

  .icon-container {
    width: 80vh;
  }
}

//animation scroll into view
@keyframes animateService {
    0%   { left:0px; top:500px;}
    25%  { left:0px; top:0px;}
    50%  { left:0px; top:0px;}
    75%  { left:0px; top:0px;}
    100% { left:0px; top:0px;}
} 
@media only screen and (max-width: 992px) {
  h1.title {
    animation-name: animateService;
    animation-duration: 3s;
    position: relative;
  }
}
@media only screen and (max-width: 992px) {
  h6 {
    animation-name: animateService;
    animation-duration: 3s;
    position: relative;
  }
}
@media only screen and (max-width: 992px) {
  center.icon-container {
    animation-name: animateService;
    animation-duration: 3s;
    position: relative;
  }
}

// .wave {
//   background-image: url("../../assets/img/top-services.svg");
//   width: 200vh;
//   background-color: white;
//   background-repeat: no-repeat;
//   background-size: 200vh;
// }

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
  height: 400px;
  box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  margin-bottom: 30%;
}

.cw-banner {
  float: left;
  background: $secondary;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(252deg, #00B89F 0%, #8F00B5 100%);
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
  padding-top: 12vh;
  padding-bottom: 14vh;
  text-align: center;
  color: white;
}
.row {
  margin-top: 10vh;
  text-align: center;
}

p {
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 90%;
  color: black;
}
</style>

