<template>
  <div class="banner" id="who-we-are">
    <div class="section-container">
      <h3>
        Send and receive money in a new and convenient way without the hassle...
      </h3>
      <h2><b>DO MORE WITH PAYHIRAM!</b></h2>
      <img :src="require('assets/img/ph-banner.png')" />
      <span>
        A peer to peer financial processing application which allow you to send
        money and receives multiple options in terms of charges from different
        partners in the selected location. <br /><br />We provide the following
        services: money transfer, cash transfer or pera padala, local and
        international remittance, withdrawals, payments and more.
        <br /><br />Download the App and Register Today!
        <div class="app-icons" style="margin-top: 25px">
          <img
            class="app-icon"
            :src="require('assets/img/playstoreblack.png')"
            @click="
              externalLink(
                'https://play.google.com/store/apps/details?id=com.payhiram'
              )
            "
          />
          <img
            class="app-icon"
            :src="require('assets/img/appstoreblack.png')"
            @click="
              externalLink(
                'https://apps.apple.com/us/app/payhiram/id1532365205'
              )
            "
          />
          <img
            class="app-icon"
            :src="require('assets/img/appgallery.png')"
            @click="
              externalLink('https://appgallery.huawei.com/app/C104819261')
            "
          />
        </div>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  width: 100%;
  float: left;
  background-color: $white;
  margin-bottom: 15vh !important;
  margin-top: 5vh !important;
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
  margin-bottom: 70px;
}

p {
  text-align: justify;
}

img {
  width: 60%;
  float: left;
  height: auto;
}

span {
  width: 40%;
  padding-top: 10%;
  padding-left: 5%;
  text-align: left;
  float: left;
}

.app-icons img {
  height: 50px;
  width: auto;
  cursor: pointer;
  margin-right: 2%;
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
  methods: {
    externalLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>