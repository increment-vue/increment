<template>
  <div class="body" id="case-studies">
    <div class="section-container">
      <h2>CASE STUDIES</h2>
      <p>
        With over 5 years of experience, Increment Technologies Inc. provides
        innovative productsand services from various categories in accordance to
        the client's needs
        <!-- <img
          src="../../assets/gif/case-study-top.gif"
          class="gif-image top-image"
        /> -->
      </p>
      <!-- generic case studies cards -->
      <Cards :cases="cases" />
      <roundBtn
        :text="'View More'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon="'fa fa-angle-right'"
        :route="'/case-studies'"
        :styles="{
          float: 'right',
          backgroundColor: colors.white,
          marginBottom: '150px',
          marginTop: '20px',
          color: colors.green,
          borderColor: colors.green,
        }"
        :hoverStyles="{
          float: 'right',
          marginBottom: '150px',
          marginTop: '20px',
          backgroundColor: colors.white + '!important',
          color: colors.purple,
          borderColor: colors.purple,
        }"
      />
      <img
        src="../../assets/gif/case-study-bottom.gif"
        class="gif-image"
        style="float: left"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.body {
  background-color: $white !important;
  width: 100% !important;
  float: left !important;
}
.section-container {
  width: 90% !important;
  margin-left: 5% !important;
  margin-right: 5% !important;
  min-height: 100vh !important;
  padding-top: 10vh; //20vh
  padding-bottom: 5vh; //20vh
  text-align: center;
}
p{
  margin: auto;
  width: 90%;
}
h2 {
  color: $primary;
}
// .top-image {
//   float: right;
//   margin-top: -45vh;
// }
.card:hover {
  border: double 5px transparent;
  .button1 {
    color: $purple;
  }
  .price {
    background-color: $purple;
  }
  .font-awesome-icon {
    color: $secondary;
  }
}
.gif-image {
  // z-index: 1;
  // position: relative;
  width: 20%;
  height: auto !important;
}

// button.btn{
//   margin: 100px !important;;
// }
@media screen and (max-width: 1024px) {
  button.btn {
    margin-right: 20% !important;
    float: unset !important;
  }
}
</style>
<script>
import ROUTER from "src/router";
import roundBtn from "src/home/generic/roundBtn.vue";
import Cards from "src/home/generic/case-studies-card.vue";
import COLORS from "src/assets/style/colors.js";
import {
  faCalendarDay,
  faRobot,
  faBuilding,
  faGifts,
} from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    Cards,
    roundBtn,
  },
  data() {
    return {
      colors: COLORS,
      cases: [
        {
          icon: faCalendarDay,
          title: "Bookings and Appointments",
          description:
            "An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from ...",
          price: "$3,000",
          links: "case-studies/bookings-and-appointments",
        },
        {
          icon: faRobot,
          title: "Booking Bot",
          description:
            "Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to pl...",
          price: "$1,000",
          links: "case-studies/booking-bot",
        },
        {
          icon: faBuilding,
          title: "Company Profiling",
          description:
            "Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied ...",
          price: "$700",
          links: "case-studies/company-profiling",
        },
        {
          icon: faGifts,
          title: "Delivery App",
          description:
            "A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin inte...",
          price: "$7,000",
          links: "case-studies/delivery-app",
        },
      ],
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>