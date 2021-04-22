<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <span class="brand">
      <div class="row no-gutters">
        <div class="col-md-3">
          <a class="navbar-brand" @click="redirect('/')">
            <img :src="require('assets/img/logo.png')" style="margin-bottom: 5px;">
          </a>
        </div>
        <div class="col-md-9">
          <b>
            <div class="increment-purple" style="margin-top: 10px;">INCREMENT</div>
            <div class="increment-limegreen-light">TECHNOLOGIES</div>
          </b>
        </div>
      </div>
      
    </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse">
      <form class="form-inline my-2 my-lg-0 ml-auto">
        <ul class="navbar-nav" v-if="this.$route.path === '/'">
          <li class="nav-item" v-for="(item, index) in menu" :key="index">
            <div v-if="item.type === 'dropdown'">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #20C1AB;">
                <b class="increment-limegreen-light">{{ item.title }}</b>
              </a>
              <div class="dropdown-menu" v-if="item.title === 'Who We Are'" style="position: absolute; left: 42%; border-color: #20C1AB;">
                  <a class="dropdown-item" href="#"><b class="increment-limegreen-light">Our Values</b></a>
                <a class="dropdown-item" href="#"><b class="increment-limegreen-light">What They Say About Us</b></a>
              </div>
              <div class="dropdown-menu" v-if="item.title === 'Our Services'" style="position: absolute; left: 53%; border-color: #20C1AB;">
                  <a class="dropdown-item" href="#">
                    <b class="increment-limegreen-light">How We Work</b></a>
                  <a class="dropdown-item" href="#">
                    <b class="increment-limegreen-light">Our Projects</b>
                  </a>
              </div>
            </div>
            <div v-else-if="item.type === 'regular'">
              <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" @click="scrollTo(item.redirect)" href="javascript: return false">
              <b class="increment-limegreen-light">{{item.title}}</b>
              </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.increment-purple{
  color: #3F0050;
}
.increment-limegreen-light{
  color: #20C1AB;
}
.increment-limegreen-dark{
  color: #30C5B1;
}
.brand{
  font-size: 15px;
  font-weight: bold;
}
.nav-item{
  margin-right: 20px;
  color: '#0089bf'
}
.navbar{
  padding-left: 5%;
  padding-right: 5%;
}
img{
  width: auto;
  height: 44px;
  margin-top: 4px;
}
.fa-bars:hover{
  cursor: pointer;
}
.fa-bars{
  border: solid 1px #fff;
  font-size: 20px !important;
  padding: 10px 8px 10px 8px !important;
  color: $primary !important;
}
.button:hover{
  background-color: #9ACD32;
  text-decoration: none;
  border: 0px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
}
.button{
  float: left;
  width: 120px;
  border: solid 1.2px #D3D3D3;
  border-radius: 30px;
  text-align: center;
  margin-right: 2.5px;
  margin-left: 2.5px;
  height: 38px;
}
</style>
<script>
import ROUTER from 'src/router'
import COMMON from 'src/common.js'
import $ from 'jquery'
export default {
  mounted(){
    console.log(this.$route)
  },
  data(){
    return {
      common: COMMON,
      menu: [{
        title: 'Who We Are',
        redirect: '/#who-we-are',
        type: 'dropdown'
      }, {
        title: 'Our Services',
        redirect: '/#our-services',
        type: 'dropdown'
      }, {
        title: 'Case Studies',
        redirect: '/#case-studies',
        type: 'regular'
      }, {
        title: 'Technologies',
        redirect: '/#technologies',
        type: 'regular'
      }, {
        title: 'Send Request',
        redirect: '/send-request',
        type: 'regular'
      }]
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    scrollTo (id) {
      let height = $(window).height()
      $('html, body').animate({
        scrollTop: $(id).offset().top - parseInt(height * 0.1)
      }, 500)
    },
  }
}
</script>
