<template>
    <div>
        <div class="banner">
            <img class="banner" :src="require('assets/img/casestudies-bg.jpg')">
            <h1 class="title"><b>Case Studies</b></h1>
        </div>
        <div class="cw-banner">
            <div class="row no-gutters">
        <span class="col-md-3" v-for="(item, index) in cases" :key="index">
          <center class="element">
             <img :src="item.src" class="image">
             <div class="mt-3">
            <p class="text"><b>{{ item.title }}</b></p>
            </div>
           <div class="p-3 rows"> <p class="paragraph">{{ item.desc }}
            </p>
           </div>
           <div class="mt-3">
                  <div class= "mb-3">
                    <button @click="redirect(item.links)" class="button1">Read More</button>
                  </div>
                  <div class="price mb-5">
                    <label>Starting Price:</label>
                    <br>
                    <h4>{{item.price}}</h4>
                  </div>
                </div>
          </center>
        </span>
      </div>
      </div>
    </div>
</template>
<script>
import ROUTER from 'src/router'
export default {
    mounted(){
  },
  data(){
    return {
     cases: [
        {
          src: require("assets/img/Booking-and-Appointment.jpg"),
          title: "Bookings and Appointments",
          desc:
            "An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from the moment a customer decides for a booking date, preferred time, and pays for the booking, everything will be handled online. An efficient way to reduce workload, manpower, and the risk of double bookings.",
          price: "$3,000",
          links: "case-studies/bookings-and-appointments",
          firstCard: true
        },

        {
          src: require("assets/img/Booking-bot.jpg"),
          title: "Booking Bot",
          desc:
            "Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to plenty of customer inquiries. This is an advantage to business owners of not losing their potential customers just because of neglected orders.",
          price: "$1,000",
          links: "case-studies/booking-bot",
          firstCard: false
        },
        {
          src: require("assets/img/Company-Profile.jpg"),
          title: "Company Profiling",
          desc:
            "Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied groups of people getting a general idea of what the company’s products or services are. One of the solutions to easily execute and build your company profile is through a website.",
          price: "$700",
          links: "case-studies/company-profiling",
          firstCard: false
        },
        {
          src: require("assets/img/Delivery-App.jpg"),
          title: "Delivery App",
          desc:
            "A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin integrations that would depend on the company’s qualifications of the application, thus, transforming the business into mobile applications, helps promote safety and convenience to customers and create hassle-free transactions.",
          price: "$7,000",
          links: "case-studies/delivery-app",
          firstCard: false
        },{
          src: require("assets/img/E-commerce-Solution.jpg"),
          title: "Ecommerce",
          desc:
            "Building an ecommerce website for your business is an important piece for your ecommerce strategy; making it easy for customers to visit you and avail of the products you offer to them.",
          price: "$2,000",
          links: "case-studies/e-commerce",
          firstCard: true
        },
        {
          src: require("assets/img/Employee-Management.jpg"),
          title: "Employee Management",
          desc:
            "The Employee Management System maintains the professional and personal details of the employees as well as the company itself, in an organized manner. It’s importance to the company is that it manages and lowers the burden or even pressure on the Human Resource Department and Business Managers.",
          price: "$7,000",
          links: "case-studies/employee-management-system",
          firstCard: false
        },
        {
          src: require("assets/img/Hotel-Management-System.jpg"),
          title: "Hotel Management",
          desc:
            "Hotel Management is about overseeing every operation such as distribution strategies, customer service, staff management, finance, marketing, and more. To integrate these factors into one, a unique solution must be strategically created.",
          price: "$7,000",
          links: "case-studies/hotel-management-system",
          firstCard: false},
        {
          src: require("assets/img/Inventory-Management.jpg"),
          title: "Inventory Management",
          desc:
            "Inventory Management System is a very important tool whether you are an established company or a start-up. This solution is a tool used by business owners to manage, track, and optimize their warehouse or inventory at the same time. It benefits your company by providing accurate purchase records, barcode identification, reports & sales history, sales forecast, and more.",
          price: "$7,000",
          links: "case-studies/inventory-management-system",
          firstCard: false   
        },{
          src: require("assets/img/Learning-Management-System.jpg"),
          title: "Learning System",
          desc:
            "A learning system is an essential platform for a school to provide for its students. Amidst the pandemic, students must continue to learn and keep building their knowledge even through online platforms. Giving opportunities to students, learning without being physically present in school and still enjoying a high-quality education they deserve.",
          price: "$5,000",
          links: "case-studies/learning-system",
          firstCard: true
        },
        {
          src: require("assets/img/Logbook-System.jpg"),
          title: "Logbook System",
          desc:
            "A Logbook System works as a daily record for business transactions. It is applicable to all businesses most especially with logistics, manufacturing, healthcare, hotels, schools, and many more. One of the things that most businesses aim, is the elimination of a manual system.",
          price: "$5,000",
          links: "case-studies/logbook-system",
          firstCard: false
        },
        {
          src: require("assets/img/Manufacturing-System.jpg"),
          title: "Manufacturing Management",
          desc:
            "Manufacturing Management is one of the solutions to effectively execute tasks by streamlining processes to be able to reduce cost. One of the most common tools in Manufacturing Management is to invest in an ERP (Enterprise Resource Planning) Software.",
          price: "$7,000",
          links: "case-studies/manufacturing-management-system",
          firstCard: false
        },
        {
          src: require("assets/img/Online-Enrollment.jpg"),
          title: "Online Enrollment",
          desc:
            "The Enrollment System generates an inflow of customers, technically referred to as, “students”. It has always been one of the most impressive factors of a school adapting to technological advancements such as getting easier access to enrollment, with hassle-free transactions.",
          price: "$7,000",
          links: "case-studies/online-enrollment-system",
          firstCard: false
        },{
          src: require("assets/img/Payment-System.jpg"),
          title: "Payment System",
          desc:
           "Payment system is the most essential part of a business. This needs to be accurate and secured to prevent risks in the future. One of the ways to prevent risks, is to secure a payment system in your own business wherein this is considered as an essential investment to meet your long-term goals. ",
          price: "$7,000",
          links: "case-studies/payment-system",
          firstCard: true
        },
        {
          src: require("assets/img/Payroll-System.jpg"),
          title: "Payroll System",
          desc:
            "A Payroll System is one of the top necessities of a company. It is an important software that calculates payroll accurately in compliance with taxing authority. The very main purpose of a payroll system is to prepare a detailed salary record of all the employees in an organization, making it sure that it has the accurate computation of the working hours.",
          price: "$7,000",
          links: "case-studies/payroll-system",
          firstCard: false
        },
        {
          src: require("assets/img/Real-Estate.jpg"),
          title: "Real Estate",
          desc:
            "Company profiling is very important especially when your goal to your business is to increase your online presence. In the Real Estate Industry, a company website is a must; considering this modernized era, a modern real estate firm should also adapt to the modern way of commercializing properties.",
          price: "$7,000",
          links: "case-studies/real-estate",
          firstCard: false
        },
        {
          src: require("assets/img/RFID.jpg"),
          title: "RFID System",
          desc:
            "RFID Systems are used in many industries and in a wide variety of applications. Imagine yourself being able to immediately locate everything you have misplaced or lost? This is what RFID technology can do. Most businesses invest in an RFID system to increase their employees’ productivity wherein they don’t have to be within line of sight of an item or asset to locate it.",
          price: "$7,000",
          links: "case-studies/rfid-system",
          firstCard: false
        },{
          src: require("assets/img/Translation.jpg"),
          title: "Translation System",
          desc:
            "One of the ways to help people understand other countries with different languages, is to understand their dialect first. A translation software helps people understand in depth of what other people are trying to communicate. It not just helps the community but could focus on molding a child’s knowledge towards understanding a language.",
          price: "$5,000",
          links: "case-studies/translation-system",
          firstCard: true
        },
        {
          src: require("assets/img/Transportation.jpg"),
          title: "Transportation System",
          desc:
            "What can a Software Development Company do with transportation? It can develop a high-quality fleet management system that could store information for public transportation, RFID system, and more.",
          price: "$7,000",
          links: "case-studies/transportation-system",
          firstCard: false   
        }]
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    },
    openWindow(url){
      window.open(url, '_BLANK')
    },
  }
}
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner{
    width: 100%;
    height: 350px;
    left: 0px;
    margin-bottom: 5%;
}
.title{
    color: white;
    font-size: 55px;
    text-align: center;
    margin-top: -18%;
}
.cw-banner {
  width: 100%;
  float:left;
  background: white;
  padding-left: 10%;
  padding-right:10%;
  margin-bottom:10%;
}

