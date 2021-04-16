<template>
  <div class="cw-banner" id="our-services">
    <div class="text-center mt-5 p-5">
        <h1 class="title" style="color:white;font-size:60px;"><b>Our Values</b></h1>
    </div>
    <div class="mt-5">
      <div class="col-sm-12">
        <div style="color:white;">
          <div class="mb-5 d-flex align-items-center justify-content-center">
            <div class="col col-sm-3" id="col">
              <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2><b>1</b></h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph"><i>We do the right thing. Always.</i></b>
                </div>
              </div>
            </div>
            <div class="col col-sm-3 ml-5" id="col">
              <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2><b>2</b></h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph"><i>We provide what is best.</i></b>
                </div>
              </div>
            </div>
            <div class="col col-sm-3 ml-5" id="col">
              <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2><b>3</b></h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph"><i>We are committed to everything we do.</i></b>
                </div>
              </div>
            </div>
          </div>
          <div  class="mt-5 d-flex align-items-center justify-content-center">
              <div class="col col-sm-3" id="col">
                <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2><b>4</b></h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph"><i>We deliver success to our customers.</i></b>
                </div>
              </div>
              </div>
              <div class="col col-sm-3 ml-5" id="col">
                <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2><b>5</b></h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph"><i>Communication is our tool for excellence.</i></b>
                </div>
              </div>
              </div>
              <div class="col col-sm-3 ml-5" id="col">
                <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2><b>6</b></h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph"><i>We always help everyone.</i></b>
                </div>
              </div>
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
  background: $secondary;
  padding-bottom: 10%;
}
.d-flex{
  height:inherit;
}
#col{
  border: 4px solid white;
  border-radius:15px;
  height:150px;
  width:320px;
}

h2{
  font-size: 30px;
  color: #00E68A;

}
.paragraph{
  font-size: 25px;
}

@media screen and (max-width: 992px){
  #col{
  border: 3px solid white;
  border-radius:15px;
  height:150px;
  width:320px;
  }

.paragraph{
  font-size: 20px;
}


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
