<template>
  <div>
    <div class="banner">
      <h1 class="title">E-COMMERCE</h1>
      <h3 id="start-price">Starting Price : $2,000</h3>
      <a
        href="https://calendly.com/incrementtech2020/services-offered"
        id="btn"
        type="button"
        >Inquire Now!</a
      >
    </div>
    <div class="container">
      <p>
        Increment Technologies Inc., takes pride in building e-Commerce
        websites. We have partnered with trusted brands and have successfully
        accomplished their qualifications of the project; from showcasing their
        products down to what is expected of an ecommerce website - the checkout
        features.
      </p>
      <p>
        Building an ecommerce website for your business is an important piece
        for your ecommerce strategy; making it easy for customers to visit you
        and avail of the products you offer to them. Increment Technologies
        Inc., develops an ecommerce website application with the basic features
        such as account management, product features, payment methods,
        locations, and other plugin features that you can integrate or add up
        for the qualifications of your website, wherein Increment can definitely
        deliver.
      </p>
      <h5>What we can offer</h5>
      <p>
        <b>Promote your page. </b> Put your product in front of your customers,
        right where they are – social media, paid ads, your blog, email, and
        more.
      </p>
      <p>
        <b>Showcase your product.</b> Another major benefit of an online booking
        system is the range of devices that your customers can book from. This
        means that whether you’re booking from a smartphone, a tablet, a laptop,
        or from your desktop computer, you’re going to get a more convenient
        booking experience across multiple devices.
      </p>

      <p>
        <b>Boost your sales.</b>. Powerful features, such as a 1-page system to
        help you convert visitors, smart pixel tracking to track sales, and
        other revenue-optimization features to help drive up customer lifetime
        value & simplify your business.
      </p>
      <p>
        <b>Flexible payment options.</b> You can set up a subscription or
        donation model or allow customers to make multiple payments. Retaining
        subscriptions is a quick automation with our dunning process feature.
      </p>
      <p>
        <b>Manage simply.</b> Control everything from a single dashboard with
        centralized inventory, order management, pricing, and more.
      </p>
      <p>
        Increment Technologies makes it incredibly easy to not only sell, but to
        increase sales with easy-to-use order enhancements, cart recovery,
        multiple payment types and many more. You need people to buy, not shop.
        Instead of forcing people through a massive catalog, give them a
        seamless buying experience for each of your products. If you do, you’ll
        increase your conversion and boost your average order value.
      </p>
    </div>
    <span class="return-to-top" @click="scrollTo()">
      <i class="fa fa-angle-up" style="font-size: 35px"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-image: url("../../assets/img/bg-ecommerce.jpg");
  background-size: 100% 70vh;
  min-height: 70vh;
  width: 100%;
  text-align: center;
  color: white;
}

.title {
  font-size: 50px;
  font-weight: 800;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 10px;
  padding-top: 35vh;
}
#start-price {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 35px;
    font-weight: 800;
    padding-right: 10%;
    padding-left: 10%;
  }
}

@media only screen and (max-width: 500px) {
  #start-price {
    font-size: 23px;
    font-weight: 600;
    padding-bottom: 10px;
  }
}

#btn {
  background-color: $secondary;
  color: white;
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: none;
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
</style>
<script>
import Jquery from "jquery";
export default {
  mounted() {
    this.scrollTop();
  },
  methods: {
    scrollTo() {
      Jquery("html, body").animate(
        {
          scrollTop: Jquery(".banner").offset().top,
        },
        500
      );
    },
    scrollTop(){
      window.scrollTo(0, 0);
    },
  },
};
</script>
