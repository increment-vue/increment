<template>
    <div class="container">
      <div class="header">
        <div class="title">
            <h3>Pricing</h3>
        </div>
        <div class="subtitle">
        </div>
    </div>
      <div class="cardContainer">
        <div class="card" v-for="(item, index) in prices" :key="index">
            <div class="pre">
                <p>Starts at</p>
            </div>
            <div class="price">{{ item.price }}</div>
            <div class="type">{{ item.type }}</div>
            <div class="subtype">{{ item.subtype }}</div>
            <div class="list">{{ item.list }}</div>
        </div>
      </div>
    </div>
  </template>
  
    <style scoped lang="scss">
  @import "~assets/style/colors.scss";
  .header{
    justify-content: center;
  }
  .indent{
    margin-left: 75%;
  }
  .title{
    margin: 5% 0% 5% 0%;
  }
  .imageSize{
    height: 350px;
    width: 500px;
  }
  .textContainer{
    width: 50%;
    text-align: justify;
  }
  .imageContainer{
    width: 50%;
  }
  .serviceContainer{
    display: flex;
    justify-content: center;
  }
  .cw-banner {
    padding-bottom: 15vh !important;
    padding-top: 15vh !important;
    float: left;
    width: 100%;
    padding-left: 10% !important;
    padding-right: 10% !important;
    background-color: #fff;
    // margin-top: -14.5%;
    padding: 50px 0 50px 0;
    text-align: center !important;
    color: black;
  }
  
  .card {
    width: 22%;
    height: 380px;
    margin: 1.5%;
    padding: 20px;
    border-radius: 15px;
    background-color: $gray;
  }
  
  .font-awesome-icon {
    margin-top: 30px;
    margin-bottom: 30px;
    color: $incrementPurple;
    font-size: 80px;
  }
  
  .subtitle {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: $primary;
  }
  
  img {
    margin-top: 1vh;
    width: 150px;
    height: 150px;
  }
  
  .row {
    text-align: center;
    margin-top: 70px;
  }
  
  @media only screen and (max-width: 1500px) {
    .card {
      width: 23% !important;
      margin: 1% !important;
      height: 400px !important;
    }
  }
  
  @media only screen and (max-width: 1300px) {
    .card {
      height: 420px !important;
    }
  }
  
  
  @media only screen and (max-width: 1230px){
    .card {
      height: 450px !important;
    }
  }
  
  @media only screen and (max-width: 1050px){
    .card {
      height: 380px !important;
      width: 45% !important;
      margin: 2.5% !important;
    }
  }
  
  
  
  @media only screen and (max-width: 714px) {
    .card {
      height: 400px !important;
    }
  }
  
  @media only screen and (max-width: 644px) {
    .card {
      width: 90% !important;
      margin: unset !important;
      margin-top: 5% !important;
      margin-left: 5% !important;
      margin-right: 5% !important;
    }
  
    .row {
      margin-top: 3vh !important;
    }
  }
  
  </style>
  <script>
  // import Curve from "src/home/generic/svgCurve.vue";
//   import roundBtn from "src/home/generic/roundBtn"
  import ColorsJS from "src/assets/style/colors.js";
  export default {
    components: {
      // Curve,
    //   roundBtn
    },
    data() {
      return {
        colors: ColorsJS,
        prices: [
          {
            price: "PHP 5,000/mo",
            type: "Technology Consultation",
            subtype: "Dedicated Highly Skilled Consultant",
            list: [
            {
                text: "Dedicated Technology Consultant"
            },
            {
                text: "Access to resources and expertise"
            },
            {
                text: "Cost exclusion"
            },
            
            ]
          },
          
        ],
      };
    },
  };
  </script>
  