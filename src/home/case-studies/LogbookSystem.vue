<template>
  <div>
    <div class="banner">
      <h1 class="title">LOGBOOK SYSTEM</h1>
      <h3 id="start-price">Starting Price : $5,000</h3>
      <a
        href="https://calendly.com/incrementtech2020/services-offered"
        id="btn"
        type="button"
        >Inquire Now!</a
      >
    </div>
    <div class="container">
      <p>
        A Logbook System works as a daily record for business transactions. It
        is applicable to all businesses most especially with logistics,
        manufacturing, healthcare, hotels, schools, and many more. One of the
        things that most businesses aim, is the elimination of a manual system.
        Technically, there is no harm in applying a manual logbook system, since
        start-up companies always begin with that. Nowadays, a lot of industries
        are slowly shifting to software innovation; aiming for minimal resource
        consumption, such as hiring people to man for logbook monitoring, and
        thinking, why not handle it in one seating, with just having a
        centralized software where you can manage all the monitoring at once.
      </p>
      <p>
        Increment Technologies, aims to give opportunities to business owners
        towards increasing their efficiency and productivity while minimizing
        their resource consumption. Considering having a team of expert
        developers and extensive experience when it comes to software
        development, we can guarantee you a software that will exceed your
        expectations.
      </p>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../../assets/img/bg-logbook.jpg");
  background-size: cover;
  height: 70vh;
  width: 100%;
  text-align: center;
  color: white;
  padding: 35vh 0;
}

.title {
  font-size: 50px;
  font-weight: 800;
  padding-bottom: 10px;
}

#start-price {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 10px;
}

#btn {
  background-color: #00e68a;
  color: white;
  //background: #00E68A;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: none;
  //color: white;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
}

.container {
  margin-top: 10vh;
  margin-bottom: 30vh;
  color: black;
}

p {
  text-align: justify;
  margin-bottom: 30px;
}

h5 {
  font-weight: 600;
  font-style: italic;
  margin-bottom: 30px;
}
.return-to-top {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $primary;
  color: $white;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 62px;
  text-align: center;
}

.fa-angle-up {
  color: $white !important;
}
.return-to-top:hover {
  cursor: pointer;
  color: $primary;
}
</style>
<script>
import Jquery from "jquery";
export default {
  methods: {
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery(".banner").offset().top,
        },
        500
      );
    },
  },
};
</script>

