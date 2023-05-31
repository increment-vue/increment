<template>
  <div class="app-quick-guide" id="how-we-work">
    <div class="component-header text-center">
      <img class="gif-image2" :src="require('assets/gif/how-we-work-2.gif')" />
    </div>
    <h2>HOW WE WORK</h2>
    <div class="row component-header text-center">
      <div style="width: 50%; float: left; text-align: left">
        <img
          class="gif-image2"
          :src="require('assets/gif/how-we-work-1.gif')"
        />
      </div>
      <div style="width: 50%; float: right; text-align: right">
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
          <div class="first-column">
            <font-awesome-icon
              :icon="item.icon"
              class="font-awesome-icon-clicked"
            />
          </div>
          <div class="second-column">
            <h3 style="font-weight: 700">
              {{ item.title }}
            </h3>
            <hr class="line1" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row component-footer">
      <img class="gif-imageFooter" :src="require('assets/gif/how-we-work-4.gif')" />
      <img class="gif-imageFooter" :src="require('assets/gif/how-we-work-5.gif')" />
      <img class="gif-imageFooter" :src="require('assets/gif/how-we-work-6.gif')" />
      <img class="gif-imageFooter" :src="require('assets/gif/how-we-work-7.gif')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/style/colors.scss";
@import "~assets/style/theme.css";
.first-column {
  text-align: left;
  width: 30%;
  float: left;
}

.second-column {
  width: 70%;
  float: left;
  text-align: left;
}

.app-quick-guide {
  width: 100%;
  background-color: $white;
  padding: 50px;
  margin-bottom: 10vh;
}

h2 {
  text-align: center;
  color: $primary;
  margin-top: 60px !important;
}

.details-holder {
  justify-content: center;
  width: 100%;
  margin: 10px;
}
.item-holder {
  background-color: #5e17eb;
  text-align: center;
  min-height: 220px;
  width: 40%;
  border-radius: 10px;
}
.item-holder:hover {
  cursor: pointer;
  background-color: #ccc;
}
.line1 {
  width: 50%;
  margin-right: 50%;
  height: 2px;
  background: $secondary;
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

.gif-image2 {
  height: 250px;
  width: 380px;
  top: 18px;
}
.gif-imageFooter {
  height: 250px;
  width: 25%;
  margin-top: 100px;
}
.component-header {
  margin-top: -200px;
}
.component-footer {
  width: 100%;
}

@media only screen and (max-width: 1300px) {
  .first-column {
    width: 40% !important;
  }

  .second-column {
    width: 60% !important;
  }
}

@media only screen and (max-width: 1200px) {
  .gif-image2 {
    height: 180px !important;
    width: 280px !important;
    margin-top: 50px !important;
  }

  .gif-imageFooter {
    height: 180px !important;
  }
}

@media only screen and (max-width: 991px) {
  h2 {
    margin-top: 0px !important;
  }
  .second-column,
  .first-column {
    text-align: center !important;
    width: 90% !important;
    margin: unset;
    margin-left: 5% !important;
    margin-right: 5% !important;
    margin-bottom: 1% !important;
  }
  .line1 {
    width: 50%;
    margin-right: 25% !important;
    margin-left: 25% !important;
    height: 2px;
    background: $secondary;
  }
  .details-holder {
    width: 100%;
  }
  .item-holder,
  .item-holder-click {
    width: 100%;
  }
  .component-header {
    display: none !important;
  }
  .component-footer {
    display: none !important;
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
      actives: []
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
