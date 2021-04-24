<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h1 class="title">What They Say About Us!</h1>
      <div class="row no-gutters">
        <span class="col-md-6" v-for="(item, index) in list" :key="index">
          <center class="single-card">
            <h5 class="qoute">{{ item.quote }}</h5>
            <h5 class="name">
              <b>{{ item.name }}</b>
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
}

.title {
  font-weight: 700;
  font-size: 50px;
}

.row{
  margin-top: 10vh;
  text-align: center;
}
.qoute {
  font-weight: 700;
  font-style: italic;
  height: 150px;
}

.name {
  color: #8F00B5;
}

.single-card {
  border: 5px solid white;
  padding: 10px;
  padding-top: 30px;
  margin: 20px;
  height: 300px;
  border-radius: 10px;
}
.container {
  padding-top: 10vh;
  padding-bottom: 10vh;
  text-align: center;
  color: white;
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