<template>
  <div>
    <BreadCrumbs :title="'E-COMMERCE'" />
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
      <CaseImage :price="'5,000'" :bg="'ecommerce.jpg'" />
      <p class="offer">What we can offer</p>
      <p>
        <b>Promote your page.</b> Put your product in front of your customers,
        right where they are – social media, paid ads, your blog, email, and
        more.
      </p>
      <p>
        <b>Showcase your product.</b> With responsive themes and a powerful
        content builder, you can have a page that turns visitors into customers.
      </p>
      <p>
        <b>Boost your sales.</b> Powerful features, such as a 1-page system to
        help you convert visitors, smart pixel tracking to track sales, and
        other revenue-optimization features to help drive up customer lifetime
        value and simplify your business.
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
      <p class="back-return" @click="redirect('/case-studies')">
        &lt;&lt;Back to Case Studies
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.container {
  text-align: justify;
  min-height: 100vh;
  background-color: $white;
  padding-top: 40vh;
  padding-bottom: 10vh;
}

.back-return {
  font-weight: bold;
  color: $primary;
  margin-top: 5vh;
}

.back-return:hover {
  cursor: pointer;
  text-decoration: underline;
}

.offer {
  font-weight: 800;
  font-size: 20px;
}
</style>
<script>
import BreadCrumbs from "src/home/generic/breadCrumbs.vue";
import CaseImage from "src/home/generic/case-image.vue";
import ROUTER from "src/router";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    BreadCrumbs,
    CaseImage,
  },
  methods: {
    redirect(param) {
      ROUTER.push(param);
    },
  },
};
</script>
