<template>
  <div class="cw-banner" id="our-values">
    <div class="container">
      <div class="text-center">
        <h1
          class="title"
          style="color: white; font-size: 50px; font-weight: 700; margin-top: 10vh;"
        >
          Our Values
        </h1>
        <p
          style="color: white; margin-bottom: 10vh; margin-top: 3vh; margin-bottom: 20vh;"
        >
          What we at Increment Technologies Inc. believe and stand for</p>
      </div>
      <div class="row ">
        <span class="col-md-4" v-for="(item, index) in values" :key="index">
          <div class="single-card d-flex align-items-center" 
               v-if="item.num === '2' || item.num === '5'"
               style="position: absolute; bottom:35px; background:white;"
               >
                <b class="paragraph"> <i>{{ item.desc }}</i> </b>
          </div>
          <div class="single-card d-flex align-items-center" 
               v-else
               style="background:white;"
               >
                <b class="paragraph"> <i>{{ item.desc }}</i> </b>
          </div>
        </span>
      </div>
      <div style="margin-top:-77px;margin-bottom:-100px;">
        <svg style="background:#8f00b5;width:102%;position:absolute;right:0px;margin-bottom:50px;opacity:1;z-index:-2;"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFFFFF" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,208C672,224,768,192,864,165.3C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
      
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container{
  max-width: 80%;
}

.cw-banner {
  width: 100%;
  float: left;
  background: $secondary;
  padding-bottom: 10vh;
  padding-top: 10vh;
  min-height: 90vh;
  background: linear-gradient(
      #00b89f 0%,
      #495aaa 51.04%,
      #8f00b5 100%
    );
  margin-bottom: 238px;
}

#col {
  border: 4px solid white;
  border-radius: 15px;
  height: 150px;
  width: 320px;
}

h2 {
  font-size: 23px;
  color: #00B89F;
}
.single-card {
  //border: 5px solid white;
  background: #E5E5E5;
  padding: 22px 25px 22px 22px;
  margin: 24px;
  height: 180px;
  width: 92%;
  //width: 400px; <--for uniform width
  //height: 10%;
  //margin-left: 5%;
  //margin-right: 5%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 200%
}
.paragraph {
  font-size: 25px;
  color: #028170;
  // margin-top: -25%;
}
// .rows{
//   margin-top:-10%;
// }

@media (max-width: 280px) {
  .cw-banner {
    width: 100%;
  }
  .paragraph i {
    font-size: 22px;
    line-height: 0rem;
    width: 30%;
  }
  .pad {
    margin-right: -70%;
  }
}
@media (max-width: 375px) {
  .pad {
    margin-right: -100%;
  }
}
@media (max-width: 540px) {
  .pad {
    margin-right: -70%;
  }
  .cw-banner {
    min-height: 50vh;
  }
}

@media (max-width: 1024px) {
  .cw-banner {
    min-height: 50vh;
  }
  .paragraph i {
    font-size: 25px;
    // line-height: 0rem;
    // width: 30%;
  }
}

@media (min-width: 768px) {
  .cw-banner {
    min-height: 50vh;
  }
  .paragraph i {
    font-size: 25px;
    // line-height: 0rem;
    // width: 30%;
  }
  .pad {
    margin-right: 10%;
  }
}
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
export default {
  data() {
    return {
      values: [
        {
          num: "1",
          desc: "We do the right thing. Always.",
          firstCard: true,
        },
        {
          num: "2",
          desc: "We provide what is best.",
          firstCard: false,
        },
        {
          num: "3",
          desc: "We are committed to everything we do.",
          firstCard: false,
        },
        {
          num: "4",
          desc: "We deliver success to our customers.",
          firstCard: true,
        },
        {
          num: "5",
          desc: "Communication is our tool for excellence.",
          firstCard: false,
        },
        {
          num: "6",
          desc: "We always help everyone.",
          firstCard: false,
        },
      ],
    };
  },
  mounted() {},
  datas() {
    return {
      common: COMMON,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>
