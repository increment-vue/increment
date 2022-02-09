<template>
  <div>
    <div class="banner" id="testimonials">
      <div class="container">
        <h2>WHAT THEY SAY ABOUT US!</h2>
        <p>Our clients satisfactions expresses their testimonies</p>
        <div class="row no-gutters">
          <span class="col-sm" v-for="(item, index) in list" :key="index">
            <center class="single-card">
              <font-awesome-icon :icon="left" class="font-awesome-icon" />
              <h4 class="qoute">{{ item.quote }}</h4>
              <h4 class="name">
                <b class="name">{{ item.name }}</b>
              </h4>
              <p class="position">
                {{ item.position }}
                <br />
                <b>{{ item.country }}</b>
              </p>
            </center>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  float: left;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(143, 0, 181, 0.99) 0%,
    $secondary 100%
  );
  padding: 80px 0 80px 0;
}
.title {
  font-weight: 800;
  font-size: 50px;
}

.font-awesome-icon {
  font-size: 24px;
  color: $success;
  margin-bottom: 10px;
}
.row {
  margin-top: 100px;
  text-align: center;
}
.qoute {
  font-style: italic;
  font-weight: normal;
}
.name {
  color: $black;
  margin-top: 50px;
}

.single-card {
  border-bottom: 4px solid white;
  width: 96%;
  padding: 40px;
  margin-left: 4%;
  margin-right: 4%;
  height: auto;
  border-radius: 10px;
}
.container {
  text-align: center;
  color: white;
  padding-top: 10vh;
  padding-bottom: 10vh;
}

.position {
  color: $success !important;
  font-size: 13px !important;
}
@media only screen and (max-width: 991px) {
  .single-card {
    margin-top: 20px !important;
  }
  .row {
    margin-top: 50px;
  }

}
</style>
<script>
import ColorsJS from "src/assets/style/colors.js";
import {
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      left: faQuoteLeft,
      style: {
        color: ColorsJS.white,
      },
      curveStyle: ColorsJS.purple,
      list: [
        {
          quote:
            "They are amazing. They helped me and developed my audio based languages translation website.",
          name: "JEREMY REID",
          position: "Owner, Takfluent",
          country: "AUSTRALIA",
        },
        {
          quote:
            "Kennette took the time to understand the tasks at hand and diligently put in the work. He has a team to support him which was helpful when the workload required. He always made himself available for consultations which was much appreciated.",
          name: "PHILIP Z.",
          position: "React Native App Client, from Upwork",
          country: "PHILIPPINES",
        },
        {
          quote:
            "Increment has been a great help in optimizing my company’s business processes. The team is very responsive and dynamic. Kudos!",
          name: "SHANNEN TAN",
          position: "President & CEO, Mezzo Hotel",
          country: "PHILIPPINES",
        },
      ],
    };
  },
};
</script>