<template>
  <div class="cw-banner" id="who-we-are">
    <div class="text">
        <h1>What They Say About Us</h1>
        <br>
        <br>
        <br>
        <div class="row">
        <div  class="col-sm-5">
        <div class ="testimony">
        <div>
        <br>
          <p>
            <b><i>"They are amazing. The help me developed
              <br>my audio base languages<br>translation website."</i>
            </b>    
          </p>
          <br>
          <p style = " color:violet "><b>JEREMY REID</b></p>
          <p style = " font-size:15px">Owner, Talkfluent<br><b>AUSTRALIA</b></p>  
        </div> 
        </div> 
        </div>
           <div  class="col-sm-5">
        <div class ="testimony">
        <div>
        <br>
          <p>
            <b>
            <i>"Increment has been a great help in optimizing
              <br>my company's business process.. The team is<br>very responsive and dynamic. Kudos!"
            </i> 
            </b>   
          </p>
          <br>
          <p style = " color:violet "><b>SHANNEN TAN</b></p>
          <p style = " font-size:15px">President & CEO, Mezzo Hotel<br><b>PHILIPPINES</b></p>  
        </div> 
        </div> 
        </div>
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner{
  width: 100%;
  float: left;
  background: $primary;
  height: 100vh;
}
.text{
  width: 50%;
  float: left;
  position: relative;
  z-index: 1000;
  margin-left: 50%;
  margin-top: 200px;
}

.text .title{
  width: 100%;
  float: left;
}
.title h1{
  font-size: 40px;
}
.text .description{
  margin-top: 25px;
  width: 90%;
  margin-right: 10%;
  float: left;
  text-align: justify;
}
.image{
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
  z-index: 0;
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
h1{
    text-align: center;
    margin-left: -680px;
    margin-top: -125px;
    color: white;
  
}
.testimony{
  border-style: solid;
  border-width: 5px;
  border-radius: 10px;
  border-color: white;
  text-align: center;
  max-width: 600px;
  height: 300px;
  color: white;
  font-size: 20px;
}
.row{
    width: 1208px;
    margin-left: -531px;
    -webkit-column-gap: 70px;
    -moz-column-gap: 70px;
    column-gap: 70px;
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
