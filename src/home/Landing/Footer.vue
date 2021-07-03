<template>
  <footer>
    <div class="footer row">
      <div class="col-md-5 col-sm-12">
        <h5 style="margin-top: 10%; font-weight: bold">ABOUT US</h5>
        <br />
        <div>
          <p>
            Increment Technologies is a team of highly motivated technopreneurs.
            We do projects with a focus on quality and customer satisfaction.
            Our experience over the years let us create worthly online products.
          </p>
        </div>
        <span
          v-for="(item, index) in common.socialIcons"
          :key="index"
          class="social-icons-holder"
          style="padding-right: 25px"
        >
          <font-awesome-icon
            :icon="item.icon"
            class="social-icon fa-lg"
            @click="openWindow(item.url)"
          ></font-awesome-icon>
        </span>
      </div>
      <div class="col-md-5 col-sm-12" id="div2">
        <h5 style="margin-top: 10%; font-weight: bold">CONTACT US</h5>
        <br />
        <ul>
          <li>
            <a :href="'tel:' + common.APP_PHONE_NUMBER" style="color: black">
              <font-awesome-icon
                :icon="faPhoneAlt"
                class="social-icons fa-lg"
              ></font-awesome-icon>
              <span style="padding: 25px">{{ common.APP_PHONE_NUMBER }}</span>
            </a>
          </li>
          <br />
          <li>
            <a
              :href="'mailto:' + common.APP_EMAIL + '?Subject=INQUIRE'"
              target="_top"
              style="color: black"
              @click="contact('Click email')"
            >
              <font-awesome-icon
                :icon="faEnvelope"
                class="social-icons fa-lg"
              ></font-awesome-icon>
              <span style="padding: 25px">{{ common.APP_EMAIL }}</span>
            </a>
          </li>
          <br />
          <li id="map-li">
            <font-awesome-icon
              :icon="faMapMarker"
              class="social-icons fa-lg"
              style="color: black"
              id="map"
            ></font-awesome-icon>
            <a
              href="https://www.google.com/maps/place/University+of+San+Carlos+-+Talamban+Campus/@10.3524954,123.9130143,19z/data=!4m8!1m2!2m1!1s3rd+Floor,+Bunzel+Bldg.,+Techhub+Area,+University+of+San+Carlos+-+Talamban+Campus,+Talamban,+Cebu+City,+Philippines!3m4!1s0x0:0xc2d9b9e99316c59d!8m2!3d10.3521222!4d123.9132676"
              target="_blank"
              style="color: black"
              ><p class="px-lg-5 px-sm-0" style="margin-top: -25px">
                {{ common.address }}
              </p></a
            >
          </li>
        </ul>
      </div>
      <hr />
      <span class="copyright">
        <p>Copyright &copy; {{ common.APP_COPYRIGHT }}.</p>
      </span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  min-height: 200px;
  float: left;
  overflow-y: hidden;
  background: #e9e9e9;
}
.footer {
  width: 90%;
  float: left;
  min-height: 50px;
  margin-left: 5%;
  margin-right: 5%;
  overflow-y: hidden;
}
.footer-widget {
  width: 25%;
  float: left;
  margin-top: 50px;
  list-style: none;
  padding: 0px;
  margin-bottom: 0px;
}

.footer-widget li {
  list-style: none;
  padding: 5px 10px 5px 10px;
  float: left;
  width: 100%;
  color: #6f6f6f !important;
}
.footer-widget,
.footer-widget li a {
  color: #6f6f6f !important;
}
.footer-widget .title {
  color: #4c4c4c;
}
.footer-widget li a:hover {
  cursor: pointer;
  text-decoration: underline;
}
footer-widget .title:hover {
  cursor: default;
}
.community .title {
  width: 100%;
  float: left;
  height: 40px;
  text-align: left;
  padding-top: 5px;
}
.community .links {
  width: 100%;
  float: left;
}
li {
  position: flex;
}
ul {
  list-style-type: none;
}
.community .link i {
  font-size: 24px;
  padding: 0 10px 0 10px;
  width: 20%;
}
.community .link i:hover {
  color: #1caceb;
  cursor: pointer;
}
.text-gray {
  color: #212529;
}
.contact-us li i {
  padding-right: 10px;
}
.contact-us li .fa-phone {
  padding-right: 9px;
}
.contact-us li .fa-mobile-alt {
  padding-right: 12px;
}
.copyright {
  width: 100%;
  float: left;
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  color: #6f6f6f !important;
}
@media screen and (max-width: 992px) {
  .footer-widget {
    width: 100%;
    text-align: center;
    margin-right: 0%;
    padding: 0px;
  }
  .community .title {
    text-align: center;
  }
  .community i {
    width: 20%;
  }
  .social-icons-holder {
    width: 10%;
    margin-top: 2vh;
  }
  .social-icons {
    color: black;
    margin-left: -40px;
  }
  .social-icon {
    color: black;
  }
}
hr {
  height: 2px;
  color: white;
  background-color: white;
  width: 100%;
}
.action-link:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #00b89f;
}

@media screen and (max-width: 640px) {
  .footer {
    text-align: center;
  }

  #map {
    float: left;
    margin-left: 3px;
  }

  #map-li {
    margin-top: 15px;
  }

  #div2 {
    margin-top: 25px;
    margin-bottom: 25px;
  }
}
</style>
<script>
import ROUTER from 'src/router'
import COMMON from 'src/common.js'
import { faCopyright, faEnvelope, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
// import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
export default {
  mounted() {},
  data() {
    return {
      common: COMMON,
      faCopyright: faCopyright,
      faEnvelope: faEnvelope,
      faMapMarker: faMapMarker,
      faPhoneAlt: faPhoneAlt,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    openWindow(url) {
      window.open(url, "_BLANK");
    },
  },
};
</script>
