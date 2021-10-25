<template>
  <div class="container-holder">
    <!-- <div class="card-holder" @click="show(index)">
      <font-awesome-icon :icon="data.icon" class="font-awesome-icon mb-3" />
      <p class="title">
        <b>{{ data.title }}</b>
      </p>
    </div>
    <div class="row">
      <div class="col-sm">
        <p class="text">
          <font-awesome-icon
            :icon="data.icon"
            class="font-awesome-icon-clicked"
          />
        </p>
      </div>
      <div class="col-sm">
        <h3 class="text-click">{{ data.title }}</h3>
        <hr class="line1" />
        <p class="pText">{{ data.text }}</p>
      </div>
    </div> -->
    <div class="row details-holder">
      <div
        @click="show(data.id)"
        :class="`item-holder-click ${
          !actives.includes(data.id) ? 'item-holder' : 'item-holder-click'
        }`"
      >
        <div>
          <font-awesome-icon :icon="data.icon" class="font-awesome-icon" />
          <p class="title">{{ data.title }}</p>
        </div>
        <div class="row item-clicked">
          <div class="content-icon">
            <p class="text">
              <font-awesome-icon
                :icon="data.icon"
                class="font-awesome-icon-clicked mt-4"
              />
            </p>
          </div>
          <div class="content-text">
            <h3 class="text-click"><b>{{ data.title }}</b></h3>
            <hr class="line1" />
            <p class="pText">{{ data.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container-holder {
  width: 100%;
}
// .card-holder {
//   width: 100%;
//   background: linear-gradient(
//     95.51deg,
//     $gradientPrimary 0%,
//     $gradientTertiary 51.04%,
//     $gradientSecondary 100%
//   );
//   // text-align: center;
//   min-height: 220px;
//   border-radius: 10px;
//   margin-top: 50px;
//   padding: 20px;
// }
.item-holder-click {
  min-height: 220px;
  width: 40%;
  border-radius: 10px;
  animation-duration: 0ms;
  margin-top: 50px;
  padding-top: 30px;
  margin-left: 2%;
  margin-right: 2%;
}

.item-holder {
  background: linear-gradient(
    95.51deg,
    #00b89f 0%,
    #495aaa 51.04%,
    #8f00b5 100%
  );
}
.item-holder:hover {
  cursor: pointer;
  background-image: linear-gradient(
    50.9deg,
    $gradientSecondary,
    $gradientPrimary,
    $gradientSecondary
  );
}

.font-awesome-icon {
  color: $white;
  font-size: 100px;
}

.title {
  color: $white;
  font-size: 25px;
  text-align: left;
}

.font-awesome-icon-clicked {
  color: $secondary;
  font-size: 100px;
}

.content-text {
  width: 80%;
}

.content-icon {
  width: 20%;
}

@media (max-width: 992px) {
  .card-holder {
    width: 100%;
  }
}
</style>
<script>
// import ROUTER from "src/router";
export default {
  data() {
    return {
      actives: null,
    };
  },
  props: ["data", "showFlag", "stylecss"],
  methods: {
    show(index) {
      console.log("-------", index);
    },
  },
};
</script>