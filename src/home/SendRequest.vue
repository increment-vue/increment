<template>
  <div class="cw-banner" id="send-request">
    <div class="text-center mt-5 p-5">
      <h1 class="title" style="font-size:50px;">
        <b>Drop Us A Line</b>
      </h1>
      <div>
        <p>
          Better yet, come see us in person! We love our customers, so feel free to visit during normal business hours.<br>
          You can contact us in our business hours through email: <a href="mailto:increment2020@gmail.com">increment2020@gmail.com</a> or call/message us <a href="tel:+639171837855">(+63) 9171837855</a>.<br>
          You can also set an appointment to <a href="https://calendly.com/incrementtech2020/services-offered" target="_blank">www.calendly.com/incrementtech2020</a> for a short discussion.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  width: 100%;
  float: left;
  background: white;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;
  height: 100vh;
}
.title {
  margin-top: 2%;
}

@media screen and (max-width: 992px) {
}
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
export default {
  mounted() {},
  data() {
    return {
      common: COMMON
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    }
  }
};
</script>
