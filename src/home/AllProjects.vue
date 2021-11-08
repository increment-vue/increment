<template>
  <div>
    <div class="banner" id="header">
      <breadCrumbs :title="'OUR PROJECTS'" />
    </div>
    <div class="container">
      <div>
        <p id="p1">
          For the past years and until now, Increment Technologies Inc. has been
          providing digital solutions from clients around the world. What makes
          us motivated are return clients who entrusted us to handle their
          projects for additional development and maintenance. In addition,
          Increment Technologies Inc. has also affiliated with other software
          companies entrusting their software development projects for us to
          improve and maintain. The following shows the projects that our
          company have handled:
        </p>
        <div class="bar">
          <navigationBar :navbar="navbar" />
        </div>
        <div>
          <singleCard :projects="projects" />
        </div>
      </div>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.hide {
  visibility: hidden;
}
.bar {
  width: 100%;
  display: flex;
  justify-content: center;
}
.banner {
  height: 35vh;
  width: 100%;
  float: left;
  text-align: center;
  color: white;
}

.title {
  font-size: 50px;
  font-weight: 800;
  padding-right: 10%;
  padding-left: 10%;
}

.container {
  padding-top: 20vh;
  padding-bottom: 20vh;
  color: black;
}

#p1 {
  text-align: justify;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 16px;
}

p {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
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
  float: left;
}

.fa-angle-up {
  color: $white !important;
}
.return-to-top:hover {
  cursor: pointer;
  color: $primary;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 40px;
    font-weight: 800;
    padding-right: 10%;
    padding-left: 10%;
  }
}
</style>
<script>
import ROUTER from "src/router";
import Jquery from "jquery";
import breadCrumbs from "src/home/generic/breadCrumbs.vue";
import singleCard from "src/home/generic/singleCard.vue";
import navigationBar from "src/home/generic/navigationBar.vue";
export default {
  components: {
    breadCrumbs,
    singleCard,
    navigationBar,
  },
  data() {
    return {
      navbar: [
        {
          status: "ALL",
        },
        {
          status: "ONGOING",
        },
        {
          status: "COMPLETED",
        },
        {
          status: "QUICK FIX",
        },
        // {
        //   status: "WEB",
        // },
        // {
        //   status: "MOBILE",
        // },
        // {
        //   status: "DESIGN",
        // },
        // {
        //   status: "ADMIN",
        // },
        // {
        //   status: "LOWER LEVEL",
        // },
      ],
      projects: [
        {
          title: "Aesha",
          location: "Philippines",
          description: "Mobile Development",
          src: require("assets/img/project - aesha.png"),
          link: "#",
          withButton: false,
          status: "completed",
        },
        {
          title: "AgriCord",
          location: "Australia",
          description: "Website and Mobile Development",
          src: require("assets/img/project - agricord.png"),
          link: "http://traceag.com.au/#/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "AgriSend",
          location: "Australia",
          description: "Mobile Development",
          src: require("assets/img/project - agrisend.png"),
          link: "https://play.google.com/store/apps/details?id=com.agrisend",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "AskThePros.com",
          location: "United States",
          description: "Website Development",
          src: require("assets/img/project - askthepros.png"),
          link: "https://askthepros.com/",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "BirdsEye",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - birdsEye.png"),
          link: "https://birds-eye.org/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Converge",
          location: "Philippines",
          description: "Mobile Development",
          src: require("assets/img/project - converge.png"),
          link: "https://play.google.com/store/apps/details?id=com.convergeict.android",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "COVIDPass",
          location: "Myanmar",
          description: "Website Development",
          src: require("assets/img/project - covidpass.png"),
          link: "https://covidpass.id/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "DBSN Group",
          location: "Philippines",
          description: "Website Development",
          src: require("assets/img/project - dbsn.png"),
          link: "http://dbsngroup.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Duke and Duchess Jewelers",
          location: "United States",
          description: "Website Development",
          src: require("assets/img/project - duke and duchess jewelers.png"),
          link: "https://dukeduchessjewelers.com/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "Eat Study & Sip",
          location: "United States",
          description: "Website Development",
          src: require("assets/img/project - eatstudyandsip.png"),
          link: "https://eatstudyandsip.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Glad Tithings",
          location: "United States",
          description: "Website and Mobile Development",
          src: require("assets/img/project - glad tithings.png"),
          link: "#",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "Investa Garden",
          location: "United States",
          description: "Website Development",
          src: require("assets/img/projects - investa.png"),
          link: "https://investagarden.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Kicktronics",
          location: "United States",
          description: "Mobile Development",
          src: require("assets/img/project - kicktronics.png"),
          link: "https://play.google.com/store/apps/details?id=com.kicktronics.kicktronics",
          withButton: false,
          status: "quickfix",
        },
        {
          title: "Liquichain",
          location: "France",
          description: "Mobile Development",
          src: require("assets/img/project - liquichain.png"),
          link: "#",
          withButton: false,
          status: "quickfix",
        },
        {
          title: "Max Muscle",
          location: "United States",
          description: "Website Development",
          src: require("assets/img/project - maxmuscle.jpg"),
          link: "https://maxmuscle.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Meat The Sea",
          location: "Hong Kong",
          description: "Website Development",
          src: require("assets/img/project - meetthesea.png"),
          link: "https://www.meatthesea.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Mezzo Hotel",
          location: "Philippines",
          description: "Website Development",
          src: require("assets/img/project - mezzo.png"),
          link: "https://mezzohotel.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Mezzo Hotel Booking",
          location: "Philippines",
          description: "Website Development",
          src: require("assets/img/project - mezzo.png"),
          link: "#",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "Mossy Digital Site",
          location: "Canada",
          description: "Website Development",
          src: require("assets/img/project - mossy digital sites.png"),
          link: "https://mossydigital.com/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "PayHiram",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - payhiram.png"),
          link: "https://payhiram.ph/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "Pivot SMS",
          location: "Canada",
          description: "Website Development",
          src: require("assets/img/project - pivot.jpg"),
          link: "https://pivotsms.co/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "Popout Poster",
          location: "United Kingdom",
          description: "Website Development",
          src: require("assets/img/project - popoutposter.png"),
          link: "https://popoutposter.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Runway Express",
          location: "Philippines",
          description: "Website and Mobile Development",
          src: require("assets/img/project - runway.png"),
          link: "http://runwayexpress.co.uk/#/",
          withButton: true,
          status: "completed",
        },
        {
          title: "SYNQT",
          location: "United States",
          description: "Website and Mobile Development",
          src: require("assets/img/projects - synqt.png"),
          link: "http://wearesynqt.com/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "TalkFluentSpanish",
          location: "Australia",
          description: "Website and Mobile Development",
          src: require("assets/img/project - talkfluent.png"),
          link: "https://talkfluentspanish.com/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "Trackr",
          location: "Australia",
          description: "Website Development",
          src: require("assets/img/project - agricord.png"),
          link: "http://traceag.com.au/#/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "Zeta Mariani",
          location: "Gibraltar",
          description: "Website Development",
          src: require("assets/img/project - zetamariani.png"),
          link: "http://zetamariani.com/",
          withButton: true,
          status: "completed",
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
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
