<template>
  <div>
    <BreadCrumbs :title="'OUR PROJECTS'" />
    <div class="container">
      <p>
        For the past years and until now, Increment Technologies Inc. has been
        providing digital solutions from clients around the world. What makes us
        motivated are return clients who entrusted us to handle their projects
        for additional development and maintenance. In addition, Increment
        Technologies Inc. has also affiliated with other software companies
        entrusting their software development projects for us to improve and
        maintain. The following shows the projects that our company have
        handled:
      </p>
      <Projects :height="'360'" :data="projects" />
      <!-- <NavBar :navbar="navbar" @status="retrieve" /> -->
      <!-- <Projects v-once v-if="setStatus === 'all'" :height="'360'" :data="projects" /> -->
      <!-- <Projects v-once v-if="setStatus === 'ongoing'" :height="'360'" :data="selectedProjects" />
      <Projects v-once v-if="setStatus === 'completed'" :height="'360'" :data="selectedProjects" />
      <Projects v-once v-if="setStatus === 'quickfix'" :height="'360'" :data="selectedProjects" /> -->
      <p class="note">Note: Project name with asterisk (*) are very private client or company whose project is confidential.</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container {
  text-align: justify;
  min-height: 100vh;
  background-color: $white;
  padding-top: 40vh;
}

.holder {
  margin-bottom: 5vh !important;
}

