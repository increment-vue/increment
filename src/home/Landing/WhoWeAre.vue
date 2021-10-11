<template>
  <div class="banner" id="who-we-are">
    <div class="container">
      <h1 class="title">Who We Are</h1>
      <div style="text-align: left; margin-top: 8vh">
        <div class="row" style="margin-top:100px" id="introduction">
          <div style="" class="col-4">
            <img :src="require('assets/img/who-we-are-top.gif')" alt="" id="who-we-are-top">
          </div>
          <div style="postion:relative;" class="col-8">
            <h3>INTRODUCTION</h3><div id="h3-after"></div>
            <p>
              Founded in 2017, Increment Technologies set itself out to be a leading
              Website and Mobile Development firm in Cebu. We develop high-quality
              digital projects, from landing pages to full-blown e-commerce.
            </p>
            <p>
              In pursuit of quality, we strategically develop every project to set
              out distinctiveness in every client’s needs. Our clients are mostly
              from outside the country, but since we saw that there's a huge
              potential from the domestic market, we are now providing locals with
              our services and increasing our visibility.
            </p>
          </div>
        </div>
        <div class="row" style="margin-top:-100px margin-bottom:-200px" id="vision">
          <div style="" class="col-7">
            <h3>OUR VISION</h3><div id="h3-after2"></div>
            <p>
              Increment Technologies visions to help businesses succeed with their
              goals by providing innovative ideas and best tools that exceeds
              standards. We strive to create opportunities for businesses to excel
              in their industries.
            </p>
            <h3>OUR MISSION</h3><div id="h3-after3"></div>
            <p>
              Our mission is to create high quality and secured websites, website
              applications, and mobile applications from small to corporate level
              businesses. Our goal is to develop sustainable strategies aligning to
              the modern array of services. We take pride in creating solutions to
              your needs.
            </p>
          </div>
          <div style="" class="col-5">
            <img :src="require('assets/img/who-we-are-bottom.gif')" alt="" id="who-we-are-bottom">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: white;
  min-height: 100vh;
  float: left;
  width: 100%;
}

.title {
  font-weight: 700;
  font-size: 50px;
  color: #3F0050;
}

.container {
  padding-top:30vh;
  padding-bottom: 20vh;
  text-align: center;
  color: black;
}

.col-8{
  left: 50px;
}

#introduction, #vision{
  opacity: 1;
  transition: opacity 500ms;
}

#who-we-are-top{
  position:relative; 
  right:10rem;
  bottom:150px;  
  animation-name: curve;
  animation-duration: 2s;
  transition: 500ms;
}

#who-we-are-bottom{
  position:relative;
}

.curve-bottom{
  animation-name: curveBtm;
  animation-duration: 2s;
  transition: 500ms;
}

@keyframes curve {
  0% {transform: translate(-200px,200px) rotate(180deg); }
  100% {transform: translate(0px, 0px) rotate(0deg);}
}

@keyframes curveBtm {
  0% {transform: translate(0px,200px) rotate(0deg); }
  100% {transform: translate(0px, 0px) rotate(0deg);}
}


h3 {
  font-weight: 700;
  margin-top: 5vh;
}

#h3-after, #h3-after2, #h3-after3 {
  content: " ";
  position: absolute;
  display: block;
  width: 120px;
  height: 2px;
  background: $secondary;
  justify-content: center;
  text-align: center;
  margin-left: 27rem;
  margin-top: -8px;
  transition: 1s;
  transition-delay: 0.1s;
}

h3:hover, #h3-after:hover, #h3-after2:hover, #h3-after3:hover{
  animation-name: jump;
  animation-duration: 0.5s;
  cursor: pointer;
}

@keyframes jump{
  0%, 40%, 60%, 100% {-webkit-transform: translateY(0);}
  20% {-webkit-transform: translateY(-10px);}
  80% {-webkit-transform: translateY(-4px);}
}

p {
  margin-top: 2vh;
}

@media only screen and (max-width: 992px) {

*{
  max-width:100%!important;
}
.container{
  //display: flex;
  padding-top:20vh;
  margin-left: 1.5%;
  padding-bottom:22vh;
}

.title{
  width:100%;
  display: block;
}
#who-we-are-top{
  height: 12rem;
  width: 16.25rem;
  position: absolute;
  bottom: 2rem;
  right: 72%;
}
#who-we-are-bottom{
  height: 11rem;
  width: 15.25rem;
  position: absolute;
  //bottom: 2rem;
  //right: 72%;
  margin-top: 20px;
  right: 4%;
}
p{
  margin-top: 20px;
  margin-bottom: 40px;
}
.row{
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
#introduction, #vision{
  width: 100%;
}
.col-8{
  order: 0;
  left: 0;
}
.col-5{
  order: 1;
}
#h3-after, #h3-after2, #h3-after3{
  margin-left: 42.5%!important;
}

}

@media only screen and (max-width: 768px) {
.container {
margin-top: -20%;
  }
}
@media only screen and (max-width: 540px) {
.container {
margin-top: -45%;
}
}
@media only screen and (max-width: 414px) {
.container {
margin-top: -50%;
}
}
@media only screen and (max-width: 411px) {
.container {
margin-top: -45%;
}
}
@media only screen and (max-width: 375px) {
.container {
margin-top: -40%;
}
}
@media only screen and (max-width: 360px) {
.container {
margin-top: -50%;
}
}
@media only screen and (max-width: 320px) {
.container {
margin-top: -55%;
}
}
@media only screen and (max-width: 280px) {
.container {
margin-top: -90%;
}
}
</style>

<script>
window.addEventListener('scroll', () => {
  //console.log(window.innerWidth)

  if (window.scrollY >= 2200 && window.scrollY <= 2700) {
    //document.getElementById('introduction').style.opacity = '1'
    document.getElementById('h3-after').style.marginLeft = '0rem'
    //  var elem = document.getElementById('who-we-are-top')
    //  elem.classList.add('curve')
  } else {
    //document.getElementById('introduction').style.opacity = '0'
    document.getElementById('h3-after').style.marginLeft = '27rem'
    //elem.classList.remove('curve')
  }


  if (window.scrollY >= 2600 && window.scrollY <= 3400) {
    //document.getElementById('vision').style.opacity = '1'
    document.getElementById('h3-after2').style.marginLeft = '0rem'
    document.getElementById('h3-after3').style.marginLeft = '0rem'
    var elem = document.getElementById('who-we-are-bottom')
    elem.classList.add('curve-bottom')
  } else {
    //document.getElementById('vision').style.opacity = '0'
    document.getElementById('h3-after2').style.marginLeft = '27rem'
    document.getElementById('h3-after3').style.marginLeft = '27rem'
   elem.classList.remove('curve-bottom')
  }
})

</script>

