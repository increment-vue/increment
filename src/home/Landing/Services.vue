<template>
  <div >
    <!-- <Curve
      :color="colors.incrementPurple"
      :use="true"
      :stylecss="{
        backgroundColor: colors.white,
      }"
    ></Curve> -->
    <div class="cw-banner" id="our-services">
      <h2>Our Services</h2>
      <p>Our company provides a wide range of services to our clients. Being a relatively small firm, we are able to offer customized, high-quality service to our clients.</p>
      <!-- <div class="row">
        <span class="card" v-for="(item, index) in services" :key="index">
          <center>
            <font-awesome-icon :icon="item.class" class="font-awesome-icon" />
          </center>
          <b><p class="subtitle">{{ item.title }}</p></b>
          <span style="font-size: 13px; color: black">{{ item.desc }}</span>
        </span>
      </div> -->
      <!-- IT Outsourcing -->
      <div class="serviceContainer">
        <div class="imageContainer">
          <img class="imageSize" :src="require('assets/img/Jiph_Ad.png')" />
        </div>
        <div class="textContainer">
          <div class="title">
            <h3>I.T Outsourcing</h3>
          </div>
          <div class="description">
            <p>In the provided code, $user is an instance of the User model, and it has a relationship defined with the name hasAccountType. By default, when you eager load a relationship using with(), Laravel will include the loaded relationship as a property on the model object. In this case, the hasAccountType relationship is included as a property on the $user object.</p>
        </div>
      <div class="indent">
        <roundBtn
        :text="'View more'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon ="'fa fa-angle-right'"
        :target="'_blank'"
        :route="'#'"
        :styles="{
          backgroundColor: colors.white,
          color: colors.incrementPurple,
          borderColor: colors.white,
          borderColor: colors.gray,
        }"
        :hoverStyles="{
          backgroundColor: colors.success,
          color: colors.white,
          borderColor: colors.white,
          cursor: 'pointer'
        }"
      />
      </div>
        
      </div>
      </div>
      <!-- Software Development -->
     <div class="serviceContainer">
        
        <div class="textContainer">
          <div class="title">
            <h3>Software Development</h3>
          </div>
          <div class="description">
            <p>In the provided code, $user is an instance of the User model, and it has a relationship defined with the name hasAccountType. By default, when you eager load a relationship using with(), Laravel will include the loaded relationship as a property on the model object. In this case, the hasAccountType relationship is included as a property on the $user object.</p>
        </div>
        <roundBtn
        :text="'View more'"
        :changeIcon="'fa fa-angle-double-right'"
        :icon ="'fa fa-angle-right'"
        :target="'_blank'"
        :route="'#'"
        :styles="{
          backgroundColor: colors.white,
          color: colors.incrementPurple,
          borderColor: colors.white,
          borderColor: colors.gray,
        }"
        :hoverStyles="{
          backgroundColor: colors.gray,
          color: colors.white,
          borderColor: colors.white,
          cursor: 'pointer'
        }"
      />
      </div>
      <div class="imageContainer">
          <img class="imageSize" :src="require('assets/img/Jiph_Ad.png')" />
        </div>
      </div>
    </div>
    <!-- <Curve
      :color="colors.incrementPurple"
      :use="false"
      :stylecss="{
        backgroundColor: colors.white,
      }"
    ></Curve> -->
  </div>
</template>

  <style scoped lang="scss">
@import "~assets/style/colors.scss";
.indent{
  margin-left: 75%;
}
.title{
  margin: 5% 0% 5% 0%;
}
.imageSize{
  height: 350px;
  width: 500px;
}
.textContainer{
  width: 50%;
  text-align: justify;
}
.imageContainer{
  width: 50%;
}
.serviceContainer{
  display: flex;
  justify-content: center;
}
.cw-banner {
  padding-bottom: 15vh !important;
  padding-top: 15vh !important;
  float: left;
  width: 100%;
  padding-left: 10% !important;
  padding-right: 10% !important;
  background-color: #fff;
  // margin-top: -14.5%;
  padding: 50px 0 50px 0;
  text-align: center !important;
  color: black;
}

.card {
  width: 22%;
  height: 380px;
  margin: 1.5%;
  padding: 20px;
  border-radius: 15px;
  background-color: $gray;
}

