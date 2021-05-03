<template>
  <div>
    <div class="banner">
      <h1 class="title">BOOKINGS AND APPOINTMENTS</h1>
      <h3 id="start-price">Starting Price : $3,000</h3>
      <a
        href="https://calendly.com/incrementtech2020/services-offered"
        id="btn"
        type="button"
        >Inquire Now!</a
      >
    </div>
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
      <h5>What we can offer</h5>
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
        <b>Fully Responsive Booking Platform.</b> Another major benefit of an
        online booking system is the range of devices that your customers can
        book from. This means that whether you’re booking from a smartphone, a
        tablet, a laptop, or from your desktop computer, you’re going to get a
        more convenient booking experience across multiple devices.
      </p>
      <p>
        <b>Accept Online Bookings 24/7.</b> Keep your booking channels open 24/7
        and let your clients book their appointments out of business hours via
        multiple channels like your booking website, Facebook, Instagram, or
        Google Business Profile.
      </p>
      <p>
        <b>Custom Features.</b> Features like; Coupons & gift cards, product
        sale, membership, classes, promotion system, POS, Ticketing System, or
        you name it. An online booking system definitely provides seamless
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
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../../assets/img/bg-bookingsandappoinments.jpg");
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
