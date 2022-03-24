<template>
  <div>
    <Breadcrumbs title="We care about your success" />
    <div class="document-holder">
      <span class="text-holder">
        <div class="blog-list">
          <span
            class="blog-item"
            v-for="(item, index) in blogs"
            :key="index"
            @click="checkRoute(item)"
          >
            <span class="image-holder" v-if="item.type !== 'internal_video'">
              <img :src="require('assets/img/' + item.featured_image)" />
            </span>
            <span class="image-holder" v-if="item.type === 'internal_video'">
              <span v-html="require('assets/img/' + item.featured_image)">
              </span>
            </span>
            <span class="details">
              <h3>
                {{ item.title }}
              </h3>
              Published by <b>{{ item.author }}</b> on {{ item.date }}
              <br />
              <label v-html="item.introduction"></label>
            </span>
          </span>
        </div>
      </span>
    </div>
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
}

.blog-item {
  width: 100%;
  float: left;
  min-height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
}

.blog-item:hover {
  padding-bottom: 2vh;
  cursor: pointer;
  border-bottom: solid 1px $primary;
  img {
    opacity: 0.5;
    background: #000;
  }
}

.blog-item .details {
  padding-left: 25px;
  padding-bottom: 25px;
  padding-right: 25px;
  float: left;
  width: 60%;
  height: 300px;
  overflow: hidden;
  text-align: justify;
}

.image-holder {
  min-height: 100px;
  border-radius: 5px;
  width: 40%;
  float: left;
  overflow: hidden;
}

.image-holder img {
  height: auto;
  width: 100%;
  float: left;
}

.details label {
  width: 100%;
  margin-top: 25px;
}

@media screen and (max-width: 992px) {
  h3 {
    font-size: 25px !important;
  }
  img {
    height: 100%;
    width: 100%;
    float: left;
  }

  .image-holder {
    width: 100%;
  }

  .blog-item .details {
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    margin-top: 25px;
  }
}
</style>

<script>
import ROUTER from "src/router";
import Breadcrumbs from "src/home/generic/breadCrumbs.vue";
import Stories from "src/home/stories";
export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      blogs: Stories.blogs,
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
    checkRoute(item) {
      if (item.type === "external") {
        window.open(item.content);
      } else {
        this.redirect("/stories/page/" + item.title.split(" ").join("_"));
      }
    },
  },
};
</script>