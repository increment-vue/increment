<template>
  <div>
    <BreadCrumbs :title="'OUR TEAM'" />
    <div class="container">
      <p>
        For the past years and until now, Increment Technologies Inc. has been
        providing digital solutions from clients around the world. Our amazing
        team are working together and draws on different industry experience and
        skills, thus keeping our team open to communications, to create amazing
        outcomes for our client's satisfactions. All of these efforts would have not been made without this following people:
      </p>
      <div class="team-container">
        <h4>INCORPORATORS</h4>
        <span
          class="single-card incorporators"
          v-for="(item, index) in incorporators"
          :key="index"
        >
          <img :src="item.src" />
          <p class="name">{{ item.name }}</p>
          <p class="surname">{{ item.surname }}</p>
          <p class="position">{{ item.position }}</p>
        </span>
      </div>
      <div class="team-container partners">
        <h4>INTERNATIONAL PARTNERS</h4>
        <span
          class="single-card"
          v-for="(item, index) in partners"
          :key="index"
        >
          <img :src="item.src" />
          <p class="name">{{ item.name }}</p>
          <p class="surname">{{ item.surname }}</p>
          <p class="position">{{ item.position }}</p>
        </span>
      </div>
      <div class="team-container1">
        <h4>FINANCE, OPERATIONS, MARKETING & SALES TEAM</h4>
        <span
          class="single-card"
          v-for="(item, index) in management"
          :key="index"
        >
          <img :src="item.src" />
          <p class="name">{{ item.name }}</p>
          <p class="surname">{{ item.surname }}</p>
          <p class="position">{{ item.position }}</p>
        </span>
      </div>
      <div class="team-container1">
        <h4>TECHNOLOGY TEAM</h4>
        <span
          class="single-card"
          v-for="(item, index) in developers"
          :key="index"
        >
          <img :src="item.src" />
          <p class="name">{{ item.name }}</p>
          <p class="surname">{{ item.surname }}</p>
          <p class="position">{{ item.position }}</p>
        </span>
      </div>
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
  padding-bottom: 40vh;
}

.holder {
  margin-bottom: 15vh !important;
}

p {
  font-size: 16px !important;
}

h4 {
  color: black;
  text-align: center;
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 50px;
}

.team-container {
  width: 100%;
  text-align: center;
  min-height: 40vh;
  margin-top: 100px;
}

.team-container1 {
  width: 100%;
  text-align: center;
  min-height: 80vh;
  margin-top: 100px;
}

.single-card img {
  width: 100%;
  min-height: auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.single-card {
  width: 16%;
  margin: 2%;
  float: left;
  height: 300px;
}

.name {
  margin-top: 20px;
  font-weight: bold;
  color: $primary;
  margin-bottom: -5px;
  font-size: 13px !important;
}

.surname {
  font-weight: bold;
  color: $secondary;
  margin-bottom: -5px;
  font-size: 13px !important;
}

.position {
  color: black;
  font-size: 10px !important;
}

@media screen and (max-width: 550px) {
  .single-card {
    width: 29.33% !important;
  }

  .partners {
    margin-top: 400px !important;
    padding-bottom: 250px !important;
  }
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
export default {
  components: {
    BreadCrumbs,
  },
  data() {
    return {
      incorporators: [
        {
          src: require("assets/img/team/kenn.jpg"),
          name: "KENNETTE",
          surname: "CANALES",
          position: "President & Chief Executive Officer",
        },
        {
          src: require("assets/img/team/shann.jpg"),
          name: "SHANNEN",
          surname: "TAN",
          position: "Treasurer",
        },
        {
          src: require("assets/img/team/angie.jpg"),
          name: "ANGIELITE",
          surname: "COMENDADOR",
          position: "Corporate Secretary",
        },
        {
          src: require("assets/img/team/rey.jpg"),
          name: "JOHN REY",
          surname: "CANALES",
          position: "Incorporator",
        },
        {
          src: require("assets/img/team/philip.jpg"),
          name: "PHILIP JOHAINNES",
          surname: "SALISE",
          position: "Incorporator",
        },
      ],
      partners: [
        {
          src: require("assets/img/team/campa.jpg"),
          name: "PAUL",
          surname: "CAMPA",
          position: "Corporate Partner (USA)",
        },
        {
          src: require("assets/img/team/gli.jpg"),
          name: "GLICERIA",
          surname: "DOROG",
          position: "Corporate Partner (Thailand)",
        },
      ],
      management: [
        {
          src: require("assets/img/team/jonmar.jpg"),
          name: "JONMAR",
          surname: "PEPITO",
          position: "Finance Officer",
        },
        {
          src: require("assets/img/team/kristine.jpg"),
          name: "KRISTINE EZABELLE",
          surname: "LASTIMOSA",
          position:
            "Business Development Officer & PayHiram: Chief Operating Officer",
        },
        {
          src: require("assets/img/team/Flordeles.jpg"),
          name: "FLORDELES",
          surname: "GACANG",
          position: "Sales Assistant",
        },
        {
          src: require("assets/img/team/Angelica.jpg"),
          name: "MARIA ANGELICA",
          surname: "ZARAGOZA",
          position: "Social Media Moderator/ Designer",
        },
        {
          src: require("assets/img/team/Beatriz.jpg"),
          name: "CARLA BEATRIZ",
          surname: "VENTURA",
          position: "Graphic Designer",
        },
        {
          src: require("assets/img/team/Gade.jpg"),
          name: "GADE",
          surname: "DENAGA",
          position: "Sales Representative",
        },
        {
          src: require("assets/img/team/Kriza.jpg"),
          name: "KRIZA DANE",
          surname: "CANALES",
          position: "Sales Representative",
        },
        {
          src: require("assets/img/team/Christian.jpg"),
          name: "CHRISTIAN",
          surname: "SEACHON",
          position: "Sales Representative",
        },
      ],
      developers: [
        {
          src: require("assets/img/team/Lalaine.jpg"),
          name: "LALAINE",
          surname: "GARRIDO",
          position: "Development: Chief Operating Officer",
        },
        {
          src: require("assets/img/team/Patrick.jpg"),
          name: "JOHN PATRICK",
          surname: "CABIA-AN",
          position: "Chief Technical Officer",
        },
        {
          src: require("assets/img/team/Cherry.jpg"),
          name: "CHERRY MAE",
          surname: "HERRERA",
          position: "PayHiram Project Lead",
        },
        {
          src: require("assets/img/team/Rica.jpg"),
          name: "RICA CHRISTINE",
          surname: "DEBUAYAN",
          position: "Software Design Head",
        },
        {
          src: require("assets/img/team/Ivy.jpg"),
          name: "IVY JOY",
          surname: "DEVILLERES",
          position: "QUALITY ASSURANCE MANAGER",
        },
        {
          src: require("assets/img/team/Kyle.jpg"),
          name: "KYLE MATTHEW LAURANCE",
          surname: "BURCE",
          position: "Software Developer",
        },
        {
          src: require("assets/img/team/Paul.jpg"),
          name: "PAUL JOSIAH",
          surname: "TAMALA",
          position: "Software Developer (Intern)",
        },
        {
          src: require("assets/img/team/Ron.jpg"),
          name: "RON DAVE FREDRICK",
          surname: "TALLEDO",
          position: "Software Developer (Intern)",
        },
      ],
    };
  },
  methods: {},
};
</script>

