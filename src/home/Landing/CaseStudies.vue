<template>
  <div class="cw-banner" id="who-we-are">
    <div class="text-center mt-5">
        <h1 class="title" style="color:black;font-size:60px; margin-bottom: 5%">Case Studies</h1>
    </div>
   <div class="container mt-2">
      <div class="col-sm-12 d-flex">
        <div class="col-sm-3 m-0 mr-4" id="card">
            <div class="row">
              <img class="image" src="../../assets/img/Booking-and-Appointment.jpg">
            </div>
            <div class="row mt-2">
              <div class="col-sm-12" id="paragraph">
                <p>An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from the moment a customer decides for a booking date, preferred time, and pays for the booking, everything will be handled online. An efficient way to reduce workload, manpower, and the risk of double bookings.
                </p>
                <button class="button1">Read More</button>  
                <div class="price mt-3 p-2">
                  <label>Starting Price:</label>
                  <h4>$3,000</h4>
                </div>                
              </div>
            </div>
        </div>
        <div class="col-sm-3 m-0 mr-4" id="card">
          <div class="row">
            <img class="image" src="../../assets/img/Booking-bot.jpg">
          </div>
          <div class="row mt-2">
            <div class="col-sm-12" id="paragraph">
              <p>
                Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to plenty of customer inquiries. This is an advantage to business owners of not losing their potential customers just because of neglected orders. 
              </p>
              <button class="button1">Read More</button>  
                <div class="price mt-3 p-2">
                  <label>Starting Price:</label>
                  <h4>$1,000</h4>
                </div> 
            </div> 
          </div>  
        </div>
        <div class="col-sm-3 m-0 mr-4" id="card">
          <div class="row">
            <img class="image" src="../../assets/img/Company-Profile.jpg">
          </div>
          <div class="row mt-2">
            <div class="col-sm-12" id="paragraph">
              <p>
                Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied groups of people getting a general idea of what the company’s products or services are. One of the solutions to easily execute and build your company profile is through a website.  
              </p>  
              <button class="button1">Read More</button>  
                <div class="price mt-3 p-2">
                  <label>Starting Price:</label>
                  <h4>$700</h4>
                </div> 
            </div> 
          </div>
        </div>
        <div class="col-sm-3 m-0 mr-4" id="card">
          <div class="row">
            <img class="image" src="../../assets/img/Delivery-App.jpg">
          </div>
          <div class="row mt-2">
            <div class="col-sm-12" id="paragraph">
              <p>
                A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin integrations that would depend on the company’s qualifications of the application, thus, transforming the business into mobile applications, helps promote safety and convenience to customers and create hassle-free transactions.
              </p>    
              <button class="button1">Read More</button>  
                <div class="price mt-3 p-2">
                  <label>Starting Price:</label>
                  <h4>$7,000</h4>
                </div> 
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button class="button2">View More</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner{
  width: 100%;
  float: left;
  background: white;
  height: 100vh;
  margin-bottom: 35%;
  margin-top:4%;
}
.button{
  margin-top:-3%;
}
.text{
  width: 50%;
  float: left;
  position: relative;
  z-index: 1000;
  margin-left: 42%;
  margin-top: 100px;
  color: black;
}
.text .title{
  width: 100%;
  float: left;
}
.text .description{
  margin-top: 25px;
  width: 90%;
  margin-right: 10%;
  float: left;
  text-align: justify;
}
.image{
  max-width: 100%;
  max-height: 100%;
}

#card{
  border: solid 1px #E5E5E5;
  text-align: center;
}
#paragraph{
  text-align:center;
  font-size:15px;
  color: #000000;
  // height: 20%;
}
.button1{
  background-color: white;
  border: none;
  color: #BDBDBD !important;
  // padding: 15px 32px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px #E5E5E5;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  width: 120px;
  height:45px
}
.button2{
  background: #00E68A;
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
}
.price{
  border: 0.5px solid #3F0050;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px #00B89F;
  border-radius: 5px;
  width:150px;
  height: 80px;
  margin-left: 20%
}
h4{
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  text-align: center;
  color: #00B89F;
  margin-left: 18%;
  margin-top: -3%
}
@media screen and (max-width: 992px){
  .text{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title{
    text-align: center;
  }

  .image{
    position: relative;
    max-height: 100%;
    width: inherit;
  }
}

</style>
<script>
import ROUTER from 'src/router'
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
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
