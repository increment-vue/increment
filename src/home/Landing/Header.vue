<template>
  <div class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="header-section">
      <span class="brand">
        <a class="navbar-brand" v-on:click="redirect('/')">
          <img
            src="../../assets/img/logo.png"
            style="margin-bottom: 5px; margin-right: 5px; margin-top: -10%"
          />
          <label class="headerName">
            <b class="increment-purple">INCREMENT</b>
            <br />
            <b style="color: #00b89f">TECHNOLOGIES</b>
          </label>
        </a>
      </span>
      <span class="menu">
        <span class="navbar-menu-toggler-md">
          <i
            class="fa fa-bars"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></i>
        </span>
        <div class="collapse navbar-collapse">
          <form class="form-inline my-2 my-lg-0 ml-auto">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="(item, index) in menu" :key="index">
                <div class="btn-group dropdown" v-if="item.type === 'dropdown'">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style="color: #20c1ab"
                    @click="headerScrollTo(item.redirect)"
                  >
                    <b class="increment-limegreen-light">{{ item.title }}</b>
                  </a>
                  <div
                    class="dropdown-menu"
                    v-if="item.title === 'Who We Are'"
                    style="position: absolute; border-color: #20c1ab"
                  >
                    <a
                      class="dropdown-item"
                      href="/#our-values"
                      @click="headerScrollTo('#our-values')"
                    >
                      <b class="increment-limegreen-light">Our Values</b>
                    </a>
                    <a
                      class="dropdown-item"
                      href="/#testimonials"
                      @click="headerScrollTo('#testimonials')"
                    >
                      <b class="increment-limegreen-light"
                        >What They Say About Us</b
                      >
                    </a>
                  </div>
                  <div
                    class="dropdown-menu"
                    v-if="item.title === 'Our Services'"
                    style="position: absolute; border-color: #20c1ab"
                  >
                    <a
                      class="dropdown-item"
                      href="/#how-we-work"
                      @click="headerScrollTo('#how-we-work')"
                    >
                      <b class="increment-limegreen-light">How We Work</b>
                    </a>
                  </div>
                </div>
                <div v-else-if="item.type === 'regular'">
                  <div v-if="item.title === 'Send Request'">
                    <a class="nav-link" href="send-request">
                      <b class="increment-limegreen-light">{{ item.title }}</b>
                    </a>
                  </div>
                  <div v-else-if="item.title !== 'Send Request'">
                    <a
                      class="nav-link"
                      :href="item.redirect"
                      @click="headerScrollTo(item.redirect)"
                    >
                      <b class="increment-limegreen-light">{{ item.title }}</b>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </span>
    </div>
    <div class="collapse hide" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li
          v-for="(item, index) in menu"
          :key="index"
          class="nav-item"
          v-on:click="scrollTo('#who-we-are')"
        >
          <div class="btn-group dropdown" v-if="item.type === 'dropdown'">
            <a
              class="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="color: #20c1ab"
              @click="headerScrollTo(item.redirect)"
            >
              <b class="increment-limegreen-light">{{ item.title }}</b>
            </a>
            <div
              class="dropdown-menu"
              v-if="item.title === 'Who We Are'"
              style="position: absolute; border-color: #20c1ab"
            >
              <a
                class="dropdown-item"
                href="/#our-values"
                @click="headerScrollTo('#our-values')"
              >
                <b class="increment-limegreen-light">Our Values</b>
              </a>
              <a
                class="dropdown-item"
                href="/#testimonials"
                @click="headerScrollTo('#testimonials')"
              >
                <b class="increment-limegreen-light">What They Say About Us</b>
              </a>
            </div>
            <div
              class="dropdown-menu"
              v-if="item.title === 'Our Services'"
              style="position: absolute; border-color: #20c1ab"
            >
              <a
                class="dropdown-item"
                href="/#how-we-work"
                @click="headerScrollTo('#how-we-work')"
              >
                <b class="increment-limegreen-light">How We Work</b>
              </a>
            </div>
          </div>
          <div v-else-if="item.type === 'regular'">
            <div v-if="item.title === 'Send Request'">
              <a class="nav-link" href="send-request">
                <b class="increment-limegreen-light">{{ item.title }}</b>
              </a>
            </div>
            <div v-else-if="item.title !== 'Send Request'">
              <a
                class="nav-link"
                :href="item.redirect"
                @click="headerScrollTo(item.redirect)"
              >
                <b class="increment-limegreen-light">{{ item.title }}</b>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.navbar-menu-toggler-md {
  text-align: right;
  float: left;
  display: none;
}
.header-section {
  float: left;
  width: 100%;
}
.navbar-nav {
  margin-top: -10%;
  float: left;
}
.increment-purple {
  color: $primary;
}

