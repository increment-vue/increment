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
                    <div class="description">
                        <span>{{item.title}}</span>
                        <p>{{item.description}}</p>
                    </div>
                    <a :href=item.link ><button v-show="item.withButton" v-if="item.withButton === true ? 'item.withButton':'!item.withButoon'" class="button1">Visit Website</button></a>
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
.d-flex{
    margin-top: 10%;
    text-align: center;
}
.entitle{
    color: white;
    font-size: 55px;
    text-align: center;
    margin-top: -23%;
}
.cw-banner{
  width: 100%;
  padding: 15%;
  margin-top: 3%;
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
.row{
  width: 16vw;
  height: auto;
  border: 1px solid #00B89F ;
  background-color: white;
  margin-bottom: 5%;
}   
.description{
  text-align:center;
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
@media screen and (max-width: 992px){
  .entitle{
    margin-top: -30%;
}
  span{
    font-size: 10px;
  }
  p{
    font-size: 10px;
  }
  .description{
    height: 8vh;
  }
  .button1{
  font-size: 10px;
}
}
</style>

