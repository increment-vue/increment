<template>
  <div class="app-quick-guide" id="how-we-work">
    <div class="component-header text-center">
      <img class="gif-image2" :src="require('assets/gif/how-we-work-2.gif')" />
    </div>
    <h2>HOW WE WORK</h2>
    <div class="row component-header text-center">
      <div class="col-sm">
        <img
          class="gif-image2"
          :src="require('assets/gif/how-we-work-1.gif')"
        />
      </div>
      <div class="col-sm">
        <img
          class="gif-image2"
          :src="require('assets/gif/how-we-work-3.gif')"
        />
      </div>
    </div>
    <div class="row details-holder text-center">
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
          <h3 class="item-title">{{ item.title }}</h3>
        </div>
        <div
          v-if="actives.length > 0 && actives.includes(index)"
          class="row item-clicked"
        >
          <div class="col-sm-3 first-column">
            <font-awesome-icon
              :icon="item.icon"
              class="font-awesome-icon-clicked"
            />
          </div>
          <div class="col-sm second-column">
            <h3>
              <b>{{ item.title }}</b>
            </h3>
            <hr class="line1" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row component-footer">
      <div v-for="(item, index) in gifFooter" :key="index">
        <img class="gif-imageFooter" :src="item" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
@import "~assets/style/theme.css";
.app-quick-guide {
  width: 100%;
  background-color: $white;
  padding: 50px;
  margin-bottom: 10vh;
}

h2 {
  text-align: center;
  color: $primary;
  margin-top: 50px !important;
}

.details-holder {
  justify-content: center;
  width: 100%;
  margin: 10px;
}
.item-holder {
  background: linear-gradient(
    95.51deg,
    $gradientPrimary 0%,
    $gradientTertiary 51.04%,
    $gradientSecondary 100%
  );
  text-align: center;
  min-height: 220px;
  width: 40%;
  border-radius: 10px;
}
.item-holder:hover {
  cursor: pointer;
  background: linear-gradient(
    -20deg,
    $gradientPrimary 0%,
    $gradientSecondary 100%,
    $gradientTertiary 51.04%
  );
}
.line1 {
  width: 96.25px;
  height: 2px;
  background: $secondary;
  margin-left: -0px;
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
.item-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  color: $white;
  margin-top: 10px;
}
.item-holder-click {
  min-height: 220px;
  width: 40%;
  animation-duration: 0ms;
  margin: 50px 20px 0 20px;
  padding-top: 30px;
}
.font-awesome-icon-clicked {
  height: 100px;
  width: 150px;
  letter-spacing: 0em;
  margin-top: 25px;
  margin-bottom: 50px;
  color: $secondary;
}
.second-column {
  text-align: left;
}
.gif-image2 {
  height: 250px;
  width: 350px;
  top: 18px;
}
.gif-imageFooter {
  margin-right: 80px;
  height: 250px;
  width: 350px;
  top: 18px;
}
.component-header {
  margin-top: -220px;
}
.component-footer {
  margin: 50px 0 0 80px;
  justify-content: center;
}
@media only screen and (max-width: 992px) {
  .details-holder {
    width: 100%;
    margin: -80px 0 10px 0;
  }
  .item-holder,
  .item-holder-click {
    width: 100%;
    // margin-top: 20px;
  }
  .second-column {
    text-align: center;
  }
  .line1 {
    margin-left: 30%;
    margin-right: 30%;
  }
  .component-header {
    display: none;
  }
  .component-footer {
    display: none;
    margin: 0 50px -0 50px;
  }
}
@media only screen and (max-width: 1500px) {
  .component-header {
    display: none;
  }
  .component-footer {
    display: none;
    margin: 0 50px -0 50px;
  }
}
@media only screen and (max-width: 770px) {
  .component-header {
    display: none;
  }
  .component-footer {
    display: none;
    margin: 0 50px -0 50px;
  }
}
@media only screen and (max-width: 450px) {
  .component-header {
    display: none;
  }
  .component-footer {
    display: none;
    margin: 0 50px -0 50px;
  }
}
</style>

<script>
import ColorsJS from "src/assets/style/colors.js";
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
      style: {
        color: ColorsJS.primary,
      },
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
      gifFooter: [
        require("assets/gif/how-we-work-4.gif"),
        require("assets/gif/how-we-work-5.gif"),
        require("assets/gif/how-we-work-6.gif"),
        require("assets/gif/how-we-work-7.gif"),
      ],
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
