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
          <a href="tel:436-1622">436-1622</a>.<br />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801.6856177209382!2d123.90966111141876!3d10.323913839125852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999b33c3e8073%3A0x6e53cbaa3015872d!2sThe%20Meridian!5e0!3m2!1sen!2sph!4v1631842817594!5m2!1sen!2sph"
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
  left: 10px;
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
