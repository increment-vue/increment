<template>
  <div id="header">
    <div class="banner">
      <h1 class="entitle"><b>Our Projects</b></h1>
    </div>
    <br />
    <div class="cw-banner">
      <div class="row no-gutters">
        <div class="col-md-3" v-for="(item, i) in projects" :key="i" :index="i">
          <center>
            <div class="box">
              <img class="images" :src="item.src" />
            </div>
            <div class="description">
              <span>{{ item.title }}</span>
              <p>{{ item.description }}</p>
            </div>
            <a :href="item.link" v-if="item.withButton" target="_blank"
              ><button class="button1">Visit Website</button></a
            >
          </center>
        </div>
      </div>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<script>
import ROUTER from "src/router";
import Jquery from "jquery";
export default {
  data() {
    return {
      projects: [
        {
          title: "Runway Express - Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - runway.png"),
          link: "http://runwayexpress.co.uk/#/",
          withButton: true,
        },
        {
          title: "Mezzo Hotel - Philippines",
          description: "Website Development",
          src: require("assets/img/project - mezzo.png"),
          link: "https://mezzohotel.com/",
          withButton: true,
        },
        {
          title: "Popout Poster - United Kingdom",
          description: "Website Development",
          src: require("assets/img/project - popoutposter.png"),
          link: "https://popoutposter.com/",
          withButton: true,
        },
        {
          title: "Meat The Sea - Hong Kong",
          description: "Website Development",
          src: require("assets/img/project - meetthesea.png"),
          link: "https://www.meatthesea.com/",
          withButton: true,
        },
        {
          title: "Eat Study & Sip - United States",
          description: "Website Development",
          src: require("assets/img/project - eatstudyandsip.png"),
          link: "https://eatstudyandsip.com/",
          withButton: true,
        },
        {
          title: "SYNQT - United States",
          description: "Website and Mobile Development",
          src: require("assets/img/projects - synqt.png"),
          link: "http://wearesynqt.com/",
          withButton: true,
        },
        {
          title: "Investa Garden - United States",
          description: "Website Development",
          src: require("assets/img/projects - investa.png"),
          link: "https://investagarden.com/",
          withButton: true,
        },
        {
          title: "Pivot SMS - Canada",
          description: "Website Development",
          src: require("assets/img/project - pivot.jpg"),
          link: "",
          withButton: true,
        },
        {
          title: "Max Muscle - United States",
          description: "Website Development",
          src: require("assets/img/project - maxmuscle.jpg"),
          link: "https://maxmuscle.com/",
          withButton: true,
        },
        {
          title: "TalkFluentSpanish - Australia",
          description: "Website and Mobile Development",
          src: require("assets/img/project - talkfluent.png"),
          link: "https://talkfluentspanish.com/",
          withButton: true,
        },
        {
          title: "Aesha - Philippines",
          description: "Mobile Development",
          src: require("assets/img/project - aesha.png"),
          withButton: false,
        },
        {
          title: "AgriCord - Australia",
          description: "Website and Mobile Development",
          src: require("assets/img/project - agricord.png"),
          link: "http://traceag.com.au/#/",
          withButton: true,
        },
        {
          title: "AgriSend - Australia",
          description: "Mobile Development",
          src: require("assets/img/project - agrisend.png"),
          withButton: false,
        },
        {
          title: "PayHiram - Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - payhiram.png"),
          link: "https://payhiram.ph/",
          withButton: true,
        },
        {
          title: "BirdsEye - Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - birdsEye.png"),
          link: "https://birds-eye.org/",
          withButton: true,
        },
        {
          title: "Zeta Mariani - Gibraltar",
          description: "Website Development",
          src: require("assets/img/project - zetamariani.png"),
          link: "http://zetamariani.com/",
          withButton: true,
        },
        {
          title: "DBSN Group - Philippines",
          description: "Website Development",
          src: require("assets/img/project - dbsn.png"),
          link: "http://dbsngroup.com/",
          withButton: true,
        },
      ],
    };
  },
  mounted() {
    this.scrollTop();
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    openWindow(url) {
      window.open(url, "_BLANK");
    },
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery("#header").offset().top,
        },
        500
      );
    },
    scrollTop(){
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../assets/img/ourprojectbg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  height: 60vh;
  width: 100%;
  text-align: center;
  color: white;
  padding: 30vh 0;
}
.entitle {
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}

@media only screen and (max-width: 600px) {
  .entitle {
    font-size: 40px;
    font-weight: 800;
    padding-right: 10%;
    padding-left: 10%;
  }
}
.cw-banner {
  width: 100%;
  padding: 15%;
  margin-top: -10%;
}
img {
  width: 100%;
  height: 600px;
}
.button1 {
  background-color: $secondary;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 2%;
  outline-color: white;
  box-shadow: 0px 5px 5px rgba(0, 184, 159, 0.25);
  padding: 10px 20px;
  text-align: center;
}
.box {
  width: 90%;
  height: auto;
  border: 1px solid #00b89f;
  background-color: white;
  margin-bottom: 5%;
  margin-top: 30%;
}
.description {
  height: 9vh;
  margin-bottom: 5%;
}
span {
  font-size: 15px;
  color: black;
  font-weight: 600;
}
p {
  font-size: 13px;
  color: #8f00b5;
}
.images {
  width: 100%;
  height: auto;
  margin: auto;
  padding: 5%;
}
.return-to-top {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $primary;
  color: $white;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 62px;
  text-align: center;
}

.fa-angle-up {
  color: $white !important;
}
.return-to-top:hover {
  cursor: pointer;
  color: $primary;
}
</style>

