<template>
  <div>
    <div class="curve">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8f00b4"
          fill-opacity="1"
          d="M0 114.359H1919V72.1293C1919 72.1293 1818.31 6.27769e-05 1627.8 0C1437.3 -6.27764e-05 1257.73 110.599 1072.05 110.599C999.157 110.599 927.457 94.1749 858.089 72.9421C765.056 44.4665 654.178 0 557.849 0C461.521 0 409.984 67.5828 308.769 72.9421C185.042 79.4935 0 0 0 0V114.359Z"
        ></path>
      </svg>
    </div>
    <div class="banner" id="testimonials">
      <div>
        <SectionHeader
          :title="'What They Say About Us'"
          :style="style"
          :description="'For the past years and until now, Increment Technologies Inc. has been serving clients around the world.'"
        ></SectionHeader>
      </div>
      <div class="container">
        <div class="row no-gutters">
          <span class="col-md-6" v-for="(item, index) in list" :key="index">
            <center class="single-card">
              <h4 class="qoute">{{ item.quote }}</h4>
              <h4 class="name text-white">
                <b class="name">{{ item.name }}</b>
              </h4>
              <p>{{ item.position }}</p>
              <p>
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
  min-height: 70vh;
  float: left;
  width: 100%;
  background: linear-gradient(180deg, rgba(143, 0, 181, 0.99) 0%, #00b89f 100%);
  margin-top: -14.5%;
}

.title {
  font-weight: 800;
  font-size: 50px;
}

.row {
  margin-top: 8vh;
  text-align: center;
}
.qoute {
  font-weight: 700;
  font-style: italic;
  height: 150px;
}

.name {
  color: $primary;
}

.single-card {
  border: 5px solid white;
  width: 96%;
  padding: 40px;
  margin-left: 4%;
  margin-right: 4%;
  height: 320px;
  border-radius: 10px;
}
.container {
  padding-top: 10vh;
  padding-bottom: 10vh;
  text-align: center;
  color: white;
}
.curve {
  width: 100%;
  float: left;
  background-color: $white;
}
.pText {
  margin-top: 3%;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.bottom svg {
  display: block;
  margin-top: -340px;
}
</style>
<script>
import SectionHeader from "src/home/generic/sectionHeader.vue";
import ColorsJS from "src/assets/style/colors.js";
export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      style: {
        color: ColorsJS.white,
      },
      list: [
        {
          quote:
            "“They are amazing. They helped me and developed my audio based languages translation website.”",
          name: "JEREMY REID",
          position: "Owner, Takfluent",
          country: "AUSTRALIA",
        },
        {
          quote:
            "“Increment has been a great help in optimizing my company’s business processes. The team is very responsive and dynamic. Kudos!”",
          name: "SHANNEN TAN",
          position: "President & CEO, Mezzo Hotel",
          country: "PHILIPPINES",
        },
      ],
    };
  },
};
</script>