<template>
  <div >
    <Curve
      :color="colors.incrementPurple"
      :use="true"
      :stylecss="{
        backgroundColor: colors.white,
      }"
    ></Curve>
    <div class="cw-banner" id="our-services">
      <h2>OUR SERVICES</h2>
      <p>Our company provides a wide range of services to our clients. Being a relatively small firm, we are able to offer customized, high-quality service to our clients.</p>
      <div class="row">
        <span class="card" v-for="(item, index) in services" :key="index">
          <center>
            <font-awesome-icon :icon="item.class" class="font-awesome-icon" />
          </center>
          <b><p class="subtitle">{{ item.title }}</p></b>
          <span style="font-size: 13px; color: black">{{ item.desc }}</span>
        </span>
      </div>
    </div>
    <Curve
      :color="colors.incrementPurple"
      :use="false"
      :stylecss="{
        backgroundColor: colors.white,
      }"
    ></Curve>
  </div>
</template>

  <style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  padding-bottom: 15vh !important;
  padding-top: 15vh !important;
  float: left;
  width: 100%;
  padding-left: 10% !important;
  padding-right: 10% !important;
  background-color: #5e17eb;
  margin-top: -14.5%;
  padding: 50px 0 50px 0;
  text-align: center !important;
  color: $white;
}

.card {
  width: 22%;
  height: 380px;
  margin: 1.5%;
  padding: 20px;
  border-radius: 15px;
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
  color: $primary;
}

img {
  margin-top: 1vh;
  width: 150px;
  height: 150px;
}

.row {
  text-align: center;
  margin-top: 70px;
}

@media only screen and (max-width: 1500px) {
  .card {
    width: 23% !important;
    margin: 1% !important;
    height: 400px !important;
  }
}

@media only screen and (max-width: 1300px) {
  .card {
    height: 420px !important;
  }
}


@media only screen and (max-width: 1230px){
  .card {
    height: 450px !important;
  }
}

@media only screen and (max-width: 1050px){
  .card {
    height: 380px !important;
    width: 45% !important;
    margin: 2.5% !important;
  }
}



@media only screen and (max-width: 714px) {
  .card {
    height: 400px !important;
  }
}

@media only screen and (max-width: 644px) {
  .card {
    width: 90% !important;
    margin: unset !important;
    margin-top: 5% !important;
    margin-left: 5% !important;
    margin-right: 5% !important;
  }

  .row {
    margin-top: 3vh !important;
  }
}

</style>
<script>
import Curve from "src/home/generic/svgCurve.vue";
import ColorsJS from "src/assets/style/colors.js";
import {
  faPalette,
  faMobileAlt,
  faDesktop,
  faGlobe,
  faArchive
} from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    Curve,
  },
  data() {
    return {
      colors: ColorsJS,
      services: [
        {
          title: "Designs",
          class: faPalette,
          desc: "We use latest editing tools like Adobe Photoshop, and Illustrator for our designing. We also cater making landing page videos using Adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.",
        },{
          title: "Web Development",
          class: faDesktop,
          desc: "Our developers are constantly upgrading their capabilities to provide best and suitable solutions for your needs. Our desire is to create intuitive and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.",
        },
        {
          title: "Mobile Development",
          class: faMobileAlt,
          desc: "The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give the best solutions.",
        },
        {
          title: "API Development",
          class: faArchive,
          desc: "We offer API development services where we create customized APIs based on our clients' existing systems. By developing APIs tailored to their specific needs, we enhance compatibility, adaptability, and scalability within their overall technology infrastructure.",
        },
        {
          title: "Software Maintenance",
          class: faGlobe,
          desc: "Increment Technologies Inc. also offers software maintenance to ensure continued functionality, security, and performance of their clients' software applications. This includes bug fixing, troubleshooting, performance optimization, security updates, and compatibility enhancements.",
        },
        {
          title: "Hosting",
          class: faGlobe,
          desc: "We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.",
        },
      ],
    };
  },
};
</script>
