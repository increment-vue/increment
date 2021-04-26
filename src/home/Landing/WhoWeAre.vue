<template>
  <div class="banner" id="who-we-are">
    <div class="container">
      <h1 class="title">Who We Are</h1>
      <div style="text-align: justify; margin-top: 8vh">
        <h3>INTRODUCTION</h3>
        <p>
          Founded in 2017, Increment Technologies set itself out to be a leading
          Website and Mobile Development firm in Cebu. We develop high-quality
          digital projects, from landing pages to full-blown e-commerce.
        </p>
        <p>
          In pursuit of quality, we strategically develop every project to set
          out distinctiveness in every client’s needs. Our clients are mostly
          from outside the country, but since we saw that there's a huge
          potential from the domestic market, we are now providing locals with
          our services and increasing our visibility.
        </p>
        <h3>OUR VISION</h3>
        <p>
          Increment Technologies visions to help businesses succeed with their
          goals by providing innovative ideas and best tools that exceeds
          standards. We strive to create opportunities for businesses to excel
          in their industries.
        </p>
        <h3>OUR MISSION</h3>
        <p>
          Our mission is to create high quality and secured websites, website
          applications, and mobile applications from small to corporate level
          businesses. Our goal is to develop sustainable strategies aligning to
          the modern array of services. We take pride in creating solutions to
          your needs.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.banner {
  background-color: white;
  min-height: 100vh;
  float: left;
  width: 100%;
}

.title {
  font-weight: 700;
  font-size: 50px;
  color: black;
}

.container {
  padding-top: 50vh;
  padding-bottom: 20vh;
  text-align: center;
  color: black;
}

h3 {
  font-weight: 700;
  margin-top: 5vh;
}

h3::after {
  content: " ";
  margin-top: 5px;
  position: absolute;
  display: block;
  width: 120px;
  height: 2px;
  background: $secondary;
}

p {
  margin-top: 2vh;
}
</style>
