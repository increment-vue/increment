<template>
  <div>
    <div class="banner">
      <h1 class="title">DELIVERY APP</h1>
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
        This pandemic certainly affected a lot of industries not just in the
        Philippines but worldwide. Innovation from different industries has
        transpired, ordering services or products online were made available to
        be able to avoid physical transactions.
      </p>
      <p>
        One of the services that were made available online, is a delivery
        application. Increment Technologies has successfully accomplished a
        delivery application. It has the features and functionalities such as
        account management, product management, payment method, location, and
        other plugin integrations that would depend on the company’s
        qualifications of the application. Transforming your business into
        mobile applications would help promote safety and convenience to your
        customers and create hassle-free transactions.
      </p>
      <h5>What we can offer</h5>
      <p>
        <b>Scalable grocery delivery platform.</b> Take control of your customer
        experience and deliver a personalized, branded experience to your
        customers. Offer choice, convenience, and flexibility to your customers
        for grocery delivery.
      </p>
      <p>
        <b>More choice to the customer.</b> Provide flexibility to customers to
        choose payment and delivery modes with multiple options such as curbside
        pickup, contactless delivery, delivery at authorized service points.
      </p>
      <p>
        <b>Driver operations.</b> Manage driver onboarding, training,
        orchestration & performance. Achieve efficient management of drivers &
        increase on-time deliveries.
      </p>
      <p>
        <b>Proactive visibility and communication.</b> Allow customers to
        instantly track and trace their orders in real-time. Keep customer
        anxiety away and offer a predictable experience to them which is
        essential to build loyalty.
      </p>
      <p>
        <b>Contactless deliveries.</b> Go beyond the traditional contactless
        delivery norms and ensure the safety of your customers and partners upon
        executing deliveries. Meet the safety demands of the modern-day problem
        by rolling out contactless and cashless payments, digital proof of
        delivery, and driver temperature tracking.
      </p>
      <p>
        The surge in online shopping of groceries has set new delivery
        expectations. This has paved the way for a new era in grocery retail
        centered around deliveries and logistics is the major touchpoint between
        the grocer and the consumer. Grocers need to own the end-to-end delivery
        experience to win loyalty. Increment Technologies’ last-mile execution
        platform gives grocers and retailers a powerful way to orchestrate and
        centrally control the delivery process.
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
  background-image: url("../../assets/img/bg-deliveryapp.jpg");
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