.increment-limegreen-light {
  color: $secondary;
}
.increment-limegreen-light:hover {
  color: $primary;
}
.increment-limegreen-dark {
  color: $secondary;
}
.increment-limegreen-dark:hover {
  color: $primary;
}
.brand {
  margin-top: 0.5%;
}
label {
  font-size: 16px;
  font-weight: bold;
}
.nav-item {
  margin-right: 20px;
  color: "#0089bf";
}
.navbar {
  padding-left: 5%;
  padding-right: 5%;
  display: block;
}

img {
  width: auto;
  height: 44px;
  margin-top: 4px;
}
.fa-bars:hover {
  cursor: pointer;
}
.fa-bars {
  border: solid 1px $primary;
  font-size: 20px !important;
  padding: 8px 10px 8px 10px !important;
  color: $primary !important;
}
.button:hover {
  background-color: #9acd32;
  text-decoration: none;
  border: 0px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
}
.button {
  float: left;
  width: 120px;
  border: solid 1.2px #d3d3d3;
  border-radius: 10px;
  text-align: center;
  margin-right: 2.5px;
  margin-left: 2.5px;
  height: 38px;
}
.dropdown:hover .dropdown-menu {
  display: block;
}

.hide .show {
  display: none !important;
}
@media screen and (max-width: 992px) {
  .navbar-menu-toggler-md {
    width: 100%;
    text-align: right;
    float: left;
    display: block;
    margin-top: -6%;
  }
  .hide .show {
    display: block !important;
  }
  .navbar-nav {
    margin-top: 1%;
  }
}
@media screen and (max-width: 600px) {
  .navbar-menu-toggler-md {
    width: 100%;
    text-align: right;
    float: left;
    display: block;
    margin-top: -15%;
  }
  .hide .show {
    display: block !important;
  }
  .navbar-nav {
    margin-top: 1%;
  }
}
@media screen and (max-width: 330px) {
  .navbar-menu-toggler-md {
    width: 100%;
    text-align: right;
    float: left;
    display: block;
    margin-top: -15%;
  }
  .hide .show {
    display: block !important;
  }
  .navbar-nav {
    margin-top: 1%;
  }
}
@media only screen and (max-width: 280px) {
  .navbar {
    width: 84%;
  }
  .navbar-menu-toggler-md {
    text-align: right;
    float: left;
    display: block;
    margin-top: -25%;
  }
  .hide .show {
    display: block !important;
  }
  .navbar-nav {
    margin-top: 1%;
  }
}
// .dropdown:hover .dropdown-item {display: block;}
</style>
<script>
import ROUTER from "src/router";
import COMMON from "src/common.js";
import $ from "jquery";

export default {
  mounted() {
    console.log(this.$route);
  },
  data() {
    return {
      common: COMMON,
      menu: [
        {
          title: "Who We Are",
          redirect: "#who-we-are",
          type: "dropdown",
        },
        {
          title: "Our Services",
          redirect: "#our-services",
          type: "dropdown",
        },
        {
          title: "Our Projects",
          redirect: "/#our-projects",
          type: "regular",
        },
        {
          title: "Case Studies",
          redirect: "/#case-studies",
          type: "regular",
        },
        {
          title: "Technologies",
          redirect: "/#technologies",
          type: "regular",
        },
        {
          title: "Send Request",
          redirect: "send-request",
          type: "regular",
        },
      ],
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    headerScrollTo(id) {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $(id).offset().top - parseInt(height * 0.1),
        },
        500
      );
    },
  },
};

window.addEventListener("load", function () {
  $(document).ready(function () {
    if (window.location.hash == "#who-we-are") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#who-we-are").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#testimonials") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#testimonials").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#our-services") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#our-services").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#how-we-work") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#how-we-work").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#our-projects") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#our-projects").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#case-studies") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#case-studies").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#technologies") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#technologies").offset().top - parseInt(height * 0.1),
        },
        500
      );
    } else if (window.location.hash == "#our-values") {
      let height = $(window).height();
      $("html, body").animate(
        {
          scrollTop: $("#our-values").offset().top - parseInt(height * 0.1),
        },
        500
      );
    }
  });
});
</script>