.note {
  margin-bottom: 15vh !important;
  font-style: italic;
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
import Projects from "src/home/generic/whiteCard.vue";
// import NavBar from "src/home/generic/navigationBar.vue";
export default {
  components: {
    BreadCrumbs,
    Projects,
  },
  data() {
    return {
      selectedProjects: [],
      setStatus: "all",
      navbar: [
        {
          name: "ALL",
          status: "all",
        },
        {
          name: "ONGOING",
          status: "ongoing",
        },
        {
          name: "COMPLETED",
          status: "completed",
        },
        {
          name: "QUICK FIX",
          status: "quickfix",
        },
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
          // AgriCord
          title: "A******d",
          location: "Australia",
          description: "Mobile Development",
          src: require("assets/img/logo.png"),
          link: "http://traceag.com.au/#/",
          withButton: false,
          status: "ongoing",
        },
        {
          // AgriSend
          title: "A******d",
          location: "Australia",
          description: "Mobile Development",
          src: require("assets/img/logo.png"),
          link: "https://play.google.com/store/apps/details?id=com.agrisend",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "AskThePros.com",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - askthepros.png"),
          link: "https://askthepros.com/",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "BirdsEye",
          location: "Philippines",
          description: "Web and Mobile Development",
          src: require("assets/img/project - birdsEye.png"),
          link: "https://birds-eye.org/",
          withButton: false,
          status: "completed",
        },
        {
          title: "Converge",
          location: "Philippines",
          description: "Mobile Development",
          src: require("assets/img/project - converge.png"),
          link: "https://play.google.com/store/apps/details?id=com.convergeict.android",
          withButton: false,
          status: "quickfix",
        },
        {
          title: "COVIDPass",
          location: "Myanmar",
          description: "Web Development",
          src: require("assets/img/project - covidpass.png"),
          link: "https://covidpass.id/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "DBSN Group",
          location: "Philippines",
          description: "Web Development",
          src: require("assets/img/project - dbsn.png"),
          link: "http://dbsngroup.com/",
          withButton: false,
          status: "completed",
        },
        {
          title: "Duke and Duchess Jewelers",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - duke and duchess jewelers.png"),
          link: "https://dukeduchessjewelers.com/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "Eat Study & Sip",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - eatstudyandsip.png"),
          link: "https://eatstudyandsip.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Glad Tithings",
          location: "United States",
          description: "Web and Mobile Development",
          src: require("assets/img/project - glad tithings.png"),
          link: "#",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "Good Terms - AI",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - goodterms.png"),
          link: "https://goodterms.ai/",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "Investa Garden",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - investa.png"),
          link: "https://investagarden.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "KeyHelpa",
          location: "Australia",
          description: "Web Development",
          src: require("assets/img/project - keyhelpa.png"),
          link: "#",
          withButton: false,
          status: "ongoing",
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
          title: "MadazMoney",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - madaz.png"),
          link: "https://www.madazmoney.com/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "Max Muscle",
          location: "United States",
          description: "Web Development",
          src: require("assets/img/project - maxmuscle.jpg"),
          link: "https://maxmuscle.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Meat The Sea",
          location: "Hong Kong",
          description: "Web Development",
          src: require("assets/img/project - meetthesea.png"),
          link: "https://www.meatthesea.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Mezzo Hotel",
          location: "Philippines",
          description: "Web Development",
          src: require("assets/img/project - mezzo.png"),
          link: "https://mezzohotel.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Mezzo Hotel Booking",
          location: "Philippines",
          description: "Web Development",
          src: require("assets/img/project - mezzo.png"),
          link: "#",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "Mossy Digital Site",
          location: "Canada",
          description: "Web Development",
          src: require("assets/img/project - mossy digital sites.png"),
          link: "https://mossydigital.com/",
          withButton: true,
          status: "quickfix",
        },
        {
          title: "PayHiram",
          location: "Philippines",
          description: "Web and Mobile Development",
          src: require("assets/img/project - payhiram.png"),
          link: "https://payhiram.ph/",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "Pivot SMS",
          location: "Canada",
          description: "Web Development",
          src: require("assets/img/project - pivot.jpg"),
          link: "https://pivotsms.co/",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "Popout Poster",
          location: "United Kingdom",
          description: "Web Development",
          src: require("assets/img/project - popoutposter.png"),
          link: "https://popoutposter.com/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Runway Express",
          location: "Philippines",
          description: "Web and Mobile Development",
          src: require("assets/img/project - runway.png"),
          link: "http://runwayexpress.co.uk/#/",
          withButton: false,
          status: "completed",
        },
        {
          title: "SYNQT",
          location: "United States",
          description: "Web and Mobile Development",
          src: require("assets/img/project - synqt.png"),
          link: "http://wearesynqt.com/",
          withButton: true,
          status: "ongoing",
        },
        {
          title: "TalkFluentSpanish",
          location: "Australia",
          description: "Web and Mobile Development",
          src: require("assets/img/project - talkfluent.png"),
          link: "https://talkfluentspanish.com/",
          withButton: true,
          status: "ongoing",
        },
        {
          // Tracker
          title: "T****r",
          location: "Australia",
          description: "Web Development",
          src: require("assets/img/logo.png"),
          link: "http://traceag.com.au/#/",
          withButton: false,
          status: "ongoing",
        },
        {
          title: "Weiss Real Estate",
          location: "Australia",
          description: "Web Development",
          src: require("assets/img/project - weiss.png"),
          link: "https://weissrealestate.com.au/",
          withButton: true,
          status: "completed",
        },
        {
          title: "Zeta Mariani",
          location: "Gibraltar",
          description: "Web Development",
          src: require("assets/img/project - zetamariani.png"),
          link: "http://zetamariani.com/",
          withButton: false,
          status: "completed",
        },
        {
          title: "Jiph",
          location: "Philippines",
          description: "Web Development",
          src: require("assets/img/JiphLogo.png"),
          link: "http://jiph.co/",
          withButton: false,
          status: "completed",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    retrieve(status) {
      this.setStatus = status;
      let newData = [];
      this.projects.forEach((element) => {
        if (element.status === status) {
          newData.push({
            title: element.title,
            location: element.location,
            description: element.description,
            src: element.src,
            link: element.link,
            withButton: element.withButton,
            status: element.status,
          });
        }
      });
      this.selectedProjects = newData;
    },
  },
};
</script>
