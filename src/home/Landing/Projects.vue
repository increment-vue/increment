<template>
  <div class="cw-banner" id="projects">
    <h1 class="entitle" ><b>Our Projects</b></h1>
    <div class="container">
      <div class="mt-5">
        <div class="col-sm-12 d-flex">
          <div class="col-sm-3" v-for="(item, i) in projects" :key="i" :index="i">
            <div class="row">
              <img :src="item.src">
            </div>
            <div class="description">
              <span>{{item.title}}</span>
              <p>{{item.description}}</p>
            </div>
            <a :href=item.link target="_blank"><button class="button1">Visit Website</button></a>
          </div>
        </div>
      </div>
      <button @click="redirect('our-projects')" class="button2">View More ></button>
    </div>
  </div>
</template>

<script>
import ROUTER from 'src/router'
export default {
  mounted(){
  },
  data(){
    return {
      projects: [{
        title: 'Runway Express - Philippines',
        description: 'Website and Mobile Development',
        src: require("assets/img/project - runway.png"),
        link: 'http://runwayexpress.co.uk/#/'
      },{
        title: 'Mezzo Hotel - Philippines',
        description: 'Website Development',
        src: require("assets/img/project - mezzo.png"),
        link: 'https://mezzohotel.com/'
      },{
        title: 'Popout Poster - United Kingdom',
        description: 'Website Development',
        src: require("assets/img/project - popoutposter.png"),
        link: 'https://popoutposter.com/'
      },{
        title: 'Meat The Sea - Hong Kong',
        description: 'Website Development',
        src: require("assets/img/project - meetthesea.png"),
        link: 'https://www.meatthesea.com/'
      }]
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.button1{
  background-color: #E0E0E0;
  border: none;
  color: #BDBDBD !important;
  padding: 1vw 2vw;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 15%;
  outline-color: $primary;
}
.button2{
  background: #00E68A;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 35px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-top: 10%;
  outline-color: $primary;
}
.row{
  width: 19vw;
  height: auto;
  border: 1px solid white;
  background-color: white;
  margin-bottom: 5%;
}
.entitle {
  text-align: center;
  font-size: 55px;
  margin-top: 5%;
  color: white;
  margin-bottom: 8%;
}
.cw-banner{
  width: 100%;
  float: left;
  background: $primary;
  padding: 5%;
}
.container{
  text-align: center
}
.description{
  text-align:center;
  margin-left: -12%;
  height: 10vh;
}
span{
  font-size: 17px;
  color: white;
  text-align: center;
}
p{
  font-size: 14px;
  color: #8F00B5;
  text-align: center;
}
img{
  width: 18vw;
  height: auto;
  margin:auto;
  padding: 5%;
}

@media only screen and (max-width: 992px){
  .text{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title{
    text-align: center;
  }
  span{
    font-size: 13px;
  }
  p{
    font-size: 10px;
  }
  .button1{
  font-size: 10px;
}
  .button2{
  font-size: 14px;
}
}
@media only screen and (max-width: 768px){
  .title{
    text-align: center;
  }
  span{
    font-size: 10px;
  }
  p{
    font-size: 6px;
  }
  .button1{
  font-size: 10px;
}
.description{
  height: 13%;
}
  .button2{
  font-size: 14px;
}
}
@media only screen and (max-width: 540px){
  img{
    height: 15vw;
    width: auto;
  }
  .description{
    height: 25%;
  }
  .button1{
  font-size: 7px;
}
  .button2{
  font-size: 10px;
}
}
@media only screen and (max-width: 441px){
  .entitle{
    font-size: 30px;
  }
  .row{
    width: 17vw;
  }
  img{
    height: 15vw;
    width: auto;
  }
  .description{
    height: 25%;
  }
  span{
    font-size: 5px;
  }
  p{
    font-size: 3px;
  }
  .button1{
  font-size: 5px;
}
  .button2{
  font-size: 7px;
}
}
@media only screen and (max-width: 360px){
  .entitle{
    font-size: 30px;
  }
  .row{
    width: 17vw;
  }
  img{
    height: 15vw;
    width: auto;
  }
  .description{
    height: 25%;
  }
  span{
    font-size: 5px;
  }
  p{
    font-size: 3px;
  }
  .button1{
  font-size: 5px;
}
  .button2{
  font-size: 7px;
}
}
@media only screen and (max-width: 320px){
  .entitle{
    font-size: 30px;
  }
  .text{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title{
    text-align: center;
  }
  .row{
    width: 17vw;
  }
  img{
    height: 15vw;
    width: auto;
  }

  span{
    font-size: 5px;
  }
  p{
    font-size: 3px;
  }
  .button1{
  font-size: 2px;
}
.description{
  height: 16vh;
}
  .button2{
    height: 4px;
  font-size: 5px;
}
}

</style>
