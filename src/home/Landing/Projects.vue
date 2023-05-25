<template>
  <div class="cw-banner" id="our-projects">
    <div class="container">
      <h2><b>OUR PROJECTS</b></h2>
      <p style="color: white">For the past years and until now, Increment Technologies Inc. has been serving clients around the world</p>
      <div class="row">
        <span
          class="card"
          v-for="(item, i) in projects"
          :key="i"
          :index="i"
        >
          <center>
            <div class="box">
              <img :src="item.src" />
            </div>
            <div class="description">
              <p class="p1">{{ item.title }}</p>
              <p class="p2">{{ item.location }}</p>
              <p class="p3">{{ item.description }}</p>
            </div>
            <a v-if="item.withButton? true: false" :href="item.link" target="_blank"
              ><button class="button1">Visit</button></a>
          </center>
        </span>
      </div>
      <roundBtn
        :text="'View more'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon ="'fa fa-angle-right'"
        :route="'/our-projects'"
        :styles="{
          float: 'right',
          backgroundColor: colors.white,
          color: colors.green,
          borderColor: colors.green,
        }"
        :hoverStyles="{
          float:'right',
          backgroundColor: colors.white + '!important',
          color: colors.purple,
          borderColor: colors.purple,
        }"
      />

    </div>
    <div class="whitebox"></div>
  </div>
</template>

<script>
import ROUTER from "src/router";
import roundBtn from "src/home/generic/roundBtn.vue";
import COLORS from "src/assets/style/colors.js";
export default {
  components: {
    roundBtn,
  },
  mounted() {},
  data() {
    return {
      colors: COLORS,
      projects: [
        {
          title: "Runway Express",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - runway.png"),
          link: "http://runwayexpress.co.uk/#/",
          withButton: false
        },
        {
          title: "Mezzo Hotel",
          location: "Philippines",
          description: "Website Development",
          src: require("assets/img/project - mezzo.png"),
          link: "https://mezzohotel.com/",
          withButton: true
        },
        {
          title: "Meat The Sea",
          location: "Hong Kong",
          description: "Website Development",
          src: require("assets/img/project - meetthesea.png"),
          link: "https://www.meatthesea.com/",
          withButton: true
        },
        {
          title: "PayHiram",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - payhiram.png"),
          link: "https://payhiram.ph/",
          withButton: false
        },
        {
          title: "Jiph",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/JiphLogo.png"),
          link: "https://jiph.co/",
          withButton: false
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
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.whitebox{
  background: $white;
  width: 90%;
  height: 7vh;
  margin: 0 5%;
}
.button1 {
  background: linear-gradient(264.22deg, #00B89F 0%, #8F00B5 100%);
  border: none;
  color: #FFFFFF !important;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
  padding: 10px;
  width: 50%;
  font-size: 81%;
}
.row {
  margin-top: 8vh;
  margin-bottom: 8vh;
  text-align: center; 
}
//container for project data
.card {
  width: 23%;
  height: 380px;
  margin: 1%;
  padding: 5px;
  border-radius: 15px;
}
.box img{
  padding: 10%;
  width: 80%;
  height: auto;
  border: 1px solid white;
  background-color: $white;
}
.entitle {
  text-align: center;
  font-size: 50px;
  color: white;
}
.cw-banner {
  width: 100%;
  float: left;
  background: linear-gradient(180deg, #8F00B5 0%, #00B89F 100%);
  min-height: 50vh;
}
.container {
  padding-top: 15vh;
  padding-bottom: 15vh;
  text-align: center;
  color: white;
}
.description {
  position: relative;
  top: -20px;
  max-height: 90px;
}
.p1 {
  color: $green;
  padding-bottom: 3px;
}
.p2 {
  color: $black;
  position: relative;
  top: -20px;
}
.p3 {
  color: $black;
  font-size: 14px !important;
  position: relative;
  top: -20px;
}
img {
  width: 100%;
  height: auto;
  margin: auto;
  padding: 5%;
}
@media only screen and (max-width: 1200px) {
  .card {
    width: 40% !important;
    height: 500px;
    margin: 5% !important;
  }
  .whitebox {
    display: none;
  }
  button.btn {
    float: unset !important;
    left: -5px;
  }
}
@media only screen and (max-width: 992px) {
  .card {
    width: 60% !important;
    height: 550px;
    margin: 5% 20% !important;
  }
}
@media only screen and (max-width: 767px) {
  .card {
    width: 60% !important;
    height: 450px;
    margin: 5% 20% !important;
  }
}
@media only screen and (max-width: 415px) {
  .card {
    width: 60% !important;
    height: 360px;
    margin: 5% 20% !important;
  }
}
</style>
