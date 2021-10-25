<template>
    <div class="title-holder">
        <h2 class="title" :style="stylecss"><b>{{title}}</b></h2>
        <p class="decription">{{description}}</p>
    </div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.title-holder{
    width: 100%;
    min-height: 50%;
}

.title{
    font-weight: 800;
    text-align: center;
}

.decription{
    text-align: center;
}
</style>

<script>
export default {
    props: ['title', 'description', 'stylecss'],
    methods:{

    }
}
</script>