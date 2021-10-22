<template>
    <div class="card-holder" :style="style">
        <div v-if="data.showFlag == false">
            <span  class="full-width">
                <font-awesome-icon :icon="data.icon" />
            </span>
            <p>
                {{data.title}}
            </p>
        </div>
        <div v-else>
            <span class="one-third">
                <font-awesome-icon :icon="data.icon" />
            </span>
            <span class="two-third">
                <h1>{{data.title}}</h1>
                 <p>
                    {{data.description}}
                </p>
            </span>
           
        </div>
        
    </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.card-holder{
    float: left;
    width: 40%;
}

.one-third{
    width: 33%;
}

.two-third{
    width: 66%;;
}

.full-width{
    width: 100%;
}

@media (max-width: 992px) {
   .card-holder{
       width: 100%;
   }
}
</style>
<script>
import ROUTER from "src/router";
export default {
  props: ['data', 'showFlag', 'style'],
  methods: {
  },
};
</script>