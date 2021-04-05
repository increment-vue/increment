<template>
	<div class="body">
    <LandingHeader></LandingHeader>
		<LandingBanner></LandingBanner>
    <span class="return-to-top" @click="scrollTo()">
       <i class="fas fa-angle-up" style="font-size: 35px;" ></i>
    </span>
    <LandingFooter></LandingFooter>
	</div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.body{
  margin: 0px;
}
.return-to-top{
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $white;
  color: primary;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 62px;
  text-align: center;
}

.fa-angle-up{
  color: $primary !important;
}
.return-to-top:hover{
  cursor: pointer;
  color: $primary
}
</style>

<script>
import ROUTER from 'src/router'
import Jquery from 'jquery'
import LandingBanner from 'src/home/Landing/Banner.vue'
import LandingHeader from 'src/home/Landing/Header.vue'
import LandingFooter from 'src/home/Landing/Footer.vue'
export default {
  components: {
    LandingBanner,
    LandingHeader,
    LandingFooter
  },
  mounted(){
  },
  data(){
    return {
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    scrollTo () {
      Jquery('html, body').animate({
        scrollTop: Jquery('#header').offset().top
      }, 500)
    }
  }
}
</script>

