<template>
  <div class="container my-container">
      <div class="navbar navbar-expand-lg fixed-top bg-light row ">
        <div class="header-section" >
            
          <span class="brand  col-6"  >
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
        
          <span class="menu ">
            <span class="navbar-menu-toggler-md">
              <i
                class="fa fa-bars"
                role="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></i>
              
            </span>
            <div class="collapse navbar-collapse" >
              <form class="form-inline my-2 my-lg-0 ml-auto">
                <ul class="navbar-nav">
                  <li class="nav-item header-right" v-for="(item, index) in menu" :key="index">
                    <div class="btn-group dropdown" v-if="item.title === 'Who We Are'">
                      <!-- button title -->
                      <a
                        class="nav-link  " 
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style="color: #20c1ab"
                        type="button"
                        href="/#who-we-are"
                        @click="headerScrollTo('#who-we-are')"
                      >
                        <b class="increment-limegreen-light">{{ item.title }}</b>
                      </a>
                      <a type="button" class=" dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <span class="sr-only" >Toggle Dropdown</span>
                      </a>
                      <!-- button menu -->
                      <div
                        class="dropdown-menu who-menu"
                        style="position: absolute; border-color: #20c1ab"
                      >
                        <!-- button content -->
                        <a
                          data-target=".hide.show"
                          class="dropdown-item"
                          href="/#our-values"
                          @click="headerScrollTo('#our-values')"
                        >
                          <b class="increment-limegreen-light">Our Values</b>
                        </a>
                        <a
                          data-target=".hide.show"
                          class="dropdown-item"
                          href="/#testimonials"
                          @click="headerScrollTo('#testimonials')"
                        >
                          <b class="increment-limegreen-light">What They Say About Us</b>
                        </a>
                      </div>

                    </div>
                    <div class="btn-group dropdown" v-if="item.title === 'Our Services'">
                      <!-- button title -->
                      <a
                        class="nav-link  " 
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style="color: #20c1ab"
                        type="button"
                        href="/#our-services"
                        @click="headerScrollTo('#our-services')"
                      >
                        <b class="increment-limegreen-light">{{ item.title }}</b>
                      </a>
                      <a type="button" class=" dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <span class="sr-only" >Toggle Dropdown</span>
                      </a>
                      <!-- button menu -->
                      
                        <!-- button content -->
                        <div
                            class="dropdown-menu "
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
                        <a class="nav-link" href="/send-request">
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
        <div class="collapse" id="navbarSupportedContent" >
          <div class="header-separator"> </div>
          <ul class="navbar-nav ml-auto" >
            <li
              data-target=".hide.show"
              v-for="(item, index) in menu"
              :key="index"
              class="nav-item "
            >
              <div class="btn-group dropdown" v-if="item.title === 'Who We Are'" >
                <!-- button title -->
                <a
                  class="nav-link  " 
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="color: #20c1ab"
                  type="button"
                  href="/#who-we-are"
                  @click="headerScrollTo('#who-we-are')"
                >
                  <b class="increment-limegreen-light">{{ item.title }}</b>
                </a>
                <a type="button" class=" dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  <span class="sr-only">Toggle Dropdown</span>
                </a>
                <!-- button menu -->
                <div
                  class="dropdown-menu who-menu"
                  v-if="item.title === 'Who We Are'"
                  style="position: relative; border-color: #20c1ab"
                >
                  <!-- button content -->
                  <a
                    data-target=".hide.show"
                    class="dropdown-item"
                    href="/#our-values"
                    @click="headerScrollTo('#our-values')"
                  >
                    <b class="increment-limegreen-light">Our Values</b>
                  </a>
                  <a
                    data-target=".hide.show"
                    class="dropdown-item"
                    href="/#testimonials"
                    @click="headerScrollTo('#testimonials')"
                    
                  >
                    <b class="increment-limegreen-light">What They Say About Us</b>
                  </a>
                </div>
              </div>
              
              <div class="btn-group dropdown" v-if="item.title === 'Our Services'">
                <!-- button title -->
                <a
                  class="nav-link " 
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="color: #20c1ab"
                  type="button"
                  href="/#our-services"
                  @click="headerScrollTo('#our-services')"
                >
                  <b class="increment-limegreen-light">{{ item.title }}</b>
                </a>
                <a type="button" class=" dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  <span class="sr-only">Toggle Dropdown</span>
                </a>
                <!-- button menu -->
                <div
                  class="dropdown-menu serve-menu"
                  v-if="item.title === 'Our Services'"
                  style="position: relative; border-color: #20c1ab"
                >
                  <a
                    data-target=".hide.show"
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
                  <a data-target=".hide.show" class="nav-link" href="/send-request">
                    <b class="increment-limegreen-light">{{ item.title }}</b>
                  </a>
                </div>
                <div v-else-if="item.title !== 'Send Request'">
                  <a
                    data-target=".hide.show"
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
  </div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.navbar-menu-toggler-md {
  text-align: right;
  float: left;
  display: none;
  background-color: none;
}
.header-section {
  float: left;
  width: 90%;
  padding-bottom: 10px;
}
.navbar-nav {
  margin-top: -69px;
  margin-left: 0%;
  float: center;
   
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
  background-color: none;
  color: "#0089bf";
  padding: 0.5%;
  white-space: nowrap;
}
.navbar { //icon
  padding-left: -20%;
  padding-right: 0%;
  padding-top: 2%;
  display: block;
  background-color: none;
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

.who-menu {
  background-color: none;
  margin-left: -30%;
}

.serve-menu {
  margin-left: -10%;
}

.li:hover {
  background: grey;
}

.dropdown-toggle-split{
    color: $secondary;
  }
@media screen and (min-width: 992px){
    #navbarSupportedContent{
    display: none;
  }
}

