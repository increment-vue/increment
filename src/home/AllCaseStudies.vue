<template>
  <div id="header">
    <div class="banner">
      <h1 class="title">Case Studies</h1>
    </div>
    <div class="container">
      <div style="color: white">Case Studies</div>
      <div class="row no-gutters">
        <span class="col-md-3" v-for="(item, index) in cases" :key="index">
          <center class="single-card">
            <span class="image-holder"><img :src="item.src" /></span>
            <h6>{{ item.title }}</h6>
            <div class="price">
              <label>Starting Price:</label>
              <br />
              <h4>{{ item.price }}</h4>
            </div>
            <p>{{ item.desc }}</p>
            <button @click="redirect(item.links)" class="button1">
              Read More
            </button>
          </center>
        </span>
      </div>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../assets/img/casestudies-bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  height: 60vh;
  width: 100%;
  float: left;
  text-align: center;
  color: white;
  padding: 30vh 0;
}
.title {
  font-size: 50px;
  font-weight: 800;
  padding-right: 10%;
  padding-left: 10%;
}

p {
  font-size: 14px;
  padding-right: 8px;
  padding-left: 8px;
  min-height: 300px;
}

h6 {
  font-weight: 700;
  padding: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.row {
  margin-top: 10vh;
  text-align: center;
}

.single-card {
  border: 1px solid $secondary;
  margin: 10px;
  min-height: 60vh;
}

@media only screen and (max-width: 500px) {
  .single-card {
    border: 1px solid $secondary;
    margin: 10px;
    min-height: 50vh;
  }

  p {
    font-size: 14px;
    padding-right: 8px;
    padding-left: 8px;
    min-height: 200px;
  }
}

.container {
  margin-top: 30px;
  padding-top: 20vh;
  padding-bottom: 20vh;
  text-align: center;
  color: black;
}

.image-holder {
  width: 100%;
  height: 300px;
}

img {
  height: 100%;
  width: 100%;
}

.button1 {
  background-color: white;
  border: none;
  color: #bdbdbd !important;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  outline-color: white;
  padding: 8px 15px;
  margin-bottom: 15px;
}
.price {
  border: 0.5px solid #3f0050;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px #00b89f;
  border-radius: 5px;
  width: 150px;
  height: 85px;
  padding: 8px;
  margin-bottom: 3vh;
}

label {
  font-size: 12px;
}

h4 {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: #00b89f;
}
@media only screen and (max-width: 600px) {
  .title {
    font-size: 40px;
    font-weight: 800;
    padding-right: 10%;
    padding-left: 10%;
  }
}

.single-card {
  border: 1px solid $secondary;
  margin: 10px;
  min-height: 60vh;
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
import ROUTER from "src/router";
import Jquery from "jquery";
export default {
  data() {
    return {
      cases: [
        {
          src: require("assets/img/Booking-and-Appointment.jpg"),
          title: "Bookings and Appointments",
          desc:
            "An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from the moment a customer decides for a booking date, preferred time, and pays for the booking, everything will be handled online. An efficient way to reduce workload, manpower, and the risk of double bookings.",
          price: "$3,000",
          links: "case-studies/bookings-and-appointments",
        },
        {
          src: require("assets/img/Booking-bot.jpg"),
          title: "Booking Bot",
          desc:
            "Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to plenty of customer inquiries. This is an advantage to business owners of not losing their potential customers just because of neglected orders.",
          price: "$1,000",
          links: "case-studies/booking-bot",
        },
        {
          src: require("assets/img/Company-Profile.jpg"),
          title: "Company Profiling",
          desc:
            "Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied groups of people getting a general idea of what the company’s products or services are. One of the solutions to easily execute and build your company profile is through a website.",
          price: "$700",
          links: "case-studies/company-profiling",
        },
        {
          src: require("assets/img/Delivery-App.jpg"),
          title: "Delivery App",
          desc:
            "A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin integrations that would depend on the company’s qualifications of the application, thus, transforming the business into mobile applications, helps promote safety and convenience to customers and create hassle-free transactions.",
          price: "$7,000",
          links: "case-studies/delivery-app",
        },
        {
          src: require("assets/img/E-commerce-Solution.jpg"),
          title: "Ecommerce",
          desc:
            "Building an ecommerce website for your business is an important piece for your ecommerce strategy; making it easy for customers to visit you and avail of the products you offer to them.",
          price: "$2,000",
          links: "case-studies/e-commerce",
        },
        {
          src: require("assets/img/Employee-Management.jpg"),
          title: "Employee Management",
          desc:
            "The Employee Management System maintains the professional and personal details of the employees as well as the company itself, in an organized manner. It’s importance to the company is that it manages and lowers the burden or even pressure on the Human Resource Department and Business Managers.",
          price: "$7,000",
          links: "case-studies/employee-management-system",
        },
        {
          src: require("assets/img/Hotel-Management-System.jpg"),
          title: "Hotel Management",
          desc:
            "Hotel Management is about overseeing every operation such as distribution strategies, customer service, staff management, finance, marketing, and more. To integrate these factors into one, a unique solution must be strategically created.",
          price: "$7,000",
          links: "case-studies/hotel-management-system",
        },
        {
          src: require("assets/img/Inventory-Management.jpg"),
          title: "Inventory Management",
          desc:
            "Inventory Management System is a very important tool whether you are an established company or a start-up. This solution is a tool used by business owners to manage, track, and optimize their warehouse or inventory at the same time. It benefits your company by providing accurate purchase records, barcode identification, reports & sales history, sales forecast, and more.",
          price: "$7,000",
          links: "case-studies/inventory-management-system",
        },
        {
          src: require("assets/img/Learning-Management-System.jpg"),
          title: "Learning System",
          desc:
            "A learning system is an essential platform for a school to provide for its students. Amidst the pandemic, students must continue to learn and keep building their knowledge even through online platforms. Giving opportunities to students, learning without being physically present in school and still enjoying a high-quality education they deserve.",
          price: "$5,000",
          links: "case-studies/learning-system",
        },
        {
          src: require("assets/img/Logbook-System.jpg"),
          title: "Logbook System",
          desc:
            "A Logbook System works as a daily record for business transactions. It is applicable to all businesses most especially with logistics, manufacturing, healthcare, hotels, schools, and many more. One of the things that most businesses aim, is the elimination of a manual system.",
          price: "$5,000",
          links: "case-studies/logbook-system",
        },
        {
          src: require("assets/img/Manufacturing-System.jpg"),
          title: "Manufacturing Management",
          desc:
            "Manufacturing Management is one of the solutions to effectively execute tasks by streamlining processes to be able to reduce cost. One of the most common tools in Manufacturing Management is to invest in an ERP (Enterprise Resource Planning) Software.",
          price: "$7,000",
          links: "case-studies/manufacturing-management-system",
        },
        {
          src: require("assets/img/Online-Enrollment.jpg"),
          title: "Online Enrollment",
          desc:
            "The Enrollment System generates an inflow of customers, technically referred to as, “students”. It has always been one of the most impressive factors of a school adapting to technological advancements such as getting easier access to enrollment, with hassle-free transactions.",
          price: "$7,000",
          links: "case-studies/online-enrollment-system",
        },
        {
          src: require("assets/img/Payment-System.jpg"),
          title: "Payment System",
          desc:
            "Payment system is the most essential part of a business. This needs to be accurate and secured to prevent risks in the future. One of the ways to prevent risks, is to secure a payment system in your own business wherein this is considered as an essential investment to meet your long-term goals. ",
          price: "$7,000",
          links: "case-studies/payment-system",
        },
        {
          src: require("assets/img/Payroll-System.jpg"),
          title: "Payroll System",
          desc:
            "A Payroll System is one of the top necessities of a company. It is an important software that calculates payroll accurately in compliance with taxing authority. The very main purpose of a payroll system is to prepare a detailed salary record of all the employees in an organization, making it sure that it has the accurate computation of the working hours.",
          price: "$7,000",
          links: "case-studies/payroll-system",
        },
        {
          src: require("assets/img/Real-Estate.jpg"),
          title: "Real Estate",
          desc:
            "Company profiling is very important especially when your goal to your business is to increase your online presence. In the Real Estate Industry, a company website is a must; considering this modernized era, a modern real estate firm should also adapt to the modern way of commercializing properties.",
          price: "$7,000",
          links: "case-studies/real-estate",
        },
        {
          src: require("assets/img/RFID.jpg"),
          title: "RFID System",
          desc:
            "RFID Systems are used in many industries and in a wide variety of applications. Imagine yourself being able to immediately locate everything you have misplaced or lost? This is what RFID technology can do. Most businesses invest in an RFID system to increase their employees’ productivity wherein they don’t have to be within line of sight of an item or asset to locate it.",
          price: "$7,000",
          links: "case-studies/rfid-system",
        },
        {
          src: require("assets/img/Translation.jpg"),
          title: "Translation System",
          desc:
            "One of the ways to help people understand other countries with different languages, is to understand their dialect first. A translation software helps people understand in depth of what other people are trying to communicate. It not just helps the community but could focus on molding a child’s knowledge towards understanding a language.",
          price: "$5,000",
          links: "case-studies/translation-system",
        },
        {
          src: require("assets/img/Transportation.jpg"),
          title: "Transportation System",
          desc:
            "What can a Software Development Company do with transportation? It can develop a high-quality fleet management system that could store information for public transportation, RFID system, and more.",
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
