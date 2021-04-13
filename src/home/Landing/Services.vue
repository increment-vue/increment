<template>
  <div class="cw-banner" id="our-services">
    <div class="text-center mt-5 p-5">
        <h1 class="title" style="color:white;font-size:60px;"><b>Our Services</b></h1>
    </div>
    <div class="container mt-5">
      <div class="col-sm-12 d-flex">
        <div class="col-sm-3 m-0">
            <div class="row">
              <img :src="require('assets/img/design.png')">
            </div>
            <div class="row mt-5">
              <div class="col-sm-12" id="paragraph">
                <p>We use latest editing tools like adobe photoshop, and illustrator for our designing. We also cater making landing page videos using adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.</p>                      
              </div>
            </div>
        </div>
        <div class="col-sm-3 m-0">
          <div class="row">
            <img :src="require('assets/img/apps.png')">
          </div>
          <div class="row mt-5">
            <div class="col-sm-12" id="paragraph">
              <p>
                The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give best solutions.
              </p>
            </div>
          </div>
                   
        </div>
        <div class="col-sm-3 m-0">
          <div class="row">
            <img :src="require('assets/img/websites.png')">
          </div>
          <div class="row mt-5">
            <div class="col-sm-12" id="paragraph">
              <p>
                Our developers are contantly upgrading its capabilities to provide best and suitable solutions for your needs. Our disease to create beatiful and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-3 m-0">
          <div class="row">
            <img :src="require('assets/img/hosting.png')">
          </div>
          <div class="row mt-5">
            <div class="col-sm-12" id="paragraph">
              <p>
                We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner{
  width: 100%;
  float: left; 
  background: $secondary;
  // height: 120vh;
  padding-bottom: 10%;
  // margin-bottom: 10%;
}
#paragraph{
  text-align:center;
  font-size:15px;
  color:white;
}
.text{
  width: 50%;
  float: left;
  position: relative;
  z-index: 1000;
  margin-left: 42%;
  margin-top: 100px;
  color: white;
}
.text .title{
  width: 100%;
  float: left;
}
img{
  width: 150px;
  height: 150px;
  margin:auto;
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
