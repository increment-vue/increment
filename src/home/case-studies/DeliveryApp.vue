<template>
  <div>
    <BreadCrumbs :title="'DELIVERY APP'" />
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
      <CaseImage :price="'15,000'" :bg="'delivery_app.jpg'" />
      <p class="offer">What we can offer</p>
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
        orchestration and performance. Achieve efficient management of drivers
        and increase on-time deliveries.
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
      <p class="back-return" @click="redirect('/case-studies')">
        &lt;&lt;Back to Case Studies
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container {
  text-align: justify;
  min-height: 100vh;
  background-color: $white;
  padding-top: 40vh;
  padding-bottom: 10vh;
}

.back-return {
  font-weight: bold;
  color: $primary;
  margin-top: 5vh;
}

.back-return:hover {
  cursor: pointer;
  text-decoration: underline;
}

.offer {
  font-weight: 800;
  font-size: 20px;
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
import CaseImage from "src/home/generic/case-image.vue";
import ROUTER from "src/router";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    BreadCrumbs,
    CaseImage,
  },
  methods: {
    redirect(param) {
      ROUTER.push(param);
    },
  },
};
</script>
