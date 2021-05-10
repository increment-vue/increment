<template>
  <div class="cw-banner" id="case-studies">
    <div class="text-center mt-5 mb-5">
      <h1 class="title" style="color:black; font-size:60px;">Case Studies</h1>
    </div>
    <div class="mt-2">
      <div class="col-sm-12 d-flex">
        <div class="col-sm-3" v-for="(item, i) in cases" :key="i" :index="i" id="card">
          <div class="rows">
            <img :src="item.src" class="image">
              <div class="description">
                <div class="paragraph">
                  <p class="mt-2" style="font-size:16px">
                    <b>{{item.title}}</b>
                  </p>
                  <p style="font-size:14px">{{item.desc}}</p>
                </div>
                <div class="mt-3">
                  <div class= "mb-3">
                    <button @click="redirect(item.links)" class="button1">Read More</button>
                  </div>
                  <div class="price">
                    <label>Starting Price:</label>
                    <br>
                    <h4>{{item.price}}</h4>
                  </div>
                </div>
              </div>
            </div>     
        </div>
      </div>
      <div class="button">
        <button @click="redirect('case-studies')" class="button2">View More</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  width: 100%;
  float:left;
  background: white;
  padding-left: 10%;
  padding-right:10%;
  margin-bottom:10%;
}
.button {
  margin-top: -3%;
  
}

.image {
  max-width: 100%;;
  max-height: 100%;
}

.rows {
  border: solid 1px #00b89f;
  text-align: center;
}
.paragraph {
  text-align: center;
  font-size: 15px;
  color: #000000;
  height: 50vh;
  // height: 20%;
}
.description{
    padding: 5%;
    margin-bottom: 10%;
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

@media only screen and (min-width: 280px) {
  .cw-banner {
    width: 100%;
    height: auto;
  }

}

@media only screen and (min-width: 280px) {
  .cw-banner {
    width: 100%;
    height: auto;
  }

}

@media only screen and (min-width: 992px) {
  .text {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title {
    text-align: center;
  }

  .image {
    position: relative;
    max-height: 100%;
    width: inherit;
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
 .paragraph {
  text-align: center;
  font-size: 15px;
  color: #000000;
  height: 50vh;
  // padding-bottom:10%;
}
}
</style>
<script>
import ROUTER from 'src/router'
import COMMON from 'src/common.js'
export default {
  data(){
    return{
      cases:[{
        src: require("assets/img/Booking-and-Appointment.jpg"),
        title: "Bookings and Appointments",
        desc: "An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from the moment a customer decides for a booking date, preferred time, and pays for the booking, everything will be handled online. An efficient way to reduce workload, manpower, and the risk of double bookings.",
        price:"$3,000",
        links:"case-studies/bookings-and-appointments",
        firstCard: true
        },
        
        {
        src: require("assets/img/Booking-bot.jpg"),
        title: "Booking Bot",
        desc: "Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to plenty of customer inquiries. This is an advantage to business owners of not losing their potential customers just because of neglected orders.",
        price:"$1,000",
        links:"case-studies/booking-bot",
        firstCard: false},
        {
        src: require("assets/img/Company-Profile.jpg"),
        title: "Company Profiling",
        desc: "Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied groups of people getting a general idea of what the company’s products or services are. One of the solutions to easily execute and build your company profile is through a website.",
        price:"$700",
        links:"case-studies/company-profiling",
        firstCard: false},
        {  
        src: require("assets/img/Delivery-App.jpg"),
        title: "Delivery App",
        desc: "A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin integrations that would depend on the company’s qualifications of the application, thus, transforming the business into mobile applications, helps promote safety and convenience to customers and create hassle-free transactions.",
        price:"$7,000",
        links:"case-studies/delivery-app",
        firstCard: false
      }]
    }
  },
  mounted(){
  },
  datas(){
    return {
      common: COMMON
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    }
  }
}
</script>
