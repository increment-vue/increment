<template>
  <div>
    <div class="banner">
      <h1 class="title">ONLINE ENROLLMENT</h1>
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
        The Enrollment System generates an inflow of customers, technically
        referred to as, “students”. It has always been one of the most
        impressive factors of a school adapting to technological advancements
        such as getting easier access to enrollment, with hassle-free
        transactions.
      </p>
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
.banner {
  background-image: url("../../assets/img/bg-onlineenrol.jpg");
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
