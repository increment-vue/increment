<template>
  <div>
    <div class="banner" id="header">
      <breadCrumbs :title="'CASE STUDIES'" />
    </div>

    <div class="section-container">
      <p>
        With over 5 years of experience, Increment Technologies Inc. specializes
        in Website Development, Web App Development, Mobile App Development, Web
        Design, and Web Hosting to clients sourced locally and internationally.
        The following case studies where the kind of systems our developer’s can
        work to provide solutions to every client’s needs.
      </p>
      <span v-for="(item, index) in cases" :key="index">
        <Cards
          :icon="item.icon"
          :title="item.title"
          :price="item.price"
          :description="item.description"
          :links="item.links"
        />
      </span>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";

.banner {
  height: 35vh;
  width: 100%;
  float: left;
  color: white;
}

p {
  text-align: justify;
}
.section-container {
  width: 90% !important;
  margin-left: 5% !important;
  margin-right: 5% !important;
  min-height: 100vh !important;
  padding-top: 35vh;
  padding-bottom: 450vh !important;
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
@media screen and (max-width: 1024px) {
  .card {
    height: 570px !important;
  }
  p {
    height: 200px;
  }
}
@media screen and (max-width: 992px) {
  .card {
    height: 550px !important;
  }
}
@media screen and (max-width: 768px) {
  .card {
    height: 640px !important;
  }
}
@media screen and (max-width: 425px) {
  .card {
    width: 45%;
    // height: 600px !important;
  }
}
@media screen and (max-width: 375px) {
  .card{
    height: 630px !important;
  }
}
@media screen and (max-width: 320px) {
  .card{
    width: 46%;
    height: 680px !important;
  }
}
</style>
<script>
import ROUTER from "src/router";
import Cards from "src/home/generic/case-studies-card.vue";
import breadCrumbs from "src/home/generic/breadCrumbs.vue";
import COLORS from "src/assets/style/colors.js";
import {
  faCalendarDay,
  faRobot,
  faBuilding,
  faGifts,
  faShoppingCart,
  faIdCard,
  faHotel,
  faChalkboardTeacher,
  faBook,
  faWarehouse,
  faGraduationCap,
  faMoneyCheckAlt,
  faMoneyBillWave,
  faHome,
  faWifi,
  faTaxi,
  faLanguage,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import Jquery from "jquery";
export default {
  components: {
    Cards,
    breadCrumbs,
  },
  data() {
    return {
      colors: COLORS,
      cases: [
        {
          icon: faCalendarDay,
          title: "Bookings and Appointments",
          description:
            "An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from...",
          price: "$3,000",
          links: "case-studies/bookings-and-appointments",
        },
        {
          icon: faRobot,
          title: "Booking Bot",
          description:
            "Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to plenty...",
          price: "$1,000",
          links: "case-studies/booking-bot",
        },
        {
          icon: faBuilding,
          title: "Company Profiling",
          description:
            "Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied...",
          price: "$700",
          links: "case-studies/company-profiling",
        },
        {
          icon: faGifts,
          title: "Delivery App",
          description:
            "A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin integrations...",
          price: "$7,000",
          links: "case-studies/delivery-app",
        },
        {
          icon: faShoppingCart,
          title: "Ecommerce",
          description:
            "Building an ecommerce website for your business is an important piece for your ecommerce strategy; making it easy for customers to visit you and avail of the p...",
          price: "$2,000",
          links: "case-studies/e-commerce",
        },
        {
          icon: faIdCard,
          title: "Employee Management",
          description:
            "The Employee Management System maintains the professional and personal details of the employees as well as the company itself, in an organized manner. It’s imp...",
          price: "$7,000",
          links: "case-studies/employee-management-system",
        },
        {
          icon: faHotel,
          title: "Hotel Management",
          description:
            "Hotel Management is about overseeing every operation such as distribution strategies, customer service, staff management, finance, marketing, and more. To inte...",
          price: "$7,000",
          links: "case-studies/hotel-management-system",
        },
        {
          icon: faTasks,
          title: "Inventory Management",
          description:
            "Inventory Management System is a very important tool whether you are an established company or a start-up. This solution is a tool used by business owners to m...",
          price: "$7,000",
          links: "case-studies/inventory-management-system",
        },
        {
          icon: faChalkboardTeacher,
          title: "Learning System",
          description:
            "A learning system is an essential platform for a school to provide for its students. Amidst the pandemic, students must continue to learn and keep building the...",
          price: "$5,000",
          links: "case-studies/learning-system",
        },
        {
          icon: faBook,
          title: "Logbook System",
          description:
            "A Logbook System works as a daily record for business transactions. It is applicable to all businesses most especially with logistics, manufacturing, healthcar...",
          price: "$5,000",
          links: "case-studies/logbook-system",
        },
        {
          icon: faWarehouse,
          title: "Manufacturing Management",
          description:
            "Manufacturing Management is one of the solutions to effectively execute tasks by streamlining processes to be able to reduce cost. One of the most common tools...",
          price: "$7,000",
          links: "case-studies/manufacturing-management-system",
        },
        {
          icon: faGraduationCap,
          title: "Online Enrollment",
          description:
            "The Enrollment System generates an inflow of customers, technically referred to as, “students”. It has always been one of the most impressive factors of a scho...",
          price: "$7,000",
          links: "case-studies/online-enrollment-system",
        },
        {
          icon: faMoneyCheckAlt,
          title: "Payment System",
          description:
            "Payment system is the most essential part of a business. This needs to be accurate and secured to prevent risks in the future. One of the ways to prevent risks...",
          price: "$7,000",
          links: "case-studies/payment-system",
        },
        {
          icon: faMoneyBillWave,
          title: "Payroll System",
          description:
            "A Payroll System is one of the top necessities of a company. It is an important software that calculates payroll accurately in compliance with taxing authority...",
          price: "$7,000",
          links: "case-studies/payroll-system",
        },
        {
          icon: faHome,
          title: "Real Estate",
          description:
            "Company profiling is very important especially when your goal to your business is to increase your online presence. In the Real Estate Industry, a company webs...",
          price: "$7,000",
          links: "case-studies/real-estate",
        },
        {
          icon: faWifi,
          title: "RFID System",
          description:
            "RFID Systems are used in many industries and in a wide variety of applications. Imagine yourself being able to immediately locate everything you have misplaced...",
          price: "$7,000",
          links: "case-studies/rfid-system",
        },
        {
          icon: faLanguage,
          title: "Translation System",
          description:
            "One of the ways to help people understand other countries with different languages, is to understand their dialect first. A translation software helps people u...",
          price: "$5,000",
          links: "case-studies/translation-system",
        },
        {
          icon: faTaxi,
          title: "Transportation System",
          description:
            "What can a Software Development Company do with transportation? It can develop a high-quality fleet management system that could store information for public t...",
          price: "$7,000",
          links: "case-studies/transportation-system",
        },
      ],
    };
  },
  mounted() {
    this.scrollTop();
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery("#header").offset().top,
        },
        500
      );
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
