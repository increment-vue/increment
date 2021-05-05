<template>
  <div>
    <div class="banner">
      <h1 class="title">EMPLOYEE MANAGEMENT</h1>
      <h3 id="start-price">Starting Price : $7,000</h3>
      <a
        href="https://calendly.com/incrementtech2020/services-offered"
        id="btn"
        type="button"
        >Inquire Now!</a
      >
    </div>
    <div class="container">
      <p>
        The Employee Management System maintains the professional and personal
        details of the employees as well as the company itself, in an organized
        manner. It’s importance to the company is that it manages and lowers the
        burden or even pressure on the Human Resource Department and Business
        Managers. This does not just benefit the established companies, but also
        those who are managing their business alone, with a starting number of
        workforce; since start-up business needs to be taken care and monitored
        in order for it to expand.
      </p>
      <p>
        Increment Technologies, exclusively develops a software for Employee
        Management that would benefit the company in terms of the following:
        employee monitoring, fewer compliance risk, minimizing manual errors,
        higher productivity, lower cost, and monitoring of working hours. As a
        business, your number one asset is your employees, thus making sure that
        they are properly managed especially when they are increasing, having a
        proper software or system would definitely ease the stress.
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
  background-image: url("../../assets/img/bg-employeemngmt.jpg");
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
  mounted() {
    this.scrollTop();
  },
  methods: {
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery(".banner").offset().top,
        },
        500
      );
    },
    scrollTop(){
      window.scrollTo(0, 0);
    },
  },
};
</script>
