<template>
  <div>
    <div class="image"></div>
    <h1 class="title"><b>Booking Bot</b></h1>
    <h3 style="text-align: center; color: white">Starting Price : $1,000</h3>
    <a
      href="https://calendly.com/incrementtech2020/services-offered"
      id="btn"
      type="button"
      >Inquire Now!</a
    >
    <div class="body">
      <br />
      <br />
      <p>
        According to Colleen Egan from Squareup, 52% of the consumers discovered
        new businesses on Facebook. Based on the survey from Statista, as of
        January 2020, there are 96% of the local population in the Philippines
        that have accessed Facebook. With this data, Facebook has proven that
        they are one of the most powerful marketing tools for start-up
        businesses.
      </p>
      <br />
      <br />
      <p>
        Start-up businesses always create facebook pages for updates on their
        services and products, that’s why Increment Technologies develop an
        application built-in to your Facebook pages, called Chatbot. Chatbot is
        an automated chat system technically built to Facebook pages so that
        business owners would have less hassle in replying to bulk orders or to
        plenty of customer inquiries. This is an advantage to business owners of
        not losing their potential customers just because of neglected orders.
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.image {
  background-image: url(../../assets/img/bg-bookingbot.jpg);
  height: 600px;
  width: 100%;
}
.body {
  margin-top: 50px;
  text-align: justify;
}
.title {
  margin-top: -200px;
  text-align: center;
  color: white;
}
#btn {
  margin-left: 45%;
  background-color: #00e68a;
  color: white;
  //background: #00E68A;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: none;
  //color: white;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
}
</style>