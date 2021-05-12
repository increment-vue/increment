<template>
  <div class="cw-banner" id="send-request">
    <div class="container">
      <h1
        class="title"
        style="font-size: 50px; color: #3f0050; font-weight: 700"
      >
        Drop Us A Line!
      </h1>
      <div>
        <p>
          Better yet, come see us in person! We love our customers, so feel free
          to visit during normal business hours.<br />
          You can contact us in our business hours through email:
          <a href="mailto:increment2020@gmail.com">increment2020@gmail.com</a>
          or call/message us
          <a href="tel:+639171837855">(+63) 9171837855</a>.<br />
          You can also set an appointment in calendly for a short discussion.
        </p>
      </div>
      <div
        class="calendly-inline-widget"
        style="min-width: 300px; height: 70vh"
        data-url="https://calendly.com/incrementtech2020/services-offered"
      ></div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.2168207389841!2d123.9130143!3d10.3524954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2d9b9e99316c59d!2sUniversity%20of%20San%20Carlos%20-%20Talamban%20Campus!5e0!3m2!1sen!2sph!4v1618812110610!5m2!1sen!2sph"
          width="100%"
          height="400px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.cw-banner {
  width: 100%;
  float: left;
  background: white;
  min-height: 100vh;
  text-align: center;
}
.container {
  padding-bottom: 20vh;
  padding-top: 20vh;
}

iframe {
  margin-top: 5%;
}
a {
  color: #00b89f;
}

.return-to-top {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $primary;
  color: $white;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  line-height: 62px;
  text-align: center;
}

.fa-angle-up {
  color: $white !important;
}
.return-to-top:hover {
  cursor: pointer;
  color: $primary;
}
object {
  width: 100%;
  min-height: 60vh;
}
._3t7mZz3weV {
  background-color: white;
}
</style>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import Jquery from "jquery";
export default {
  mounted() {},
  data() {
    return {
      common: COMMON,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery("#send-request").offset().top,
        },
        500
      );
    },
  },
};
</script>
