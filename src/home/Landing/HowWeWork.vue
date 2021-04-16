<template>
    <div class="cw-banner" id="how-we-work">
    <h1 class="text">How We Work</h1>
       <div v-for="(item, i) in works" :key="i" :index="i">
        <div v-if="i%2==0" style="display:flex;margin-top:3%;">
           <div style="width:80%;">
            <h2>
            {{item.title}}
            </h2>
            <p>
               {{item.desc}} 
            </p>
           </div>
           <div style="width:19%"><img :src="item.src" class="img"></div>
        </div>
        <div v-if="i%2!=0" style="display:flex; margin-top:3%;">
         <div style="width:19%"><img :src="item.src" class="imgs"></div>
            <div style="width:80%">
            <h2>
            {{item.title}}
            </h2>
            <p>
               {{item.desc}} 
            </p>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default{
data(){
    return{
        works: [{
            title: 'MEET AND GREET',
            desc: 'To get a new project underway we like to meet our clients face-to-face for a chat. Our initial meeting will identify your objectives and decipher exactly how we can help. Think of this as a fact to find with us asking you the important question.',
            src: require("assets/img/MEET AND GREET.png")
        },{
            title: 'PLANNING',
            desc: 'Our planning session provides us with a comprehensive strategy for your project. This crucial phase will form hte building blocks of your project, helping us to investigate and identify drivers from across your business` people, customer, processes and technology that will lead to more successful outcome.',
            src: require("assets/img/PLANNING.png")
        },{
            title: 'DESIGN UI AND UX',
            desc: 'Stunning , intuitive design  is essential to your product`s functionality and brand story. Our design team`s diverse expertise will guide the innovative choices that will make sure your brand is communicated effectively and delight users. The designs will be created as PSD Photoshop files, allowing you to see exactly what they will look like.',
            src: require("assets/img/DESIGN UI AND UX.png")
        },{
            title: 'DESIGN PRESENTATION',
            desc: 'We use Invision software to present interactive designs. This allows us to give an exact depiction of what your final product will look like. We will cover every detail down to the shading on a line before commencing with development.',
            src: require("assets/img/DESIGN PRESENTATION.png")
        },{
            title: 'DEVELOPMENT',
            desc: 'We create scalable, high performance mobile apps for IOS, Android and Web using the latest techniques and tools. Our developers are forward-thinking specialist who will integrate seamlessly into your project and deliver outstanding native experiences.',
            src: require("assets/img/DEVELOPMENT.png")
        },{
            title: 'TESTING & QUALITY ASSURANCE',
            desc: 'Our dedicated in-house QA department executes thorough and complex testing processes depending on the scope of your project. The goal is to make sure that every project. The goal is to make sure that every line of code, pixel on the screen and interaction with your app is perfect.',
            src: require("assets/img/TESTING AND QUALITY ASSURANCE.png")
        },{
            title: 'DELIVERY',
            desc: 'Once perfected, we begin the process of migrating your project from a testing to live environment. all source code files are sent to you, and we prepare for launch.',
            src: require("assets/img/DELIVERY.png")
        },{
            title: 'LAUNCHING',
            desc: 'This is where the final solution is pieced together, built to meet all your requirements in a timely manner. We stablish real relationships with all of our clients to support the excitement around releasing your vision to the market.',
            src: require("assets/img/LAUNCHING.png")
        },{
            title: 'MARKETING',
            desc: 'Product development is only half the battle. Through multiple tools, plans and strategies, our marketing team makes sure your app is embraced by your target market right from the let-go.',
            src: require("assets/img/MARKETING.png")
        },{
            title: 'MAINTENANCE & IMPROVEMENTS',
            desc: 'Technology is constantly evolving, so we continuously build to ensure your product meets the ever changing demands of your use base. Our team monitors your cloud servers, storage, databases, and more so you can stay ahead of the curve.',
            src: require("assets/img/MAINTENANCE & IMPROVEMENTS.png")
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
  position: relative;
  z-index: 1000;
  margin-top: 200px;
  font-weight: bold;
  text-align:center;
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
  background: #00B89F;
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