<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <span class="brand">
      <a class="navbar-brand" @click="redirect('/')">
        <img :src="require('assets/img/logo.png')" style="margin-bottom: 5px;">
      </a>
      <b>
      INCREMENT TECHNOLOGIES
      </b>
    </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline my-2 my-lg-0 ml-auto">
        <ul class="navbar-nav" v-if="this.$route.path === '/'">
          <li class="nav-item" v-for="(item, index) in menu" :key="index"><a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" @click="scrollTo(item.redirect)" href="javascript: return false"><b style="color: '#0089bf'">{{item.title}}</b>
          <i class="fas fa-caret-down"></i></a></li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.brand{
  font-size: 24px;
  color: '#0089bf';
}
.nav-item{
  margin-right: 20px;
  color: '#0089bf'
}
.navbar{
  padding-left: 10%;
  padding-right: 10%;
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
        redirect: '#who'
      }, {
        title: 'Our Services',
        redirect: '#services'
      }, {
        title: 'Case Studies',
        redirect: '#studies'
      }, {
        title: 'Technologies',
        redirect: '#technologies'
      }, {
        title: 'Send Request',
        redirect: '#send-request'
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
