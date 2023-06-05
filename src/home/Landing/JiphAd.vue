<template>
    <div class="body">
      <div class="ad-container">
        <div class="content-holder">
          <h2>
            <b>Jiph</b>
          </h2>
          <br>
          <p>
            Jiph is a cutting-edge mobile remittance platform that aims to transform the way Filipinos send money from the US to the Philippines. By leveraging technology, Jiph provides an innovative and cost-effective solution, revolutionizing the traditional remittance experience.
          </p>
          <p>
            Say goodbye to high remittance fees and complicated processes. With Jiph, Filipinos can enjoy a faster, more affordable, and incredibly convenient alternative to conventional remittance channels. Our platform streamlines the entire process, ensuring that your hard-earned money reaches your loved ones in the Philippines swiftly and securely.
          </p>
          <p>
            Experience the future of remittance with Jiph and discover a truly promising solution to the challenges faced by Filipinos when it comes to sending money back home. Join us in revolutionizing the remittance landscape in the Filipino market.
          </p>
          <!-- <div class="app-icons" style="margin-top: 25px">
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
          </div> -->
        </div>
        <div class="img-holder">
          <img :src="require('assets/img/Jiph_Ad.png')" />
        </div>
        
      </div>
    </div>
  </template>
  <style scoped lang="scss">
  @import "~assets/style/colors.scss";
  .body {
    color: white !important;
    width: 100%;
    min-height: 60vh;
    overflow-y: hidden;
    margin-top: 20vh;
    margin-bottom: 20vh;
    float: left;
    transform: skewY(-11deg);
    background-color: #5e17eb;
  }
  .ad-container {
    width: 80%;
    float: left;
    min-height: 50px;
    margin-left: 10%;
    margin-right: 10%;
    overflow-y: hidden;
    transform: skewY(11deg);
    margin-top: 20vh;
    margin-bottom: 20vh;
  }
  
  .img-holder {
    width: 55%;
    float: left;
  }
  
  h3 {
    color: white !important;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  .content-holder {
    width: 45%;
    float: left;
    padding-left: 3%;
    text-align: justify;
  }
  
  .app-icons img {
    height: 50px;
    width: auto;
    cursor: pointer;
    margin-right: 2%;
    margin-bottom: 5px !important;
  }
  
  @media only screen and (max-width: 992px) {
    .ad-container {
      text-align: center !important;
      width: 90% !important;
      margin-left: 5% !important;
      margin-bottom: 5% !important;
    }
  
    .img-holder,
    .content-holder {
      width: 100% !important;
      margin: unset;
      padding: unset;
      text-align: center !important;
    }
    .app-icons {
      width: 90%;
      margin: unset;
      margin-left: 5%;
      margin-bottom: 5% !important;
    }
  
    .app-icons img {
      height: 30px;
      width: auto;
      cursor: pointer;
      margin-left: 0%;
      margin-bottom: 5px !important;
    }
  }
  </style>
  
  <script>
  export default {
    methods: {
      externalLink(url) {
        window.open(url, "_blank");
      },
    },
  };
  </script>