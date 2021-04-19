<template>
  <div class="cw-banner" id="projects">
    <h1 class="entitle" ><b>Our Projects</b></h1>
      <div class="mt-5">
        <div class="col-sm-12 d-flex">
          <div class="col-sm-3" v-for="(item, i) in projects" :key="i" :index="i">
            <div class="row">
              <img :src="item.src">
            </div>
            <div class="description">
              <span>{{item.title}}</span>
              <p>{{item.description}}</p>
              <a :href=item.link target="_blank"><button class="button1">Visit Website</button></a>      
            </div>
          </div>
        </div>
      </div>
      <button @click="redirect('our-projects')"  class="button2">View More ></button>
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
    },
    openWindow(url){
      window.open(url, '_BLANK')
    },
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
  padding: 15px 35px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  margin-left: 41%;
  margin-right: 41%;
  margin-top: 10%;
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
.description{
  text-align:center;
  margin-left: -12%;
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
  span{
    font-size: 12px;
  }
  p{
    font-size: 10px;
  }
  .button1{
  font-size: 10px;
}
  .button2{
  font-size: 13px;
  width: 19vw;
}
}
</style>
