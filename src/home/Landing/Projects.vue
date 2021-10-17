<template>
  <div class="cw-banner" id="our-projects">
    <!-- <div class="curve top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 114"><path fill="#8F00B5" fill-opacity="1" d="M0 114.359H1919V72.1293C1919 72.1293 1818.31 6.27769e-05 1627.8 0C1437.3 -6.27764e-05 1257.73 110.599 1072.05 110.599C999.157 110.599 927.457 94.1749 858.089 72.9421C765.056 44.4665 654.178 0 557.849 0C461.521 0 409.984 67.5828 308.769 72.9421C185.042 79.4935 0 0 0 0V114.359Z"></path></svg> 
    </div> -->
    <div class="container">
      <h1 class="entitle"><b>OUR PROJECTS</b></h1>
      <h6>For the past years and until now, Increment Technologies Inc. has been serving clients around the world</h6>
      <div class="row">
        <span
          class="col-md-3"
          v-for="(item, i) in projects"
          :key="i"
          :index="i"
        >
          <center class="icon-container">
            <div class="box">
              <img :src="item.src" />
            </div>
            <div class="description">
              <p class="p1">{{ item.title }}</p>
              <p style="margin-bottom: 30px; font-weight: bold">{{ item.location }}</p>
              <p style="margin-bottom: 30px">{{ item.description }}</p>
            </div>
            <a :href="item.link" target="_blank"
              ><button class="button1">Visit Website</button></a>
          </center>
        </span>
      </div>
      <button @click="redirect('our-projects')" class="button2">
        View More<i
          class="fa fa-angle-right aright"
          style="margin-left: 10px; font-size: 26px; padding-left: 5px"
        ></i>
        <i
          class="fa fa-angle-double-right adright"
          style="margin-left: 10px; font-size: 26px"
        ></i>
      </button>
    </div>
    <div class="whitebox"></div>
  </div>
</template>

<script>
import ROUTER from "src/router";
export default {
  mounted() {},
  data() {
    return {
      projects: [
        {
          title: "Runway Express",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - runway.png"),
          link: "http://runwayexpress.co.uk/#/",
        },
        {
          title: "Mezzo Hotel",
          location: "Philippines",
          description: "Website Development",
          src: require("assets/img/project - mezzo.png"),
          link: "https://mezzohotel.com/",
        },
        {
          title: "Meat The Sea",
          location: "Hong Kong",
          description: "Website Development",
          src: require("assets/img/project - meetthesea.png"),
          link: "https://www.meatthesea.com/",
        },
        {
          title: "PayHiram",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - payhiram.png"),
          link: "https://www.payhiram.ph/",
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
@media only screen and (max-width: 992px) {
  .row {
    display: inline-block;
    flex-direction: column;
    position: relative;
    width: 100%;
  }
  .icon-container {
    margin-bottom: 10vh;
    width: 100%;
  }
  .button1 {
    margin-bottom: 15px;
  }

  .button2 {
    position: relative;
    left: -250px;
  }
}

@media only screen and (max-width: 768px) {
  .row {
    all: unset; 
  }
  .button2 {
    position: relative;
  }
}

.whitebox{
  background: $white;
  width: 90%;
  height: 5vh;
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
  width: 40%;
  font-size: 81%;
}
.button2 {
  background-color: $white;
  color: $secondary;
  border-radius: 50px;
  border: 2px solid $black;
  padding: 10px 30px;
  text-align: center;
  font-weight: bold;
  outline-color: white;
  box-shadow: 0px 0px 15px rgba(0, 184, 159, 0.25);
  float: right;
  border-color: $green;
}

//icon-angle-right css
.aright {
  position: relative;
  top: 2px;
}
.adright {
  position: relative;
  top: 2px;
}

//view more icon changed when hover
.button2 i:nth-child(2) {
  display: none;
}
.button2:hover i:nth-child(1){
  display: none;
}
.button2:hover i:nth-child(2){
  display: inline-block;
}

//view more when hovered
.button2:hover {
  background-color: $white;
  color: $primary;
  border-radius: 50px;
  border: 2px solid black;
  padding: 10px 30px;
  text-align: center;
  font-weight: bold;
  outline-color: $white;
  box-shadow: 0px 0px 15px rgba(0, 184, 159, 0.25);
  float: right;
  border-color: $primary;
}

.row {
  margin-top: 8vh;
  margin-bottom: 8vh;
  text-align: center; 
}

//container for project data
.icon-container {
  background: $white;
  min-height: 360px;
  width: 100%;
  box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.25);
  border-radius: 10px;  
}

.box {
  width: 90%;
  height: auto;
  border: 1px solid white;
  background-color: $white;
  // margin-top: 5%;
  // margin-bottom: 3%;
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
.p1 {
  font-size: 100%;
  color: $secondary;
}
p {
  color: $black;
  font-size: 81%;
}
img {
  width: 100%;
  height: auto;
  margin: auto;
  padding: 5%;
  
}
.description {
  line-height: 0;
  font-size: 100%;
}
</style>
