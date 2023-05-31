<template>
  <div class="footer-holder">
    <Curve
      :color="curveStyle"
      :use="false"
      :stylecss="{ backgroundColor: 'black', height: '50%' }"
    ></Curve>
    <div class="container-handler">
      <a class="navbar-brand">
        <img class="logo" src="../../assets/img/new_logos/logo_long_black_transparent_v2.png" />
        <!-- <label class="site-name">
          <b class="increment-white"> &nbsp;INCREMENT</b>
          <br />
          <b class="increment-white">&nbsp; TECHNOLOGIES INC.</b>
        </label> -->
        <br />
        <h4 class="mt-3 mb-4">{{ common.APP_TAGLINE }}</h4>
      </a>
      <div class="row">
        <div class="col-sm-6">
          <div v-for="(item, index) in common.footer1_contents" :key="index">
            <h4 class="title-name">
              <b>{{ item.name }}</b>
            </h4>
            <p class="description">{{ item.description }}</p>
            <div
              v-for="(sItem, sIndex) in item.subMenu"
              :key="sIndex"
              class="row submenu"
            >
              <div class="col-sm-1">
                <font-awesome-icon
                  class="fontawesome-icon"
                  :icon="sItem.icon"
                />
              </div>
              <div class="col-sm-11">
                <label class="contactUs"
                  ><a :href="sItem.payload + sItem.url" style="color: white">{{
                    sItem.title
                  }}</a></label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div v-for="(item, index) in common.footer2_contents" :key="index">
            <h4 class="title-name">
              <b>{{ item.name }}</b>
            </h4>
            <p>
              <a class="font-url" :href="item.url">{{ item.title }}</a>
            </p>
          </div>
        </div>
        <div class="col-sm-3">
          <div v-for="(item, index) in common.footer3_contents" :key="index">
            <h4 class="title-name">
              <b>{{ item.name }}</b>
            </h4>
            <span v-for="(sItem, sIndex) in item.subMenu" :key="sIndex">
              <a :href="sItem.url" target="_blank"
                ><font-awesome-icon
                  class="fontawesome-icon2"
                  :icon="sItem.icon"
              /></a>
              <label>{{ sItem.title }}</label>
            </span>
            <div class="row">
              <div class="col-sm-1">
                <font-awesome-icon class="fontawesome-icon" :icon="item.icon" />
              </div>
              <div class="col-sm-11">
                <p class="mt-2">
                  <a target="blank" :href="item.url" style="color: white">{{
                    item.description
                  }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr class="line mt-5" />
        <p class="copyright">Copyright @{{ common.APP_COPYRIGHT }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.footer-holder {
  width: 100%;
}
.container-handler {
  padding-left: 10%;
  padding-right: 10%;
  background-color: $black;
  align-content: left;
  margin-top: -150px;
}
.curve {
  width: 100%;
  float: left;
  height: 200px;
}
.font-url,
.mt-3 {
  line-height: 0px;
  color: $white;
}
.fontawesome-icon {
  font-size: 25px;
  color: $secondary;
  text-align: left;
  margin-right: 20px;
}
.fontawesome-icon2 {
  font-size: 30px;
  color: $white;
  text-align: left;
  margin-right: 20px;
  margin-bottom: 50px;
}
.fontawesome-icon2:hover {
  color: $secondary;
}
.title-name {
  color: $white;
  justify-content: left;
}
.description {
  color: white;
  width: 60%;
}
.contactUs {
  margin-left: -20px;
}

.icon-holder {
  width: 80%;
  align-items: left;
  justify-content: left;
}

.col-sm-6 {
  margin-right: -3%;
}
.copyright {
  width: 100%;
  text-align: center;
  color: $white;
  font-size: 13px;
}
.line {
  background-color: $secondary;
  width: 1500px;
}
.mt-2 {
  color: white;
  margin-left: 15px;
  cursor: pointer;
}
.logo {
  width: auto;
  height: 65px;
  margin-top: -12%;
  padding-right: 2px;
}
.increment-white {
  color: $secondary;
  font-size: 18px;
}
@media only screen and (max-width: 1200px) {
}

@media screen and (max-width: 992px){
  .container-handler {
    width: 100%;
    text-align: center;
    margin-top: -1px;
  }
  .curve {
    height: 60px;
  }
  .description {
    width: 100%;
  }
  .submenu {
    text-align: center;
  }
  .site-name {
    text-align: left;
  }
  .fontawesome-icon2:hover {
    color: $secondary;
  }
  .fontawesome-icon2 {
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 770px) {
}
@media only screen and (max-width: 450px) {
}
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import Curve from "src/home/generic/svgCurve.vue";
import ColorsJS from "src/assets/style/colors.js";

export default {
  components: {
    Curve,
  },
  data() {
    return {
      common: COMMON,
      curveStyle: ColorsJS.incrementPurple,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>

