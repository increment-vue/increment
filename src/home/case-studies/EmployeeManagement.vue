<template>
  <div>
    <div class="banner">
      <h1 class="title">Employee Management</h1>
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
        The Employee Management System maintains the professional and personal details of the employees as well as the company itself, in an organized manner. It’s importance to the company is that it manages and lowers the burden or even pressure on the Human Resource Department and Business Managers. This does not just benefit the established companies, but also those who are managing their business alone, with a starting number of workforce; since start-up business needs to be taken care and monitored in order for it to expand.
      </p>
      <p>
        Increment Technologies, exclusively develops a software for Employee Management that would benefit the company in terms of the following: employee monitoring, fewer compliance risk, minimizing manual errors, higher productivity, lower cost, and monitoring of working hours. As a business, your number one asset is your employees, thus making sure that they are properly managed especially when they are increasing, having a proper software or system would definitely ease the stress.
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../../assets/img/bg-employeemngmt.jpg");
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