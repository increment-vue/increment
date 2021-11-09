<template>
  <div>
    <BreadCrumbs :title="'BOOKINGS AND APPOINTMENTS'" />
    <div class="container">
      <p>
        If you are an entrepreneur and you’re close to giving up on looking for
        the perfect online booking and reservation system which will work
        according to your needs, Increment Technologies Inc. can definitely
        provide solutions for you.
      </p>
      <p>
        An online booking system is a software that allows a potential customer
        to book and pay for an activity or service directly through a website.
        That means from the moment a customer decides on the booking date,
        preferred time, and pays for the booking, everything will be handled
        online. An efficient way to reduce workload, manpower, and the risk of
        double bookings.
      </p>
      <p>
        Whether you own a vacation property, car rental service or you’re
        planning to provide a course tutorial nearby, Increment Technologies
        Inc., offers an online appointment system for every business type which
        can be used by any business taking bookings: for days, nights, hours or
        minutes, or even scheduled events. The idea of setting up an appointment
        or booking your service with the convenience of just a tap is definitely
        everything that you could ask for!
      </p>
      <CaseImage :price="'3000'" :bg="'bookingsNappointments.jpg'" />
      <p class="offer">What we can offer</p>
      <p>
        Other than customer convenience and reduced staff workload, you might be
        wondering what other benefits an online reservation system can offer to
        your business.
      </p>
      <p>
        <b>Secure Online Booking Environment.</b> The right online booking and
        reservation system not only enables instant payment for your services
        but also ensures that all payments are kept entirely secured, helping to
        build trust within your business.
      </p>
      <p>
        <b>Fully Responsive Booking Platform.</b> Another major benefit of an online
        booking system is the range of devices that your customers can book
        from. This means that whether you’re booking from a smartphone, a
        tablet, a laptop, or from your desktop computer, you’re going to get a
        more convenient booking experience across multiple devices.
      </p>
      <p>
        <b>Accept Online Bookings 24/7.</b> Keep your booking channels open 24/7 and
        let your clients book their appointments out of business hours via
        multiple channels like your booking website, Facebook, Instagram, or
        Google Business Profile.
      </p>
      <p>
        <b>Custom Features.</b> Features like; Coupons & gift cards, product sale,
        membership, classes, promotion system, POS, Ticketing System, or you
        name it. An online booking system definitely provides seamless
        integration for a variety of tasks in all kinds of businesses.
      </p>
      <p>
        Online booking systems have a huge variety of practical applications,
        especially if your business is one that requires a customer booking
        system. The uses of online booking systems are manyfold, and that makes
        them ideal for businesses of all shapes and sizes. If your business
        takes bookings of any kind, Increment Technologies Inc. can definitely
        integrate that for you.
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