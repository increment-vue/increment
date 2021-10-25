<template>
  <div class="whole-container">
    <div style="margin-top: 10%">
      <SectionHeader
        :title="'HOW WE WORK'"
        :description="null"
        :stylecss="style"
      ></SectionHeader>
    </div>
    <div class="row details-holder">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="`item-holder-click ${
          !actives.includes(index) ? 'item-holder' : 'item-holder-click'
        }`"
        @click="show(index)"
      >
        <div v-if="actives.includes(index) == false">
          <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
          <p class="item-title">{{ item.title }}</p>
        </div>
        <div
          class="row item-clicked"
          v-if="actives.length > 0 && actives.includes(index)"
        >
          <div>
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
      <!-- <div
        v-for="(item, index) in data"
        :key="index"
        :class="`item-holder-click ${
          !actives.includes(index) ? 'item-holder' : 'item-holder-click'
        }`"
      >
        <div v-if="actives.includes(index) == false">
          <font-awesome-icon :icon="item.icon" class="font-awesome-icon" />
          <p class="title">{{ item.title }}</p>
        </div>
        <div
          v-if="actives.length > 0 && actives.includes(index)"
          class="row item-clicked"
        >
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
      </div> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
@import "~assets/style/theme.css";
.whole-container {
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
    $gradientPrimary 0%,
    $gradientTertiary 51.04%,
    $gradientSecondary 100%
  );
  text-align: center;
  min-height: 220px;
  width: 40%;
  border-radius: 10px;
  margin-top: 50px;
  padding-top: 30px;
  margin-left: 2%;
  margin-right: 2%;
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
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  color: $white;
  margin-top: 10px;
}
.component-footer {
  display: block;
}
.card-container {
  width: 35%;
  margin-left: 10%;
}
@media (max-width: 992px) {
  .component-footer {
    display: none;
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
import SectionHeader from "src/home/generic/sectionHeader.vue";
// import ROUTER from "src/router";
import ColorsJS from "src/assets/style/colors.js";
export default {
  mounted() {},
  components: {
    SectionHeader,
  },
  data() {
    return {
      style: {
        color: ColorsJS.primary,
      },
      active: null,
      actives: [],
      data: [
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