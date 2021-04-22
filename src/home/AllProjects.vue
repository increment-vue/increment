<template>
    <div>
        <div class="banner">
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
                    </div>
                    <a :href=item.link ><button v-show="item.withButton" v-if="item.withButton === true ? 'item.withButton':'!item.withButoon'" class="button1">Visit Website</button></a>
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
                    </div>
                    <a :href=item.link ><button v-show="item.withButton" v-if="item.withButton === true ? 'item.withButton':'!item.withButoon'" class="button1">Visit Website</button></a>
                </div>
            </div>
            <br>
            <div class="col-sm-12 d-flex">
                <div class="col-sm-3" v-for="(item, i) in projects3" :key="i" :index="i">
                    <div class="row">
                        <img :src="item.src" class="images">
                    </div>
                    <div class="description">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <a :href=item.link ><button v-show="item.withButton" v-if="item.withButton === true ? 'item.withButton':'!item.withButoon'" class="button1">Visit Website</button></a>
                </div>
            </div>
            <br>
            <div class="col-sm-12 d-flex">
                <div class="col-sm-3" v-for="(item, i) in projects4" :key="i" :index="i">
                    <div class="row">
                        <img :src="item.src" class="images">
                    </div>
                    <div class="description">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <a :href=item.link ><button v-show="item.withButton" v-if="item.withButton === true ? 'item.withButton':'!item.withButoon'" class="button1">Visit Website</button></a>
                </div>
            </div>
            <br>
            <div class="col-sm-12 d-flex">
                <div class="col-sm-3" v-for="(item, i) in projects5" :key="i" :index="i">
                    <div class="row">
                        <img :src="item.src" class="images">
                    </div>
                    <div class="description1">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <a :href=item.link ><button v-show="item.withButton" v-if="item.withButton === true ? 'item.withButton':'!item.withButoon'" class="button2">Visit Website</button></a>
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
        withButton: true
      },{
        title: 'Mezzo Hotel - Philippines',
        description: 'Website Development',
        src: require("assets/img/project - mezzo.png"),
        link: 'https://mezzohotel.com/',
        withButton: true
      },{
        title: 'Popout Poster - United Kingdom',
        description: 'Website Development',
        src: require("assets/img/project - popoutposter.png"),
        link: 'https://popoutposter.com/',
        withButton: true
      },{
        title: 'Meat The Sea - Hong Kong',
        description: 'Website Development',
        src: require("assets/img/project - meetthesea.png"),
        link: 'https://www.meatthesea.com/',
        withButton: true
      }],
      projects2:[{
        title: 'Eat Study & Sip - United States',
        description: 'Website Development',
        src: require("assets/img/project - eatstudyandsip.png"),
        link: 'https://eatstudyandsip.com/',
        withButton: true
      },{
        title: 'SYNQT - United States',
        description: 'Website and Mobile Development',
        src: require("assets/img/projects - synqt.png"),
        link: 'http://wearesynqt.com/',
        withButton: true
      },{
        title: 'Investa Garden - United States',
        description: 'Website Development',
        src: require("assets/img/projects - investa.png"),
        link: 'https://investagarden.com/',
        withButton: true
      },{
        title: 'Pivot SMS - Canada',
        description: 'Website Development',
        src: require("assets/img/project - pivot.jpg"),
        link: '',
        withButton: true
      }],
      projects3:[{
        title: 'Max Muscle - United States',
        description: 'Website Development',
        src: require("assets/img/project - maxmuscle.jpg"),
        link: 'https://maxmuscle.com/',
        withButton: true
      },{
        title: 'TalkFluentSpanish - Austrilia',
        description: 'Website and Mobile Development',
        src: require("assets/img/project - talkfluent.png"),
        link: 'https://talkfluentspanish.com/',
        withButton: true
      },{
        title: 'Aesha - Philippines',
        description: 'Mobile Development',
        src: require("assets/img/project - aesha.png"),
        withButton: false
      },{
        title: 'AgriCord - Austrilia',
        description: 'Website and Mobile Development',
        src: require("assets/img/project - agricord.png"),
        link: 'http://traceag.com.au/#/',
        withButton: true
      }],
      projects4:[{
        title: 'AgriSend - Austrilia',
        description: 'Mobile Development',
        src: require("assets/img/project - agrisend.png"),
        withButton: false
      },{
        title: 'PayHiram - Philippines',
        description: 'Website and Mobile Development',
        src: require("assets/img/project - payhiram.png"),
        link: 'https://payhiram.ph/',
        withButton: true
      },{
        title: 'BirdsEye - Philippines',
        description: 'Website and Mobile Development',
        src: require("assets/img/project - birdsEye.png"),
        link: 'https://birds-eye.org/',
        withButton: true
      },{
        title: 'Zeta Mariani - Gibraltar',
        description: 'Website Development',
        src: require("assets/img/project - zetamariani.png"),
        link: 'http://zetamariani.com/',
        withButton: true
      }],
      projects5:[{
        title: 'DBSN Group - Philippines',
        description: 'Website Development',
        src: require("assets/img/project - dbsn.png"),
        link: 'http://dbsngroup.com/',
        withButton: true
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
.banner {
  background-image: url("../assets/img/ourprojectbg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  height: 60vh;
  width: 100%;
  text-align: center;
  color: white;
  padding: 30vh 0;
}
.d-flex{
    text-align: center;
}
.entitle {
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
.cw-banner{
  width: 100%;
  padding: 15%;
}
img{
    width: 100%;
    height: 600px;
}
.button1{
  background-color: #00E68A;
  border: none;
  color: white;
  padding: 1vw 2vw;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10%;
  outline-color: white;
}
.button2{
  background-color: #00E68A;
  border: none;
  color: white;
  padding: 1vw 2vw;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10%;
  outline-color: white;
}
.row{
  width: 16vw;
  height: auto;
  border: 1px solid #00B89F ;
  background-color: white;
  margin-bottom: 5%;
}   
.description{
  height: 12vh;
}
span{
  font-size: 15px;
  color: black;
  font-weight: 600;
}
p{
  font-size: 13px;
  color: #8F00B5;
}
.images{
  width: 15vw;
  height: auto;
  margin:auto;
  padding: 5%;
}
@media only screen and (max-width: 1033px){
.entitle {
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
  img{
    width: 100%;
    height: 500px;
}
  .description{
    height: 15vh;
  }
  .description1{
    height: 15vh;
  }
}
@media only screen and (max-width: 1024px){
  .entitle {
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
  .description{
    height: 15vh;
  }
  .description1{
    height: 15vh;
  }
}
@media only screen and (max-width: 992px){
  .entitle {
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
  span{
    font-size: 10px;
  }
  p{
    font-size: 10px;
  }
  .description{
    height: 10vh;
  }
  .description1{
    height: 10vh;
  }
  .button1{
  font-size: 10px;
}
}
@media only screen and (max-width: 800px){
  .entitle {
  font-size: 40px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
  img{
    width: 100%;
    height: 500px;
}
  .button1{
    font-size: 9px
  }
  .button2{
    font-size: 9px
  }
  .description{
    height: 15vh;
  }
  .description1{
    height: 15vh;
  }
    .images{
  width: 13vw;
  height: auto;
}
.row{
  width: 15vw;
  height: auto;
}
}
@media only screen and (max-width: 690px){
  img{
    width: 100%;
    height: 400px;
}
  .button1{
    font-size: 8px
  }
    .button2{
    font-size: 8px
  }
  .description{
    height: 17vh;
  }
  .description1{
    height: 15vh;
  }
    .images{
  width: 13vw;
  height: auto;
}
.row{
  width: 15vw;
  height: auto;
}
}
@media only screen and (max-width: 640px){
  img{
    width: 100%;
    height: 400px;
}
  .button1{
    font-size: 6px
  }
    .button2{
    font-size: 6px
  }
  .description{
    height: 17vh;
  }
  .description1{
    height: 15vh;
  }
  .images{
  width: 13vw;
}
.row{
  width: 15vw;
  height: auto;
}
}
@media only screen and (max-width: 600px){
  img{
    height: 400px;
}
  .description{
    height: 10vh;
  }
  .description1{
    height: 10vh;
  }
    .images{
  width: 12vw;
  height: auto;
}
.row{
  width: 15vw;
  height: auto;
}
}
@media only screen and (max-width: 599px){
  .entitle {
  font-size: 40px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
  .button1{
    font-size: 6px
  }
    .button2{
    font-size: 6px
  }
  .description{
    height: 18vh;
  }
  .description1{
    height: 15vh;
  }
  .images{
  width: 13vw;
}
.row{
  width: 15vw;
  height: auto;
}
.cw-banner{
  width: 100%;
  padding: 10%;
}
}
@media only screen and (max-width: 540px){
img{
  width: 100%;
  height: 400px;
}
  .button1{
  font-size: 6px;
}
  .button2{
  font-size: 6px;
  margin-left: -83%;
}
  .description{
    height: 20vh;
  }
  .description1{
    height: 8vh;
    margin-left: -83%;
  }
}
@media only screen and (max-width: 425px){
.cw-banner{
  width: 100%;
  padding: 5%;
}

}
@media only screen and (max-width: 414px){
  .cw-banner{
  width: 100%;
  padding: 10%;
}
.button1{
  font-size: 5px;
}
img{
  width: 100%;
  height: 300px;
}
.row{
  margin-bottom: 5%;
} 
.cw-banner{
  width: 100%;
  padding: 13%;
  margin-top: 2%;
}
.images{
  width: 13vw;
  height: auto;
  margin:auto;
  padding: 5%;
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
.button2{
  font-size: 2px;
  margin-left: -86%;
}
.description{
  height: 10vh;
}
.description1{
  height: 3vh;
  margin-left: -86%;
}
}
@media only screen and (max-width: 411px){
    .entitle {
  font-size: 35px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
.button1{
  font-size: 5px;
}
img{
  width: 100%;
  height: 300px;
}
.row{
  margin-bottom: 5%;
} 
.cw-banner{
  width: 100%;
  padding: 13%;
  margin-top: 2%;
}
.images{
  width: 13vw;
  height: auto;
  margin:auto;
  padding: 5%;
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
.button2{
  font-size: 2px;
  margin-left: -86%;
}
.description{
  height: 10vh;
}
.description1{
  height: 3vh;
  margin-left: -86%;
}
}
@media only screen and (max-width: 375px){
    .entitle {
  font-size: 30px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
.description{
  height: 14vh;
}
.description1{
  height: 3vh;
  margin-left: -86%;
}
}
@media only screen and (max-width: 360px){
.button1{
  font-size: 5px;
}
img{
  width: 100%;
  height: 300px;
}
.row{
  margin-bottom: 5%;
} 
.cw-banner{
  width: 100%;
  padding: 13%;
  margin-top: 2%;
}
.images{
  width: 13vw;
  height: auto;
  margin:auto;
  padding: 5%;
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
.button2{
  font-size: 2px;
  margin-left: -86%;
}
.description{
  height: 15vh;
}
.description1{
  height: 3vh;
  margin-left: -86%;
}
}
@media only screen and (max-width: 320px){
    .entitle {
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}
.button1{
  font-size: 5px;
}
img{
  width: 100%;
  height: 300px;
}
.row{
  margin-bottom: 5%;
} 
.cw-banner{
  width: 100%;
  padding: 13%;
  margin-top: 2%;
}
.images{
  width: 13vw;
  height: auto;
  margin:auto;
  padding: 5%;
}
span{
  font-size: 3px;
}
p{
  font-size: 3px;
}
.button1{
  font-size: 1px;
}
.button2{
  font-size: 1px;
  margin-left: -86%;
}
.description{
  height: 15vh;
}
.description1{
  height: 3vh;
  margin-left: -86%;
}
}
</style>

