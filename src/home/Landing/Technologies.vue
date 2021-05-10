<template>
    <div class="cw-banner" id="how-we-work">
    <h1 class="text">Technologies</h1>
    <br>
    <br>
       <div v-for="(item, i) in works" :key="i">
        <div style="display:flex;margin-top:3%; margin-left:5%;">
           <div style="width:75%;">
            <h2>
            {{item.title}}
            </h2>
            <p>
               {{item.desc}} 
            </p>
           </div>
           <div style="width:20%"><img :src="item.src" class="img"></div>
        </div>
        </div>
        <div class="button">
        <button @click="redirect('technologies')" class="button2">View More ></button>
      </div>
    </div>
</template>
<script>
import ROUTER from 'src/router'
export default{
data(){
    return{
        works: [{
            title: 'WEB DEVELOPMENT',
            desc: 'Laravel, Vuejs, Javascript, Nodejs, ReactJS, React Native, API Integrations, Bootstrap, Android Development, iOS Development, Java, Wordpress, Shopify Storefront + API, PHP, CodeIgniter, HTML5, CSS3, Xampp, Wampp, MySQL, Woocommerce Integration, Alibaba Dropshipping, Amazon Dropshipping, Shopify, Paypal API Integration, Stripe API Integration, Instagram API Integration, Google API Integration, Facebook API Integration, Messaging  ',
            src: require("assets/img/WebDevelopment.png")
        },{
            title: 'MOBILE DEVELOPMENT',
            desc: 'Java, Objective-C, React-Native, Android Development',
            src: require("assets/img/MobileDevelopment.png")
        },{
            title: 'UI/UX Designs',
            desc: 'Adobe Tools (PS, Indesign, After Effects, XD), Figma',
            src: require("assets/img/UI_UXDesign.png")
        },{
            title: 'SYSTEM ADMINISTRATOR',
            desc: 'CentOS, Linux, AWS, CPANEL, Google Cloud, GodDaddy, SiteGround, Dedicated Server and Related Task',
            src: require("assets/img/SystemAdministrator.png")
        },{
            title: 'LOWER LEVEL PROGRAMMING',
            desc: 'Assembly, C-Language, C++, and IVHDL',
            src: require("assets/img/LowerLevelProgramming.png")
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
.cw-banner{
  width: 100%;
  float: left;
  background: white;
  margin-bottom:10%;
  padding: 10%;
}
.text{
  width: 50%;
  position: relative;
  z-index: 1000;
  margin-left: 50%;
  margin-top: 200px;
  font-weight:bold;
}
.img{
    height:150px;
    width:150px;
}
.imgs{
    height:150px;
    width:150px;
}
h2::after{
    content: " ";
  position: absolute;
  display:block;
  width: 100px;
  height: 2px;
  background: #A32EC3;
}
h2{
    font-weight:bold;
}
.body{
    margin-left:100px;
    margin-right:100px;
    margin-top:5%;
}
.text .description{
  margin-top: 25px;
  width: 90%;
  margin-right: 10%;
  float: left;
  text-align: justify;
}
.button{
  margin-top:-3%;
}
.button2{
  background: #00E68A;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  margin-left: 42%;
  margin-right: 42%;
  margin-top: 10%;
}
@media screen and (max-width: 992px){
    .body{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
    }
}
</style>
