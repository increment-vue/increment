<template>
  <div class="cw-banner" id="who-we-are">
    <div class="text mt-5">
        <h1>Case Studies</h1>
    </div>
    <div class="container mt-5">
      <!-- <center> -->
        <div class="col-sm-12 d-flex">
          <div class="col-sm-4">
            <div class="card">
              <img class="image" src="../../assets/img/IncrementBanner.jpg">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <img class="image" src="../../assets/img/IncrementBanner.jpg">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
          </div>
          <div class="col-sm-4">
          <div class="card">
              <img class="image" src="../../assets/img/IncrementBanner.jpg">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 m-0">
            <div class="card">
              <img class="image" src="../../assets/img/IncrementBanner.jpg">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      <!-- </center> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner{
  width: 100%;
  float: left;
  background: white;
  height: 100vh;
}
.text{
  width: 50%;
  // float: center;
  position: relative;
  z-index: 1000;
  margin-left: 50%;
  // text-align: center;
  font-size: 55px;
}
.text .title{
  width: 100%;
  float: left;
}
.title h1{
  font-size: 40px;
}
.text .description{
  margin-top: 25px;
  width: 90%;
  margin-right: 10%;
  float: left;
  text-align: justify;
}
.image{
  max-width: 100%;
  max-height: 100%;
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
