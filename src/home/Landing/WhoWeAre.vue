<template>
  <div class="banner" id="who-we-are">
    <div class="section-container">
      <h2>WHO WE ARE</h2>
      <div style="text-align: left">
        <!-- first component -->
        <div class="row">
          <div class="div-gif1">
            <img :src="require('assets/gif/who-we-are-top.gif')" />
          </div>
          <div class="content1">
            <h3>INTRODUCTION</h3>
            <hr />
            <p>
              Founded in 2017, Increment Technologies set itself out to be a
              leading Website and Mobile Development firm in Cebu. We develop
              high-quality digital projects, from landing pages to full-blown
              e-commerce.
            </p>
            <p>
              In pursuit of quality, we strategically develop every project to
              set out distinctiveness in every client’s needs. Our clients are
              mostly from outside the country, but since we saw that there's a
              huge potential from the domestic market, we are now providing
              locals with our services and increasing our visibility.
            </p>
          </div>
        </div>
        <!-- second component -->
        <div class="row">
          <div class="content2">
            <h3>OUR VISION</h3>
            <hr />
            <p>
              Increment Technologies visions to help businesses succeed with
              their goals by providing innovative ideas and best tools that
              exceeds standards. We strive to create opportunities for
              businesses to excel in their industries.
            </p>
            <br />
            <h3>OUR MISSION</h3>
            <hr />
            <p>
              Our mission is to create high quality and secured websites,
              website applications, and mobile applications from small to
              corporate level businesses. Our goal is to develop sustainable
              strategies aligning to the modern array of services. We take pride
              in creating solutions to your needs.
            </p>
          </div>
          <div class="div-gif2">
            <img :src="require('assets/gif/who-we-are-bottom.gif')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.row {
  margin-top: 5vh;
}

.banner {
  width: 100%;
  float: left;
  background-color: $white;
  margin-bottom: 15vh !important;
  margin-top: 15vh !important;
  text-align: center;
}

.section-container {
  margin-right: 10%;
  margin-left: 10%;
  width: 80%;
}

h2 {
  text-align: center;
  color: $primary;
}

p {
  text-align: justify;
}

.div-gif1 {
  width: 35%;
  float: left;
  text-align: left;
}

.div-gif2 {
  width: 35%;
  float: left;
  text-align: left;
}

.div-gif1 img {
  display: block;
  width: 100%;
  height: auto;
  margin-top: -10vh;
}

.div-gif2 img {
  width: 100%;
  height: auto;
  display: block;
}

.content1 {
  width: 65%;
  float: left;
  text-align: left;
  padding-left: 10vh;
}

.content2 {
  width: 65%;
  float: left;
  text-align: left;
  padding-right: 10vh;
}

hr {
  background-color: $secondary !important;
  width: 15%;
  height: 1px;
  margin: 0;
  margin-left: 2px;
  margin-top: 5px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 1199px) {
  .div-gif1 img {
    margin: unset !important;
  }

  .div-gif2 {
    margin-top: 10vh;
  }
}

@media only screen and (max-width: 992px) {
  .div-gif1,
  .div-gif2 {
    display: none !important;
  }

  .content1,
  .content2 {
    width: 100% !important;
    padding: unset;
  }

  .content1 h3,
  .content1 p,
  .content2 h3,
  .content2 p {
    text-align: center !important;
  }

  hr {
    margin-left: 44% !important;
    width: 12% !important;
  }

  .section-container {
    padding-bottom: 10vh !important;
  }
}
</style>
<script>
import COLORS from "src/assets/style/colors.js";
export default {
  data() {
    return {
      colors: COLORS,
    };
  },
};
</script>