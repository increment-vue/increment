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
    </div>
</template>
<script>
export default{
data(){
    return{
        works: [{
            title: 'WEB DEVELOPMENT',
            desc: 'Laravel, Vuejs, Javascript, TeactJS, React Native, API Integrations, Android Development, iOS Development, Java, Wordpress, Shopify + API, PHP, CodeIgniter, HTML5, CSS3, Xampp, MySQL, Woocommerce Integration, Alibaba Dropshipping, Shopify, Paypal API Integration, Stripe API Integration, Instagram API Integration, Google API Integration, Facebook API Integration, Messaging ',
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
            desc: 'CentOS, Linux, AWS, CPANEL, Google Cloud, GodDaddy, SiteGround, AWS, CPanel, Dedicated Server and Related',
            src: require("assets/img/SystemAdministrator.png")
        },{
            title: 'LOWER LEVEL PROGRAMMING',
            desc: 'Assembly, C-Language, C++, and IVHDL',
            src: require("assets/img/LowerLevelProgramming.png")
        }]
    }
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
@media screen and (max-width: 992px){
    .body{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
    }
}
</style>
