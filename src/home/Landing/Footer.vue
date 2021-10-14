<template>
  <div>
    <div class="curve" style="background: black">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00B89F"
          fill-opacity="1"
          d="M1919 0H0V43.2333C0 43.2333 99.234 79.8683 165.681 90.3369C316.558 114.108 422.004 30.1656 553.944 43.2333C678.534 55.5728 741.733 95.7704 866.339 107.944C1005.3 121.52 1083.76 110.657 1222.8 97.9025C1382.48 83.2545 1469.45 47.1908 1629.76 43.2333C1742.83 40.4416 1859.81 58.2952 1919 58.2952V0Z"
        ></path>
      </svg>
    </div>
    <div class="logo-handler">
      <a class="navbar-brand">
        <img class="logo" src="../../assets/img/logo.png" />
        <label class="site-name">
          <b class="increment-white"> &nbsp;INCREMENT</b>
          <br />
          <b class="increment-white">&nbsp; TECHNOLOGIES INC.</b>
        </label>
        <br />
        <label class="mt-3">{{ common.APP_TAGLINE }}</label>
      </a>
    </div>
    <div clas="footer-holder">
      <div class="row container-handler">
        <div class="col-sm-6">
          <div v-for="(item, index) in common.footer1_contents" :key="index">
            <label class="title-name"
              ><b>{{ item.name }}</b></label
            >
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
                <label style="color: white; margin-left: -2%">{{
                  sItem.title
                }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div v-for="(item, index) in common.footer2_contents" :key="index">
            <b class="title-name">{{ item.name }}</b>
            <p>
              <a class="font-url" :href="item.url">{{ item.title }}</a>
            </p>
          </div>
        </div>
        <div class="col-sm-3">
          <div v-for="(item, index) in common.footer3_contents" :key="index">
            <label class="title-name">
              <b>{{ item.name }}</b></label
            >
            <br />
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
                <label class="mt-2">{{ item.description }}</label>
              </div>
            </div>
          </div>
        </div>
        <hr class="line" />
        <p class="copyright">Copyright @{{ common.APP_COPYRIGHT }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container-handler {
  padding-left: 10%;
  padding-right: 10%;
  background-color: $black;
  padding-top: 2%;
  align-content: left;
}
.curve {
  width: 100%;
  float: left;
  height: 200px;
}
.font-url {
  line-height: 0px;
  color: $white;
}
.font-url1 {
  line-height: 0px;
  color: $white;
  margin-top: 2%;
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
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
}
.fontawesome-icon2:hover {
  color: $secondary;
}
.title-name {
  font-size: 20px;
  color: $white;
  justify-content: left;
  margin: 0 auto;
}
.description {
  color: white;
  width: 60%;
}
li {
  list-style: none;
  color: $white;
}

.icon-holder {
  width: 80%;
  align-items: left;
  justify-content: left;
}

.col-sm-6{
  margin-right: -3%;
}
.copyright {
  width: 100%;
  text-align: center;
  color: $white;
  font-size: 13px;
  // margin-top: 5vh;
}
.line {
  margin-top: 5%;
  background-color: $secondary;
  width: 1500px;
  height: 1px;
}
.mt-3 {
  color: $white;
  font-size: 17px;
}
.mt-2 {
  color: white;
  margin-left: 15px;
}
.logo {
  width: 53px;
  height: 48px;
  margin-top: -12%;
  padding-right: 2px;
}
.logo-handler {
  background-color: $black;
  padding-left: 10%;
}
.increment-white {
  color: $secondary;
  font-size: 18px;
}
@media screen and (max-width: 992px) {
  .container-handler {
    width: 105%;
    text-align: center;
    justify-content: center;
    align-content: center;
  }
  .description {
    width: 105%;
  }
  .logo-handler {
    text-align: center;
  }
  .site-name {
    text-align: left;
  }
  .submenu {
    text-align: center;
  }
  .fontawesome-icon2:hover {
    color: $secondary;
  }
  .fontawesome-icon2 {
  margin-bottom: 10px;
}
}
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";

export default {
  data() {
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

