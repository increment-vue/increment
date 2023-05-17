<template>
    <div class="body">
      <div class="ad-container">
        <div class="content-holder">
          <h2>
            <b>Jiph</b>
          </h2>
          <br>
          <p>
            We, at Increment Technologies Inc., are very excited to announce our
            newest product - PayHiram. It is the first ever decentralized
            financial technology mobile application in the Philippines that offers
            door to door transactions.
          </p>
          <br />
          <p>
            As part of Increment’s goal as an innovator, PayHiram aims to provide
            its prospective clients and partners with accessible ways of financial
            transfers, having wider cash outlets and delivery options. It offers
            four financial transfers: Pera Padala, Cashin, Withdrawals, and Accept
            Payments. With PayHiram, Users have the liberty to choose which
            partner’s proposal to accept while partners can earn up to 80% of the
            transaction fees charged to the users. <br /><br />Download the App
            and Register Today!
          </p>
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
        </div>
        <div class="img-holder">
          <img :src="require('assets/img/adPH2.png')" />
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
    background-image: linear-gradient(
      90deg,
      $gradientPrimary,
      $gradientSecondary
    );
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