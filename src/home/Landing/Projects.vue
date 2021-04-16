<template>
  <div class="cw-banner" id="projects">
    <div class="text">
      <div class="text-center mt-5 p-5">
          <h1 class="entitle" ><b>Our Projects</b></h1>
      </div>
      <div class="container mt-5">
        <div class="col-sm-12 d-flex">
          <div class="col-sm-3 m-0">
              <div class="box row">
                <img :src="require('assets/img/project - runway.png')">
              </div>
              <div class="description">
                <span>Runway Express - Philippines</span>   
                <p>Website and Mobile Development</p>                   
              </div>
              <a href="http://runwayexpress.co.uk/#/"><button class="button1">Visit Website</button></a>
          </div>
          <div class="col-sm-3 m-0">
            <div class="row">
              <img :src="require('assets/img/project - mezzo.png')">
            </div>
            <div class="description">
              <span>Mezzo Hotel - Philippines</span>
              <p>Website Development</p>
            </div>      
            <a href="https://mezzohotel.com/"><button class="button1">Visit Website</button></a>
          </div>
          <div class="col-sm-3 m-0">
            <div class="row">
              <img :src="require('assets/img/project - popoutposter.png')">
            </div>
            <div class="description">
              <span>Popout Poster - United Kingdom</span>
              <p>Website Development</p>
            </div>
            <a href="https://popoutposter.com/"><button class="button1">Visit Website</button></a>
          </div>
          <div class="col-sm-3 m-0">
            <div class="row">
              <img :src="require('assets/img/project - meetthesea.png')">
            </div>
            <div class="description">
              <span>Meat The Sea - Hongkong</span>
              <p>Website Development</p>
            </div>
            <a href="https://www.meatthesea.com/"><button class="button1">Visit Website</button></a>
          </div>
        </div>
      </div>
      <button class="button2">View More ></button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
label{
  font-size: 30px;
  font-weight: bold;
}
.button1{
  background-color: #E0E0E0;
  border: none;
  color: #BDBDBD !important;
  padding: 15px 32px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 15%;
}
.button2{
  background: #00E68A;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-left: 42%;
  margin-right: 42%;
  margin-top: 10%;
}
.row{
  width: 18.4vw;
  height: auto;
  border: 1px solid white;
  background-color: white;
}
.entitle {
  text-align: center;
  font-size: 55px;
  margin-top: 3%;
}
.cw-banner{
  width: 100%;
  float: left;
  background: $primary;
}
.description{
  text-align:center;
  margin-left: -7%;
  margin-top: 7%;
}
span{
  font-size: 17px;
}
p{
  font-size: 14px;
  color: #8F00B5;
}
.text{
  color: white;
  position: relative;
  z-index: 1000;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 10%;
}
.text .title{
  width: 100%;
  float: left;
}
img{
  width: 17vw;
  height: auto;
  margin:auto;
  padding: 5%;
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
