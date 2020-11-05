<template>
  <div class="home-page">
    <nav-bar />
    <personal-info />
    <about-me />
    <page-skill />
    <my-portfolio  />
    <contact />
  </div>
</template>
<script>
import NavBar from "../components/navBar.vue";
import AboutMe from "../components/about.vue";
import PageSkill from "../components/skill.vue";
import MyPortfolio from "../components/portfolio.vue";
import PersonalInfo from "../components/personalInfo.vue";
import contact from "../components/contact.vue";

export default {
  name: "home-page",
  components: {
    PersonalInfo,
    NavBar,
    MyPortfolio,
    AboutMe,
    PageSkill,
    contact
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jura&family=Orbitron:wght@400;500&display=swap");
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: white;
}
.home-page {
  position: relative;
  width: 100vw;
  height: 380vh;
  overflow: hidden;
  .home-background {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 255, 255, 0.082);
    top: 0%;
  }
  .personal-info {
    z-index: 50;
    position: relative;
  }
  .nav-bar {
    z-index: 90;
    position: absolute;
  }
  .about-me {
    z-index: 45;
    position: relative;
  }
  .skill {
    z-index: 40;
    position: relative;
  }
  .portfolio {
    z-index: 35;
    position: relative;
  }
  .contact {
    z-index: 30;
    position: absolute;
  }
}

@media only screen and (min-width: 1366px) {
  .home-page {
     
    height: 400vh;

  
  }
}
</style>
