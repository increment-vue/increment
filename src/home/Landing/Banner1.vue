<template>
    <div class="item-holder">
        <h1 class="text-blue text-center title">
            WHO WE ARE
        </h1>
    </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
div.item-holder{
  position: 'absolute';
  top: 50%;
}
.item-holder{
  width: 100%;
  float: left;
  height: 500px;
}
.item-content{
  padding: 20px;
  width: 40%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
  height: 750px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
//
.title{
  margin-top: 20%;
  margin-right: 50%;
  height: 100px;
  line-height: 100px;
}
</style>
<script>
import ROUTER from 'src/router'
export default {
  mounted(){
  },
  data(){
    return{
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    }
  }
}
</script>