@media screen and (max-width: 991px) {
  .my-space {
    width: 70%;
    height: 40%;
  }
  .navbar-menu-toggler-md { //icon
    width: 100%;
    text-align: right;
    float: right;
    display: block;
    margin-top: -6vh;
    margin-right: 100px;
    padding: auto;
  }
  .navbar-nav {
    margin-top: 1%;
    background-color: none;
    padding: 1%;
    float: left;
  }
  .header-section { //white space
    float: left;
    width: 105%;
    margin-top: -5px;
  }
  .nav-item {
    background-color: none;
    padding: 1%;
    margin-left: 4%;
  }
  .li{
    background-color: none;

  }
  .dropdown:hover .dropdown-menu {
    display: block;
    text-align: center;
    border: none;
    background-color: #f8f9fa;
  }

  .who-menu { //entire menu of who-we-are 
    background-color: none;
    margin-left: -30%;
    margin-top: 10%;
  }
  .serve-menu {
    margin-left: 0%;
    margin-left: -40%;
    margin-top: 10%;
  }
  .my-row{
    display: block;
  }

  .dropdown-toggle-split{
    color: $secondary;
    padding-right: 0%;
  }

  .header-separator{
    width: 100%; 
    height: 1px; 
    background-color: $secondary;
    margin-top: 20%;
  }
}
@media screen and (max-width: 768px) {
  .navbar-menu-toggler-md {
    width: 100%;
    text-align: right;
    float: right;
    display: block;
    padding: auto;
    margin-top: -6vh;
  }
  .navbar-nav {
    background-color: none;
    float: left;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
    text-align: left;
  }
  
}
@media screen and (max-width: 330px) {
  .navbar-menu-toggler-md {
    width: 100%;
    text-align: right;
    float: center;
    display: block;
    margin-top: -54px;
    margin-right: 50px;
    padding: auto;
  }
  .navbar-nav {
    margin-top: 1%;
  }
}
@media only screen and (max-width: 280px) {
  .navbar {
    width: 100%;
  }

  .navbar-menu-toggler-md {
    text-align: right;
    float: left;
    display: block;
    margin-top: -50px;
    margin-left: -25px;
  }
  .navbar-nav {
    margin-top: 0%;
    
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
  openNav(){

  },
  data() {
    return {
      common: COMMON,
      menu: [
        {
          title: "Who We Are",
          redirect: "/#who-we-are",
          type: "dropdown",
        },
        {
          title: "Our Services",
          redirect: "/#our-services",
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
          redirect: "/send-request",
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
      //this.redirect('/' + id);
      //window.location.reload();
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