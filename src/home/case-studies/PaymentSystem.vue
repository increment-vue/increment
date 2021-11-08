<template>
  <div>
    <div class="banner">
      <h1 class="title">PAYMENT SYSTEM</h1>
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
        Payment system is the most essential part of a business. This needs to
        be accurate and secured to prevent risks in the future. One of the ways
        to prevent risks, is to secure a payment system in your own business
        wherein this is considered as an essential investment to meet your
        long-term goals.
      </p>
      <p>
        Increment Technologies, can help you create opportunities in your
        payment system by ensuring your payment transactions are secured and are
        based on the agreed terms. We can develop a software that can serve as a
        channel between an e-commerce and a bank that is robustly fraud
        protected and is a centralized software created exclusively for your
        organization. We, at Increment technologies, believed that we are the
        right company that could cater to your needs in finding software
        solutions for your business.
      </p>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";


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
