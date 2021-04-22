<template>
  <div>
    <div>
      <img src="../../assets/img/bg-inventory.jpg" />
      <h1>Inventory Management</h1>
      <h2>Starting Price: $7,000</h2>
      <div class="container">
        <a
          href="https://calendly.com/incrementtech2020"
          type="button"
          class="btn btn-success custom"
          >Inquire Now!</a
        >
      </div>

      <p id="text">
        Inventory Management System is a very important tool whether you are an
        established company or a start-up. This solution is a tool used by
        business owners to manage, track, and optimize their warehouse or
        inventory at the same time. It benefits your company by providing
        accurate purchase records, barcode identification, reports & sales
        history, sales forecast, and more.
      </p>
      <p id="text1">
        Increment Technologies, create opportunities to achieve efficiency in
        your processes. Through Inventory Management, we can help you organize
        your warehouse management, tracking system, sales history, or with any
        qualifications you want to build in your own Inventory system, we can
        make it happen here at Increment. With our company’s skills and
        expertise, we ought to develop a software that is fit for your needs.
      </p>

      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img {
  height: 600px;
  width: 100%;
}
#text {
  margin-top: 130px;
  margin-left: 115px;
  margin-right: 115px;
  font-size: 16px;
}
#text1 {
  margin-top: 30px;
  margin-left: 115px;
  margin-right: 115px;
  font-size: 16px;
}

h1 {
  color: white;
  margin-top: 150px;
  position: absolute;
  left: 27%;
  right: 27%;
  top: 98px;
  /* font-family: Open Sans; */
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 68px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}
h2 {
  position: absolute;
  width: 329px;
  height: 34px;
  left: 37%;
  top: 320px;
  /* margin-top: 115px; */
  font-style: normal;
  font-size: 30px;
  line-height: 41px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.btn-success {
  color: #fff;
  background-color: #00e68a;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  outline: none;
  border: 0px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  margin-top: 180px;
  margin-left: 43%;
}
.container {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.custom:hover {
  background-color: #00e68a !important;
}
</style>