.font-awesome-icon {
  margin-top: 30px;
  margin-bottom: 30px;
  color: $incrementPurple;
  font-size: 80px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: $primary;
}

img {
  margin-top: 1vh;
  width: 150px;
  height: 150px;
}

.row {
  text-align: center;
  margin-top: 70px;
}

@media only screen and (max-width: 1500px) {
  .card {
    width: 23% !important;
    margin: 1% !important;
    height: 400px !important;
  }
}

@media only screen and (max-width: 1300px) {
  .card {
    height: 420px !important;
  }
}


@media only screen and (max-width: 1230px){
  .card {
    height: 450px !important;
  }
}

@media only screen and (max-width: 1050px){
  .card {
    height: 380px !important;
    width: 45% !important;
    margin: 2.5% !important;
  }
}



@media only screen and (max-width: 714px) {
  .card {
    height: 400px !important;
  }
}

@media only screen and (max-width: 644px) {
  .card {
    width: 90% !important;
    margin: unset !important;
    margin-top: 5% !important;
    margin-left: 5% !important;
    margin-right: 5% !important;
  }

  .row {
    margin-top: 3vh !important;
  }
}

</style>
<script>
// import Curve from "src/home/generic/svgCurve.vue";
import roundBtn from "src/home/generic/roundBtn"
import ColorsJS from "src/assets/style/colors.js";
import {
  faPalette,
  faMobileAlt,
  faCode,
  faGlobe,
  faNetworkWired,
  faCogs,
  // faLaptop,
  faUsers,
  faFax
} from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    // Curve,
    roundBtn
  },
  data() {
    return {
      colors: ColorsJS,
      services: [
        // {
        //   title: "IT Services",
        //   class: faLaptop,
        //   desc: "Streamline your business operations with our comprehensive IT department outsourcing solutions, tailored to your needs. From tech support to IT management, we have flexible options to suit your requirements. Additionally, our affordable IT consultancy services provide expert guidance on technology strategy, empowering you to stay ahead in the digital landscape.",
        // },
        {
          title: "IT Department Outsourcing",
          class: faUsers,
          desc: "Our comprehensive IT services include IT Department Outsourcing, where we manage your technology needs and help you achieve your core business objectives. Starting from just Php 15,000, our flexible outsourcing solutions offer options such as tech support, IT manager level, and IT executive level.",
        },
        {
          title: "IT Consultancy",
          class: faFax,
          desc: "Get valuable technology guidance and support with our affordable IT consultancy services for only Php 5,000. Our experts will help you create a strong technology strategy and navigate the process of digital transformation. Stay ahead in the digital landscape and unleash the full potential of your business with our reliable IT consultancy solutions.",
        },
        {
          title: "Designs",
          class: faPalette,
          desc: "We use latest editing tools like Adobe Photoshop, and Illustrator for our designing. We also cater making landing page videos using Adobe after effects, premier, resolve and more. We keep updating our tools for us to deliver best quality designs to our clients.",
        },
        {
          title: "Web Development",
          class: faCode,
          desc: "Our developers are constantly upgrading their capabilities to provide best and suitable solutions for your needs. Our desire is to create intuitive and best websites. We make website or api integration a lot easier. We are not comfortable to stay where we are for our development as we try to innovate.",
        },
        {
          title: "Mobile Development",
          class: faMobileAlt,
          desc: "The development framework react-native and quasar-vuejs are capable to deploy applications for android and ios platforms. We build using its native programming framework once our customer demands it. Our developers are always working in advanced for us to give the best solutions.",
        },
        {
          title: "API Development",
          class: faNetworkWired,
          desc: "We offer API development services where we create customized APIs based on our clients' existing systems. By developing APIs tailored to their specific needs, we enhance compatibility, adaptability, and scalability within their overall technology infrastructure.",
        },
        {
          title: "Software Maintenance",
          class: faCogs,
          desc: "Increment Technologies Inc. also offers software maintenance to ensure continued functionality, security, and performance of their clients' software applications. This includes bug fixing, troubleshooting, performance optimization, security updates, and compatibility enhancements.",
        },
        {
          title: "Hosting",
          class: faGlobe,
          desc: "We offer fair and affordable hosting and maintenance services. Part of our journey is to make sure that our servers are responding faster from the request of its visitors.",
        },
      ],
    };
  },
};
</script>