.text{
    font-size: 16px;
}
.button {
  margin-top: -3%;
  
}

.paragraph{
    font-size: 14px;
}

.image {
  max-width: 100%;;
  max-height: 100%;
}

.rows {
  margin-bottom:10%;
  height: 250px;
}
.button1 {
  background-color: white;
  border: none;
  color: #bdbdbd !important;
  // padding: 15px 32px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  outline-color: white;
  width: 120px;
  height: 45px;
}
.button2 {
  background: #00e68a;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-left: 42%;
  margin-right: 42%;
  margin-top: 10%;
  outline-color: white;
}
.price {
  border: 0.5px solid #3f0050;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px #00b89f;
  border-radius: 5px;
  width: 150px;
  height: 80px;
  margin-left:auto;
  margin-right:auto;
  
}
h4 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  // display: flex;
  text-align: center;
  color: #00b89f;

}
.element {
  border: 1px solid #00B89F;
  margin: 10px;
  height: auto;
}
@media screen and (max-width: 992px) {
  .text {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .rows {
  margin-bottom:20%;
  height: 300px;
}
// .text{
//     font-size: 22px;
// }
// .paragraph{
//     font-size: 20px;
// }
  .title {
    text-align: center;
    margin-top:-33%;
  }
  .image {
    position: relative;
    max-height: 100%;
    width: inherit;
  }
  #pad {
    //   margin-top:100%;
    height: 50%;
  }
  .price {
  border: 0.5px solid #3f0050;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px #00b89f;
  border-radius: 5px;
  width: 125px;
  height: 80px;
  margin-left:auto;
  margin-right:auto;
  
}
}
</style>

