<template>
  <div>
    <div class="banner">
      <h1 class="title">Payroll System</h1>
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
        A Payroll System is one of the top necessities of a company. It is an important software that calculates payroll accurately in compliance with taxing authority. The very main purpose of a payroll system is to prepare a detailed salary record of all the employees in an organization, making it sure that it has the accurate computation of the working hours.
      </p>
      <p>
        Increment Technologies can and will achieve this system that accurately computes the salaries of the employees, can handle multi company transactions, provide detailed reports from payment transactions, and maintain employee profiles. We believe that Increment Technologies is the right software company that will surely provide you the solutions you need in your business.
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../../assets/img/bg-payroll.jpg");
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
}

p {
  text-align: justify;
  margin-bottom: 30px;
}
</style>