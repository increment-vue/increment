<template>
  <div>
    <div class="iamge"></div>
    <h1 class="title"><b>Online Enrollment</b></h1>
    <h3 style="text-align: center; color: white">Starting Price : $7,000</h3>
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
        The Enrollment System generates an inflow of customers, technically
        referred to as, “students”. It has always been one of the most
        impressive factors of a school adapting to technological advancements
        such as getting easier access to enrollment, with hassle-free
        transactions.
      </p>
      <br />
      <br />
      <p>
        Increment Technologies Inc., offers an enrollment system to schools
        exclusively for the organization’s enrollment transactions. Where
        students and teachers will have their own accounts that they can freely
        view their class schedules, activities and test scores, e-library, and
        assignments. We will also add parent's portal so that parents may
        monitor their child's progress in school activities, and be reminded by
        important announcements and meetings organized by the school.
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.image {
  background-image: url(../../assets/img/bg-onlineenrol.jpg);
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