<template>
  <div class="cw-banner" id="our-services">
    <div class="text-center mt-5 p-5">
      <h1 class="title" style="color:white;font-size:60px;">
        <b>Our Values</b>
      </h1>
    </div>
    <div>
      <div class="col-sm-12">
        <div style="color:white;">
          <div class="mb-5 d-flex align-items-center justify-content-center">
            <div :class="item.firstCard === true ? 'col col-sm-3' : 'col col-sm-3 ml-5' " id="col" v-for="(item, i) in values" :key="i" :index="i">
              <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2>
                    <b>{{item.num}}</b>
                  </h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph">
                    <i>{{item.desc}}</i>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 d-flex align-items-center justify-content-center">
            <div :class="item.firstCard === true ? 'col col-sm-3' : 'col col-sm-3 ml-5' " id="col" v-for="(item, i) in val" :key="i" :index="i">
              <div class="d-flex">
                <div class="col col-sm-2 my-auto">
                  <h2>
                    <b>{{item.num}}</b>
                  </h2>
                </div>
                <div class="col col-sm-10 my-auto">
                  <b class="paragraph">
                    <i>{{item.desc}}</i>
                  </b>
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
.cw-banner {
  width: 100%;
  float: left;
  background: $secondary;
  padding-bottom: 10%; 
  min-height: 100vh;
}
.d-flex {
  height: inherit;
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
.paragraph {
  font-size: 25px;
}

@media screen and (max-width: 992px) {
  #col {
    border: 3px solid white;
    border-radius: 15px;
    height: 150px;
    width: 320px;
  }

  .paragraph {
    font-size: 20px;
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
      ],
      val: [
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
