<template>
  <div class="cw-banner" id="our-services">
    <div class="text-center mt-5 p-5">
      <h1 class="title" style="color:white;font-size:60px;">
        <b>Our Values</b>
      </h1>
    </div>
    <div class="row no-gutters">
        <span class="col-md-4" v-for="(item, index) in values" :key="index">
          <div class="single-card">
            <div class="d-flex">
                <div class="col col-sm-2 my-auto pad">
                  <h2>
                    <b>{{item.num}}</b>
                  </h2>
                </div>
                <div class="col col-sm-10 ml0 mr-0 pl-0 pr-0 my-auto">
                  <b class="paragraph">
                    <i>{{item.desc}}</i>
                  </b>
                </div>
            </div>
            </div>
        </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  width: 100%;
  float: left;
  background: $secondary;
  padding-bottom: 10%; 
  min-height: 100vh;
  padding-left:5%;
  padding-right:5%;
}

#col {
  border: 4px solid white;
  border-radius: 15px;
  height: 150px;
  width: 320px;
}

h2 {
  font-size: 30px;
  color: #00e68a;
}
.single-card {
  border: 5px solid white;
  padding: 10px;
  padding-top: 40px;
  margin: 20px;
  height: 150px;
  border-radius: 10px;
}
.paragraph {
  font-size: 25px;
  color:white;
  // margin-top: -25%;
}
// .rows{
//   margin-top:-10%;
// }

@media (max-width: 280px){
  .cw-banner {
    width: 100%;
  }
  .paragraph i {
    font-size: 12px;
    line-height: 0rem;
    width: 30%;
  }
    .pad{
    margin-right:-70%;
  }

}
@media (max-width: 375px){
    .pad{
    margin-right:-100%;
  }

}
@media (max-width: 540px){
  .pad{
    margin-right:-70%;
  }
  .cw-banner {
    min-height:50vh;
  }
}

@media (max-width: 1024px){
  .cw-banner {
    min-height:50vh;
  }
   .paragraph i {
    font-size: 18px;
    // line-height: 0rem;
    // width: 30%;
  }
}

@media (min-width: 768px){
  .cw-banner {
    min-height:50vh;
  }
   .paragraph i {
    font-size: 14px;
    // line-height: 0rem;
    // width: 30%;
  }
  .pad{
    margin-right:10%;
  }
}

// @media screen and (max-width: 992px) {
//   #col {
//     border: 3px solid white;
//     border-radius: 15px;
//     height: 150px;
//     width: 320px;
//   }
//   .d-flex{
//     margin-top: -5%;
//   }
//   .paragraph {
//     font-size: 20px;
//     // margin-top:-50%;
//   }

// }
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
export default {
  data() {
    return {
      values: [
        {
          num:'1',
          desc:'We do the right thing. Always.',
          firstCard: true
        },
        {
          num:'2',
          desc:'We provide what is best.',
          firstCard: false
        },
        {
          num:'3',
          desc:'We are committed to everything we do.',
          firstCard: false
        },
        {
          num:'4',
          desc:'We deliver success to our customers.',
          firstCard: true
        },
        {
          num:'5',
          desc:'Communication is our tool for excellence.',
          firstCard: false
        },
        {
          num:'6',
          desc:'We always help everyone.',
          firstCard: false
      }]
    };
  },
  mounted() {},
  datas() {
    return {
      common: COMMON
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    }
  }
};
</script>
