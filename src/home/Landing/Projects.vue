<template>
  <div class="cw-banner" id="our-projects">
    <div class="container">
      <h1 class="entitle"><b>Our Projects</b></h1>
      <div class="row no-gutters">
        <span
          class="col-md-3"
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
              <p>{{ item.description }}</p>
            </div>
            <a :href="item.link" target="_blank"
              ><button class="button1">Visit Website</button></a
            >
          </center>
        </span>
      </div>
      <button @click="redirect('our-projects')" class="button2">
        View More<i
          class="fa fa-arrow-right"
          style="margin-left: 10px; font-size: 16px"
        ></i>
      </button>
    </div>
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
          title: "Runway Express - Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - runway.png"),
          link: "http://runwayexpress.co.uk/#/",
        },
        {
          title: "Mezzo Hotel - Philippines",
          description: "Website Development",
          src: require("assets/img/project - mezzo.png"),
          link: "https://mezzohotel.com/",
        },
        {
          title: "Popout Poster - United Kingdom",
          description: "Website Development",
          src: require("assets/img/project - popoutposter.png"),
          link: "https://popoutposter.com/",
        },
        {
          title: "Meat The Sea - Hong Kong",
          description: "Website Development",
          src: require("assets/img/project - meetthesea.png"),
          link: "https://www.meatthesea.com/",
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
.button1 {
  background-color: white;
  border: none;
  color: #bdbdbd !important;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
  outline-color: white;
  padding: 8px 15px;
  margin-bottom: 15px;
}
.button2 {
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
.row {
  margin-top: 10vh;
}

.box {
  width: 90%;
  height: auto;
  border: 1px solid white;
  background-color: white;
  margin-top: 5%;
  margin-bottom: 3%;
}
.entitle {
  text-align: center;
  font-size: 50px;
  color: white;
}
.cw-banner {
  width: 100%;
  float: left;
  background: $primary;
}
.container {
  padding-top: 10vh;
  padding-bottom: 15vh;
  text-align: center;
}
.p1 {
  font-size: 17px;
  color: white;
}
p {
  font-size: 14px;
  color: #8f00b5;
}
img {
  width: 100%;
  height: auto;
  margin: auto;
  padding: 5%;
}
.description {
  height: 11vh;
  margin-bottom: 5%;
}
</style>
