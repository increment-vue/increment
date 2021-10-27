<template>
  <div>
    <div class="banner" id="testimonials">
      <div>
        <SectionHeader
          :title="'WHAT THEY SAY ABOUT US'"
          :style="style"
          :description="'Our clients satisfactions expresses their testimonies.'"
        ></SectionHeader>
      </div>
      <div class="container">
        <div class="row no-gutters">
          <span class="col-sm" v-for="(item, index) in list" :key="index">
            <center class="single-card">
              <h4 class="qoute">{{ item.quote }}</h4>
              <h4 class="name">
                <b class="name">{{ item.name }}</b>
              </h4>
              <p>
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
.row {
  margin-top: 100px;
  text-align: center;
}
.qoute {
  font-style: italic;
}
.name {
  color: $primary;
  margin-top: 100px;
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
  text-align: center;
  color: white;
}
@media only screen and (max-width: 992px) {
  .single-card {
    margin-top: 20px;
  }
  .row{
    margin-top: 50px;
  }
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
      curveStyle: ColorsJS.purple,
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