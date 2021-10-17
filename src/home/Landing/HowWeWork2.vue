<template>
    <div class="item-holder">
        <section-header :title="'How We Work'" :style="style"></section-header>
        <div class="content-holder">
            <span v-for="(item, index) in data" :key="index">
                <card :data="item" :showFlag="showFlag" @click="showFlag= true"/>
            </span>
        </div>
        <div class="component-footer">
        </div>
    </div>
</template>
<style scoped>
.item-holder{
    width: 100%;
    float: left;
}
.component-footer{
    display: block;
}

@media (max-width: 992px) {
    .component-footer{
        display: none;
    }
}
</style>
<script>
import ROUTER from "src/router";
import ColorsJS from 'src/assets/style/colors.js'
export default {
  mounted() {},
  components: {
      'section-header': null,
        'card': null
  },
  data() {
    return {
        style: {
            backgroundImage: 'linear-gradient(228.21deg,' + ColorsJS.primary +', ' + ColorsJS.secondary + ')'
        },
        showFlag: false,
        data: [{
            title: null,
            icon: null,
            description: null
        }]
    };
  },
  methods: {
  },
};
</script>