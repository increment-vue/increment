<template>
  <div class="cw-banner" id="who-we-are">
    <div class="text">
      <div class="text description">
        <h1 class="entitle"><b>Who We Are</b></h1>
          <h2><b>INTRODUCTION</b></h2>
          <hr>
          <p>Founded in 2017, Increment Technologies set itself out to be a leading Website and Mobile Development firm in Cebu. We develop high-quality digital projects, from landing pages to full-blown e-commerce.</p>
          <p>In pursuit of quality, we strategically develop every project to set out distinctiveness in every client’s needs. Our clients are mostly from outside the country, but since we saw that there's a huge potential from the domestic market, we are now providing locals with our services and increasing our visibility.</p>
          <h2><b>OUR VISION</b></h2>
          <hr>
          <p>Increment Technologies visions to help businesses succeed with their goals by providing innovative ideas and best tools that exceeds standards. We strive to create opportunities for businesses to excel in their industries.</p>
          <h2><b>OUR MISSION</b></h2>
          <hr>
          <p>Our mission is to create high quality and secured websites, website applications, and mobile applications from small to corporate level businesses. Our goal is to develop sustainable strategies aligning to the modern array of services. We take pride in creating solutions to your needs.</p>         
        </div>     
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.entitle {
  text-align: center;
  font-size: 55px;  
}
h2 {
  margin-top: 4%;
}
hr {
  margin-left: 0%;
  margin-top: -0.9%;
  height: 1px;
  width: 7.5vw;
  background-color: $secondary;
}
.cw-banner{
  width: 100%;
  background: white;
  // margin-top:10%;
}
.text{
  position: relative;
  z-index: 1000;
  margin-left: 5%;
  margin-right: 5%;
}
.text .description{
  margin-bottom: 10%;
  float: left;
  text-align: justify;
  margin-top: 50vh;
}

@media screen and (max-width: 992px){
  .text{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title{
    text-align: center;
  }

  .image{
    position: relative;
    max-height: 100%;
    width: inherit;
  }
}

</style>
<script>
import ROUTER from 'src/router'
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
    return {
      common: COMMON
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    }
  }
}
</script>
