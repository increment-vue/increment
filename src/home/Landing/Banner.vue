<template>
  <div class="body" id="banner">
    <div class="meridian"></div>
    <div class="banner-content">
      <h1>OUR EXPERTISE & TECHNOLOGY. YOUR BUSINESS’ SUCCESS</h1>
      <h4>
        Take your business to the next level with our expert web and mobile development services, as well as IT department outsourcing  to help you stay ahead of the competition.
      </h4>
      <roundBtn
        :text="'Contact Us'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon ="'fa fa-angle-right'"
        :target="'_blank'"
        :route="'https://calendly.com/incrementtech2020/services-offered'"
        :styles="{
          backgroundColor: colors.white,
          color: colors.green,
          borderColor: colors.green,
        }"
        :hoverStyles="{
          backgroundColor: colors.success,
          color: colors.white,
          borderColor: colors.white,
          cursor: 'pointer'
        }"
      />
    </div>
    <div class="white-box"></div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.meridian {
  display: block;
  width: 40%;
  height: 100vh;
  float: left;
  background-image: url("../../assets/img/Banner-Meridian.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.banner-content {
  width: 60%;
  height: 100vh;
  float: left;
  padding-left: 5%;
  padding-right: 5%;
  background-image: linear-gradient(
      228.21deg,
      rgba(143, 0, 181, 0.9) -0.03%,
      rgba(0, 184, 159, 0.93) 100%
    ),
    url("../../assets/img/gif-banner.gif"),
    url("../../assets/img/Increment_office.jpeg");
  background-size: cover, 60vh, cover;
  background-position: center, right, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  padding-top: 45vh;
  padding-bottom: 30vh;
}

.white-box {
  display: block;
  background-color: $white;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  top: 93vh;
  height: 7vh;
  width: 90%;
}

h1 {
  color: $white;
}

h4 {
  color: $white;
  padding-right: 20%;
  padding-top: 2vh;
  padding-bottom: 3vh;
}

@media screen and (max-width: 992px) {
  .meridian,
  .white-box {
    display: none !important;
  }

  .banner-content {
    width: 100% !important;
    text-align: center !important;
    padding-top: 35vh !important;
    background-image: linear-gradient(
        228.21deg,
        rgba(143, 0, 181, 0.9) -0.03%,
        rgba(0, 184, 159, 0.93) 100%
      ),
      url("../../assets/img/gif-banner.gif"),
      url("../../assets/img/Increment_office.jpeg");
    background-size: cover, 50vh, cover;
    background-position: center, center top, center;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  h4 {
    padding-right: 0% !important;
  }
}
</style>
<script>
import roundBtn from "src/home/generic/roundBtn.vue";
import COLORS from "src/assets/style/colors.js";
export default {
  components: {
    roundBtn,
  },
  data() {
    return {
      colors: COLORS,
    };
  },
};
</script>