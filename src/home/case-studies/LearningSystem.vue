<template>
  <div>
    <div class="banner">
      <h1 class="title">LEARNING SYSTEM</h1>
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
        A learning system is an essential platform for a school to provide for
        its students. Amidst the pandemic, students must continue to learn and
        keep building their knowledge even through online platforms. Giving
        opportunities to students, learning without being physically present in
        school and still enjoying a high-quality education they deserve.
      </p>
      <p>
        Increment Technologies, can help make these opportunities possible by
        building a software exclusively for your organization. A software where
        it organizes an eLearning content in one location, providing an
        unlimited access to eLearning materials, easily tracks progress and
        performance of the students, reduce learning and development costs, and
        detect misconduct such as cheating. We believe that Increment
        Technologies is the trusted company that can help your organization meet
        its goals.
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
  background-image: url("../../assets/img/bg-learning.jpg");
  background-size: 100% 70vh;
  min-height: 70vh;
  width: 100%;
  text-align: center;
  color: white;
}

.title {
  font-size: 50px;
  font-weight: 800;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 10px;
  padding-top: 35vh;
}
#start-price {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 35px;
    font-weight: 800;
    padding-right: 10%;
    padding-left: 10%;
  }
}

@media only screen and (max-width: 500px) {
  #start-price {
    font-size: 23px;
    font-weight: 600;
    padding-bottom: 10px;
  }
}

#btn {
  background-color: $secondary;
  color: white;
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: none;
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
