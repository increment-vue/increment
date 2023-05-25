<template>
  <div>
    <BreadCrumbs :title="'HOTEL MANAGEMENT'" />
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
      <CaseImage :price="'15,000'" :bg="'hotel.jpg'" />
      <p>
        The right hotel management system will definitely put you in control of
        your business whether it may be for your small boutique hotel, bed and
        breakfast, or hostel having a few rooms.
      </p>
      <p class="offer">What we can offer</p>
      <p>
        A good hotel management system gives you the support you need to be
        flawless in the operational areas that matter most especially to your
        staff and guests. Increment Technologies Inc., helps you meet those
        expectations by providing:
      </p>
      <p>
        <b>An online booking engine.</b> Guests can book their reservations on
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
        <b>Localization.</b> In order to attract more guests, you need to
        consider international visitors and make the booking process easier for
        speakers of other languages. Offering a booking path in multiple
        languages gives your property a global appeal that broadens your
        demographics.
      </p>
      <p>
        <b>An intuitive interface that’s user-friendly.</b> It just makes sense
        – and works in the way that you would expect. For example, having a
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
        <b>Housekeeping management.</b> The front desk should be able to view
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
