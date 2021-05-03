<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <span class="brand">
      <a href="/" style="text-decoration: none">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img
              class="navbar- brand"
              :src="require('assets/img/logo.png')"
              style="margin-top: 8px; margin-right: 20px"
            />
          </div>
          <div class="col-md-9">
            <b>
              <div class="increment-purple" style="margin-top: 10px">
                INCREMENT
              </div>
              <div style="color: #00b89f">TECHNOLOGIES</div>
            </b>
          </div>
        </div>
      </a>
    </span>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="fa fa-bars"></span>
    </button>
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
                  ><b class="increment-limegreen-light">Our Values</b></a
                >
                <a
                  class="dropdown-item"
                  href="/#testimonials"
                  @click="headerScrollTo('#testimonials')"
                  ><b class="increment-limegreen-light"
                    >What They Say About Us</b
                  ></a
                >
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
                  <b class="increment-limegreen-light">How We Work</b></a
                >
                <a class="dropdown-item" href="/#our-projects">
                  <b
                    class="increment-limegreen-light"
                    @click="headerScrollTo('#our-projects')"
                    >Our Projects</b
                  >
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
  </nav>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
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
  font-size: 15px;
  font-weight: bold;
}
.nav-item {
  margin-right: 20px;
  color: "#0089bf";
}
.navbar {
  padding-left: 5%;
  padding-right: 5%;
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
  border: solid 1px #fff;
  font-size: 20px !important;
  padding: 10px 8px 10px 8px !important;
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
  border-radius: 30px;
  text-align: center;
  margin-right: 2.5px;
  margin-left: 2.5px;
  height: 38px;
}
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
