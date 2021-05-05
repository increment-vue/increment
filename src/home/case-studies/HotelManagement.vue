<template>
  <div>
    <div class="banner">
      <h1 class="title">HOTEL MANAGEMENT</h1>
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
        Hotel Management is about overseeing every operation such as
        distribution strategies, customer service, staff management, finance,
        marketing, and more. To integrate these factors into one, a unique
        solution must be strategically created.
      </p>
      <p>
        Increment Technologies Inc., has seen these factors happening in a Hotel
        Management System. Integrating a useful hotel management software would
        mean efficiency and convenience to the management itself. A software
        exclusively built for the hotel and hospitality industry would provide
        an easier way of tracking transactions, creating reservations,
        scheduling, and improving customer service experience. Another upside in
        having a software built for the organization, is to have ease of access
        to documents, convenient tracking of financial activities, and
        ultimately save physical storage resources, as well as saving time on
        your traditional day-to-day processes; thus, creating an opportunity for
        the organization to grow efficiently and effectively. Increment
        Technologies Inc., can help make this vision into a reality; with an
        excellent team of expert developers, we can integrate features from
        account management down to financial management making it a hassle-free
        system.
      </p>
      <p>
        The right hotel management system will definitely put you in control of
        your business whether it may be for your small boutique hotel, bed and
        breakfast, or hostel having a few rooms.
      </p>
      <h5>What we can offer</h5>
      <p>
        A good hotel management system gives you the support you need to be
        flawless in the operational areas that matter most especially to your
        staff and guests. Increment Technologies Inc., helps you meet those
        expectations by providing:
      </p>
      <p>
        <b>An online booking engine. </b>. Guests can book their reservations on
        your website rather than calling. An online booking system empowers
        guests and gives staff more time away from the phone to handle other
        priorities.
      </p>
      <p>
        <b>Synchronized pricing and availability.</b> One of the major problems
        with manual inventory management is noncompetitive pricing and
        availability. Inefficiencies and risks happen when the hotel staff takes
        a phone booking and manually reserves the room, making it unavailable to
        other guests. How confusing can it be? Especially to the hotel
        reservation staff during job turnovers for shifting schedules Sometimes,
        a channel may be overlooked, leading to double-bookings – and displeased
        guests. Since inventory on an HMS with a channel manager is synched from
        a central pool, it’s always up-to-date. No more double bookings!
      </p>
      <p>
        <b>Localization.</b>.In order to attract more guests, you need to
        consider international visitors and make the booking process easier for
        speakers of other languages. Offering a booking path in multiple
        languages gives your property a global appeal that broadens your
        demographics.
      </p>
      <p>
        <b>Flexible payment options.</b> You can set up a subscription or
        donation model or allow customers to make multiple payments. Retaining
        subscriptions is a quick automation with our dunning process feature.
      </p>
      <p>
        <b>An intuitive interface that’s user-friendly.</b>It just makes sense –
        and works in the way that you would expect. For example, having a
        unified calendar view with drag-and-drop functionality that allows staff
        to easily assign rooms.
      </p>
      <p>
        <b>Reports that reduce errors and manual busywork.</b> With the proper
        HMS, you can eliminate the need for your staff to spend an entire shift
        in a spreadsheet or having to write out reports by hand. Instead, your
        team can focus on analyzing the reports prepared by your HMS so they can
        identify trends and make action plans.
      </p>
      <p>
        <b>Housekeeping management.</b>. The front desk should be able to view
        the status of each room right in the HMS dashboard and have the ability
        to assign housekeepers to prioritize cleaning. This visibility reduces
        communication lapses and helps staff be more efficient.
      </p>
      <p>
        There is no doubt that a useful hotel management system is a necessary
        ally for upscaling your business. Capable HMS provides peace of mind and
        helps keep things under control ensuring that you make a good and
        memorable lasting impression to your guests and at the same time
        providing a greater work and life balance.
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
  background-image: url("../../assets/img/bg-hotelmngmnt.jpg");
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
