<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h1 class="title">What They Say About Us!</h1>
      <p class="pText">Our clients satisfactions expresses their testimonies</p>
      <div class="row no-gutters">
        <span class="col-md-6" v-for="(item, index) in list" :key="index">
          <center class="single-card">
            <h5 class="qoute">{{ item.quote }}</h5>
            <h5 class="name text-white">
              <b class="name">{{ item.name }}</b>
            </h5>
            <p>{{ item.position }}</p>
            <p>
              <b>{{ item.country }}</b>
            </p>
          </center>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: $primary;
  min-height: 70vh;
  float: left;
  width: 100%;
  background: linear-gradient(252deg, #8f00b5 0%, #00b89f 100%);
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
  color: $secondary;
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
.pText {
  margin-top: 3%;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.bottom svg{
  display: block;
  margin-top: -340px;;
}
</style>
<script>
export default {
  data() {
    return {
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