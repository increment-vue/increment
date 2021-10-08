<template>
  <div class="app-quick-guide">
    <center>
      <div class="w3-container w3-center w3-animate-left">
        <img class="gif-image" :src="require('assets/gif/how-we-work-2.gif')" />
      </div>
      <h1 class="titletText">HOW WE WORK</h1>
      <div class="row">
        <div class="col-sm-6">
          <div></div>
          <img
            class="gif-image2"
            :src="require('assets/gif/how-we-work-1.gif')"
          />
        </div>
        <div class="col-sm-6">
          <img
            class="gif-image3"
            :src="require('assets/gif/how-we-work-3.gif')"
          />
        </div>
      </div>
    </center>
    <center>
      <!-- card -->
      <div class="row details-holder">
        <div
          v-for="(item, index) in content"
          :key="index"
          :class="`item-holder-click ${
            !actives.includes(index) ? 'item-holder' : 'item-holder-click'
          }`"
          @click="show(index)"
        >
          <div v-if="actives.includes(index) == false">
            <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
            <p class="title">{{ item.title }}</p>
          </div>
          <div v-if="actives.length > 0 && actives.includes(index)" class="row">
            <div class="col-sm-4">
              <p class="text">
                <font-awesome-icon
                  :icon="item.icon"
                  class="font-awesome-icon-clicked"
                />
              </p>
            </div>
            <div class="col-sm-8">
              <h3 class="text-click">{{ item.title }}</h3>
              <hr class="line1" />
              <p class="pText">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- content -->
      <!-- end of content -->
    </center>
    <div class="row">
      <div class="col-sm">
        <img
          class="gif-image4"
          :src="require('assets/gif/how-we-work-4.gif')"
        />
      </div>
      <div class="col-sm">
        <img
          class="gif-image5"
          :src="require('assets/gif/how-we-work-5.gif')"
        />
      </div>
      <div class="col-sm">
        <img
          class="gif-image4"
          :src="require('assets/gif/how-we-work-6.gif')"
        />
      </div>
      <div class="col-sm">
        <img
          class="gif-image5"
          :src="require('assets/gif/how-we-work-7.gif')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
.app-quick-guide {
  min-height: 100vh;
  width: 100%;
  background-color: $white;
  padding: 50px;
}
.details-holder {
  justify-content: center;
}
.item-holder {
  background: linear-gradient(
    95.51deg,
    #00b89f 0%,
    #495aaa 51.04%,
    #8f00b5 100%
  );
}
.details-holder .item-holder:hover {
  cursor: pointer;
  background: $primary;
}
.details-holder-click {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
}
.line1 {
  width: 96.25px;
  height: 2px;
  background: $secondary;
  margin-left: -0px;
}
.item-holder-click {
  min-height: 220px;
  width: 40%;
  border-radius: 10px;
  animation-duration: 0ms;
  margin-top: 50px;
  padding-top: 30px;
  margin-left: 2%;
  margin-right: 2%;
}
.text-click {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
}
.pText {
  font-size: 16px;
  text-align: justify;
}
.title {
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: $white;
  margin-top: 10px;
}

.titletText {
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
  color: $primary;
}
.font-awesome-icon {
  height: 100px;
  width: 150px;
  left: 229px;
  color: $white;
  font-size: 100px;
  font-weight: 900;
  line-height: 115px;
  letter-spacing: 0em;
}
.font-awesome-icon-clicked {
  height: 100px;
  width: 150px;
  letter-spacing: 0em;
  margin-top: 50px;
  margin-bottom: 50px;
  color: $secondary;
}
.description {
  margin-left: -20px;
  text-align: justify;
}
.gif-image {
  height: 250px;
  width: 349.629638671875px;
  top: 18px;
  border-radius: 0px;
}
.gif-image2 {
  height: 250px;
  width: 349.629638671875px;
  top: 18px;
  border-radius: 0px;
  margin-top: -130px;
  margin-right: 400px;
}
.gif-image3 {
  height: 250px;
  width: 349.629638671875px;
  top: 18px;
  border-radius: 0px;
  margin-top: -130px;
  margin-left: 400px;
}
.gif-image4 {
  height: 250px;
  width: 349.629638671875px;
  top: 18px;
  border-radius: 0px;
  margin-top: 30px;
}
.gif-image5 {
  height: 250px;
  width: 349.629638671875px;
  top: 18px;
  border-radius: 0px;
  margin-top: 80px;
}
@media only screen and (max-width: 992px) {
  .details-holder {
    display: block;
    width: 100%;
    margin: unset;
    overflow-y: hidden;
    margin-bottom: 100px;
  }
  .item-holder-click {
    min-height: 220px;
    width: 40%;
    border-radius: 10px;
    animation-duration: 0ms;
    margin-top: 50px;
    padding-top: 30px;
    margin-right: 2%;
  }
  .item-holder {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>

<script>
import {
  faHandshake,
  faRocket,
  faFileCode,
  faFileArchive,
  faBullhorn,
  faTasks,
  faClipboardList,
  faTools,
  faChalkboardTeacher,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      active: null,
      show_content: true,
      content: [
        {
          title: "MEET AND GREET",
          text: "To get a new project underway we like to meet our clients face-to-face for a chat. Our initial meeting will identify your objectives and decipher exactly how we can help. Think of this as a fact find with us asking you the important questions.",
          icon: faHandshake,
          flag: false,
        },
        {
          title: "PLANNING",
          text: "Our planning session provides us with a comprehensive strategy for your project. This crucial phase will form the building blocks of your project, helping us to investigate and identify drivers from across your business’ people, customers, processes and technology that will lead to more successful outcomes.",
          icon: faClipboardList,
          flag: false,
        },
        {
          title: "DESIGN UI AND UX",
          text: "Stunning, intuitive design is essential to your product’s functionality and brand story. Our design team’s diverse expertise will guide the innovative choices that will make sure your brand is communicated effectively and delights users. The designs will be created as PSD Photoshop files, allowing you to see exactly what they will look like.",
          icon: faObjectGroup,
          flag: false,
        },
        {
          title: "DESIGN PRESENTATION",
          text: "We use Invision software to present interactive designs. This allows us to give an exact depiction of what your final product will look like. We will cover every detail down to the shading on a line before commencing with development.",
          icon: faChalkboardTeacher,
          flag: false,
        },
        {
          title: "DEVELOPMENT",
          text: "We create scalable, high-performance mobile apps for iOS, Android and Web using the latest techniques and tools. Our developers are forward-thinking specialists who will integrate seamlessly into your project and deliver outstanding native experiences.",
          icon: faFileCode,
          flag: false,
        },
        {
          title: "TESTING AND QUALITY ASSURANCE",
          text: "Our dedicated in-house QA department executes thorough and complex testing processes depending on the scope of your project. The goal is to make sure that every line of code, pixel on the screen and interaction with your app is perfect.",
          icon: faTasks,
          flag: false,
        },
        {
          title: "DELIVERY",
          text: "Once perfected, we begin the process of migrating your project from a testing to live environment. All source code files are sent to you, and we prepare for launch.",
          icon: faFileArchive,
          flag: false,
        },
        {
          title: "LAUNCHING",
          text: "This is where the final solution is pieced together, built to meet all your requirements in a timely manner. We establish real relationships with all of our clients to support the excitement around releasing your vision to the market.",
          icon: faRocket,
          flag: false,
        },
        {
          title: "MARKETING",
          text: "Product development is only half the battle. Through multiple tools, plans and strategies, our marketing team makes sure your app is embraced by your target market right from the get-go.",
          icon: faBullhorn,
          flag: false,
        },
        {
          title: "MAINTENANCE & IMPROVEMENTS",
          text: "Technology is constantly evolving, so we continuously build to ensure your product meets the ever changing demands of your user base. Our team monitors your cloud servers, storage, databases, and more so you can stay ahead of the curve.",
          icon: faTools,
          flag: false,
        },
      ],
      actives: [],
    };
  },
  methods: {
    show(index) {
      if (this.actives.includes(index)) {
        let i =
          this.actives.length > 0 &&
          this.actives
            .map((item) => {
              return item;
            })
            .indexOf(index);
        this.actives.splice(i, 1);
      } else {
        this.actives.push(index);
      }
    },
  },
};
</script>
