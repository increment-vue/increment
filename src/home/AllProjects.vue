<template>
    <div>
        <div>
            <img :src="require('assets/img/ourprojectbg.jpg')">
            <h1 class="entitle"><b>Our Projects</b></h1>
        </div>
        <br>
        <div class="cw-banner">
            <div class="col-sm-12 d-flex">
                <div class="col-sm-3" v-for="(item, i) in projects" :key="i" :index="i">
                    <div class="row">
                        <img :src="item.src" class="images">
                    </div>
                    <div class="description">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                        <a :href=item.link target="_blank"><button class="button1">Visit Website</button></a>      
                    </div>
                </div>
            </div>
            <br>
            <div class="col-sm-12 d-flex">
                <div class="col-sm-3" v-for="(item, i) in projects2" :key="i" :index="i">
                    <div class="row">
                        <img :src="item.src" class="images">
                    </div>
                    <div class="description">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                        <a :href=item.link target="_blank"><button class="button1">Visit Website</button></a>      
                    </div>
                </div>
            </div>
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
        link: 'http://runwayexpress.co.uk/#/',
        card: true
      },{
        title: 'Mezzo Hotel - Philippines',
        description: 'Website Development',
        src: require("assets/img/project - mezzo.png"),
        link: 'https://mezzohotel.com/',
        card: false
      },{
        title: 'Popout Poster - United Kingdom',
        description: 'Website Development',
        src: require("assets/img/project - popoutposter.png"),
        link: 'https://popoutposter.com/',
        card: false
      },{
        title: 'Meat The Sea - Hong Kong',
        description: 'Website Development',
        src: require("assets/img/project - meetthesea.png"),
        link: 'https://www.meatthesea.com/',
        card: false
      }],
      projects2:[{
        title: 'Eat Study & Sip - United States',
        description: 'Website Development',
        src: require("assets/img/project - eatstudyandsip.png"),
        link: 'https://eatstudyandsip.com/',
        card: true
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
.d-flex{
    margin-top: 3%;
}
.entitle{
    color: white;
    font-size: 55px;
    text-align: center;
    margin-top: -15%;
}
.cw-banner{
  width: 100%;
  padding: 5%;
  margin-top: 5%;
}
img{
    width: 100%;
    height: 350px;
    left: 0px;
    top: 100px;
}
.button1{
  background-color: #00E68A;
  border: none;
  color: white !important;
  padding: 1vw 2vw;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 15%;
}
.row{
  width: 19vw;
  height: auto;
  border: 1px solid #BDBDBD ;
  background-color: white;
  margin-bottom: 5%;
}   
.description{
  text-align:center;
  margin-left: -12%;
}
span{
  font-size: 17px;
  color: black;
  text-align: center;
}
p{
  font-size: 14px;
  color: #8F00B5;
  text-align: center;
}
.images{
  width: 18vw;
  height: auto;
  margin:auto;
  padding: 5%;
}
</style>

