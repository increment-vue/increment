<template>
  <div class="banner" id="testimonials">
    <div class="container">
      <h1 class="title">Case Studies</h1>
      <div class="row no-gutters">
        <span class="col-md-3" v-for="(item, index) in cases" :key="index">
          <center class="single-card">
            <span class="image-holder"><img :src="item.src" /></span>
            <h6>{{ item.title }}</h6>
            <p>{{ item.desc }}</p>
            <button @click="redirect(item.links)" class="button1">
              Read More
            </button>
            <div class="price">
              <label>Starting Price:</label>
              <br />
              <h4>{{ item.price }}</h4>
            </div>
          </center>
        </span>
      </div>
      <button @click="redirect('case-studies')" id="btn">
        View More
        <i
          class="fa fa-arrow-right"
          style="margin-left: 10px; font-size: 16px"
        ></i>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: white;
  min-height: 100vh;
  float: left;
  width: 100%;
}

.title {
  font-weight: 700;
  font-size: 50px;
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
.container {
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
#btn {
  background-color: #00e68a;
  color: white;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: none;
  padding: 15px 30px;
  text-align: center;
  margin-top: 12vh;
  font-weight: 700;
}
</style>
<script>
import ROUTER from "src/router";
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