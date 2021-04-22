<template>
  <div>
    <div class="banner">
      <h1 class="title">PAYMENT SYSTEM</h1>
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
        Payment system is the most essential part of a business. This needs to
        be accurate and secured to prevent risks in the future. One of the ways
        to prevent risks, is to secure a payment system in your own business
        wherein this is considered as an essential investment to meet your
        long-term goals.
      </p>
      <p>
        Increment Technologies, can help you create opportunities in your
        payment system by ensuring your payment transactions are secured and are
        based on the agreed terms. We can develop a software that can serve as a
        channel between an e-commerce and a bank that is robustly fraud
        protected and is a centralized software created exclusively for your
        organization. We, at Increment technologies, believed that we are the
        right company that could cater to your needs in finding software
        solutions for your business.
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../../assets/img/bg-payment.jpg");
  background-size: cover;
  height: 70vh;
  width: 100%;
  text-align: center;
  color: white;
  padding: 35vh 0;
}

.title {
  font-size: 50px;
  font-weight: 800;
  padding-bottom: 10px;
}

#start-price {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 10px;
}

#btn {
  background-color: #00e68a;
  color: white;
  //background: #00E68A;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: none;
  //color: white;
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
</style>
