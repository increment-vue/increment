<template>
  <button class="btn" @mouseover="onHover()" @mouseleave="offHover()" :style="btn_style" @click="redirect()">{{text}}<i v-if="icon != null" :class="btn_icon"></i></button>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.btn {
  min-width: 150px !important;
  height: 60px !important;
  border-radius:  50px !important;
  padding: 20px !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}

button:hover{
  background-color: $success !important;
}

i {
  margin-left: 13px !important;
  font-size: 20px !important;
  font-weight: 900 !important;
}
</style>
<script>
import ROUTER from "src/router";
export default {
  props: ["target","route", "icon", "text", "styles","hoverStyles","changeIcon"],
  data(){
    return{
      btn_style: this.styles,
      btn_icon: this.icon
    }
  },
  methods: {
    redirect(){
      if (this.target === "_blank") {
        window.open(this.route);
      } else {
        ROUTER.push(this.route);
      }
    },
    onHover(){
      this.btn_style = this.hoverStyles;
      if(this.changeIcon != null){
        this.btn_icon = this.changeIcon
      }else{
        this.btn_icon = this.icon
      }
    },
    offHover(){
      this.btn_style = this.styles;
      this.btn_icon = this.icon
    }
  }
};
</script>
