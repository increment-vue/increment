<template>
  <div class="document-holder">
    <span class="text-holder">
      <div class="blog-content">
        <p>
          <button class="btn btn-primary" @click="redirect('/')">Home</button>
          <button
            class="btn btn-primary"
            @click="redirect('/stories')"
            style="margin-left: 10px; margin-right: 10px"
          >
            Stories
          </button>
        </p>
        <span class="blog-item">
          <span class="details">
            <h3 style="margin-top: 25px">
              {{ selected.title }}
            </h3>
            <p class="sub">
              Published by <b>{{ selected.author }}</b> on {{ selected.date }}
            </p>
            <span class="image-holder" v-if="selected.type === 'internal'">
              <img :src="require('assets/img/' + selected.featured_image)" />
            </span>
            <span
              class="video-holder"
              v-if="selected.type === 'internal_video'"
              v-html="require('assets/img/' + selected.featured_image)"
            ></span>
          </span>
          <component v-bind:is="selected.content"></component>
        </span>
      </div>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";
.document-holder {
  width: 100%;
  float: left;
}
.text-holder {
  width: 50%;
  float: left;
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: justify;
}

p {
  font-size: 16px;
}

h3 {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-top: 30px;
}

.blog-item {
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.image-holder {
  min-height: 300px;
  width: 100%;
  float: left;
  overflow: hidden;
  text-align: center;
}

.yt-video {
  width: 100vw;
  height: 60vw; /* 90*9/16 */
}

.video-holder {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 60vh;
  overflow: hidden;
}

.video-holder iframe,
.video-holder object,
.video-holder embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sub {
  text-align: center;
}

.blog-item .details {
  padding-bottom: 50px;
  float: left;
  width: 100%;
  min-height: 50px;
  text-align: justify;
}

.details label {
  width: 100%;
  margin-top: 25px;
}

.loading {
  font-size: 75px;
  width: 100%;
  color: $primary;
  text-align: center;
  height: 100vh;
  float: left;
}

.image-holder img {
  width: 100%;
  height: auto;
}

.fa-spin {
  animation-duration: 0.5s;
  margin-top: 40vh;
}

.btn-primary {
  background-image: linear-gradient(
    -240deg,
    $gradientPrimary,
    $gradientSecondary
  );
  color: $white !important;
  border-radius: 5px !important;
  height: 50px;
  width: 150px;
  border: none;
}

@media screen and (max-width: 992px) {
  h3 {
    font-size: 25px !important;
  }
  img {
    height: auto !important;
    width: 100% !important;
    float: left;
  }

  .blog-item .details {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
<script>
import ROUTER from "router";
import Stories from "src/home/stories";
export default {
  components: {},
  mounted() {
    this.getBlog();
  },
  data() {
    return {
      stories: Stories.blogs,
      selected: [],
    };
  },
  methods: {
    redirect(params) {
      ROUTER.push(params);
    },
    getBlog() {
      for (var i = 0; i < this.stories.length; i++) {
        if (
          this.stories[i].title.includes(
            this.$route.params.title.split("_").join(" ")
          )
        ) {
          this.selected = this.stories[i];
          break;
        }
      }
    },
  },
};
</script>

