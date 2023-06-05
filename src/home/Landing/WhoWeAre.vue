<template>
  <div class="banner" id="who-we-are">
    <div class="section-container">
      <h2 class="incrementPurple">WHO WE ARE</h2>
      <div style="text-align: left">
        <!-- first component -->
        <div class="row">
          <div class="div-gif1">
            <img :src="require('assets/gif/who-we-are-top.gif')" />
          </div>
          <div class="content1">
            <h3 class="incrementPurple">INTRODUCTION</h3>
            <hr />
            <p>
              Welcome to Increment Technologies Inc., a distinguished digital solutions provider that specializes in website and mobile development, along with IT department outsourcing services. With our expertise and commitment to excellence, we deliver innovative solutions tailored to meet the unique needs of our clients. Whether you're looking to enhance your online presence, streamline operations, or outsource your IT department, we are here to empower your business and drive your success in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
        <!-- second component -->
        <div class="row">
          <div class="content2">
            <h3 class="incrementPurple">OUR VISION</h3>
            <hr />
            <p>
              Enabling Businesses Perform Better through Technology
            </p>
            <br />
            <h3 class="incrementPurple">OUR MISSION</h3>
            <hr />
            <p>
              We provide IT Department Outsourcing & Software Development that enhance Businesses day to day operation.
              We build & create innovate solutions that promote a better society.
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
.incrementPurple{
  color: $incrementPurple
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
  background-color: $gray !important;
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
  .banner {
    margin-bottom: 0vh !important;
  }
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